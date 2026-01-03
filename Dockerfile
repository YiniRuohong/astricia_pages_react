# 多阶段构建 - 优化镜像大小
FROM node:18-alpine AS base

# 安装 pnpm
RUN npm install -g pnpm@8

# 设置工作目录
WORKDIR /app

# 复制依赖文件
COPY package.json pnpm-lock.yaml ./

#
# 依赖安装阶段
#
FROM base AS deps

# 安装依赖
RUN pnpm install --frozen-lockfile

#
# 构建阶段
#
FROM base AS builder

# 复制依赖
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 设置构建时环境变量
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# 构建应用
RUN pnpm build

#
# 运行阶段
#
FROM base AS runner

WORKDIR /app

# 设置运行时环境变量
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# 创建非 root 用户
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 复制必要的文件
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# 设置正确的权限
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# 启动应用
CMD ["node", "server.js"]
