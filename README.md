# Astricia Pages React

Astricia 的个人角色展示页面，基于 Next.js 16、React 19 和 Tailwind CSS 构建。

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ 特性

- 🎨 **现代化设计** - 简洁优雅的 UI 设计，参考 shiro.page 极简风格
- 🌓 **主题切换** - 支持亮色/暗色主题自动切换
- 🌍 **多语言支持** - 内置中文、英文、日文三种语言
- 📱 **响应式布局** - 完美适配桌面、平板、手机端
- 🗺️ **沉浸式地图** - 支持拖拽、滚轮缩放、双指手势的交互式地图
- 🖼️ **图片画廊** - 精美的图片展示，支持懒加载和弹窗预览
- ⚡ **性能优化** - 代码分割、动态导入、优化的加载策略
- 🐳 **Docker 支持** - 一键容器化部署

## 📋 技术栈

- **框架**: [Next.js 16.1.1](https://nextjs.org/)
- **UI 库**: [React 19.2.3](https://react.dev/)
- **语言**: [TypeScript 5.9.3](https://www.typescriptlang.org/)
- **样式**: [Tailwind CSS 3.4.17](https://tailwindcss.com/)
- **组件**: [Radix UI](https://www.radix-ui.com/)
- **图标**: [Lucide React](https://lucide.dev/)
- **主题**: [next-themes](https://github.com/pacocoursey/next-themes)
- **表单**: [React Hook Form](https://react-hook-form.com/)

## 🚀 快速开始

### 前置要求

- Node.js 18.17+ 或更高版本
- pnpm 8.0+ 或更高版本

### 安装与运行

```bash
# 1. 克隆仓库
git clone https://github.com/YiniRuohong/astricia_pages_react.git
cd astricia_pages_react

# 2. 修改配置文件（可选）
# 编辑 config/site.config.ts 自定义站点内容

# 3. 安装依赖
pnpm install

# 4. 启动开发服务器
pnpm dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 📦 可用脚本

```bash
# 开发模式（热重载）
pnpm dev

# 生产构建
pnpm build

# 启动生产服务器
pnpm start

# 代码检查
pnpm lint

# 运行测试
pnpm test
```

## 🐳 Docker 部署

### 方式一：使用 Dockerfile

```bash
# 构建镜像
docker build -t astricia-pages .

# 运行容器
docker run -p 3000:3000 astricia-pages
```

### 方式二：使用 Docker Compose（推荐）

```bash
# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

### Docker 环境变量

创建 `.env.local` 文件配置环境变量：

```env
# 应用端口（默认 3000）
PORT=3000

# Node 环境
NODE_ENV=production
```

## 📤 部署指南

### Vercel 部署（推荐）

1. Fork 本仓库到你的 GitHub 账号
2. 访问 [Vercel](https://vercel.com) 并导入项目
3. Vercel 会自动检测 Next.js 并配置构建设置
4. 点击 Deploy 按钮即可

部署地址：https://astricia.de

### 其他平台部署

#### 传统服务器部署

```bash
# 1. 本地构建
pnpm build

# 2. 上传以下文件到服务器
# - .next/
# - public/
# - package.json
# - pnpm-lock.yaml

# 3. 在服务器上安装依赖
pnpm install --production

# 4. 启动服务
pnpm start
```

#### 使用 PM2 守护进程

```bash
# 安装 PM2
npm install -g pm2

# 启动应用
pm2 start npm --name "astricia" -- start

# 保存 PM2 配置
pm2 save

# 设置开机自启
pm2 startup
```

### 环境变量配置

生产环境建议在 `.env.production` 中配置：

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🏗️ 项目结构

```
astricia_pages_react/
├── config/               # 配置文件 ⭐
│   └── site.config.ts    # 站点统一配置文件（修改这里自定义内容）
├── app/                  # Next.js App Router
│   ├── page.tsx         # 首页
│   ├── map/             # 地图页面
│   │   └── page.tsx     # 地图组件
│   ├── layout.tsx       # 根布局
│   └── globals.css      # 全局样式
├── components/          # React 组件
│   ├── ui/              # shadcn/ui 基础组件
│   ├── character-showcase.tsx    # 角色展示（打字机+图片）
│   ├── character-info.tsx        # 角色信息
│   ├── author-info.tsx           # 创作者信息
│   ├── map-entry-button.tsx      # 地图入口按钮
│   ├── image-gallery.tsx         # 立绘切换（常服/冬装）
│   ├── photo-gallery.tsx         # 图片画廊
│   ├── immersive-map.tsx         # 沉浸式地图
│   ├── theme-toggle.tsx          # 主题切换
│   ├── language-switcher.tsx     # 语言切换
│   ├── dynamic-background.tsx    # 动态背景
│   ├── scroll-handler.tsx        # 滚动处理
│   ├── back-to-top-button.tsx    # 返回顶部
│   └── providers.tsx             # 全局 Provider
├── lib/                 # 工具库
│   └── i18n/            # 国际化配置
│       ├── translations.ts     # 翻译文件
│       ├── language-provider.tsx
│       └── use-translation.ts
├── public/              # 静态资源
│   └── map.png         # 地图图片
├── Dockerfile          # Docker 配置
├── docker-compose.yml  # Docker Compose 配置
├── .env.example        # 环境变量示例
├── next.config.mjs     # Next.js 配置
├── tailwind.config.ts  # Tailwind CSS 配置
├── tsconfig.json       # TypeScript 配置
└── package.json        # 项目依赖
```

## 🎨 自定义指南

> **重要提示**：本项目使用统一的配置文件系统，**所有自定义内容都在 `config/site.config.ts` 文件中**，无需修改代码。

### 快速自定义

编辑 `config/site.config.ts` 文件即可自定义整个站点。配置文件包含以下部分：

```typescript
// config/site.config.ts

export const siteConfig = {
  // ============================================
  // 应用基础配置
  // ============================================
  siteName: 'Astricia',              // 站点名称
  siteDescription: '...',            // 站点描述
  siteKeywords: '...',               // SEO 关键词

  // ============================================
  // 角色信息配置 ⭐
  // ============================================
  character: {
    name: 'Astricia',                // 角色名称
    birthday: '12月8日',             // 生日（中文）
    birthdayEn: 'December 8',        // 生日（英文）
    personality: '活泼、开朗、乐于助人。',  // 性格描述

    // 角色特征（多语言）
    traits: {
      beastEars: { zh: '兽耳', en: 'Beast Ears', ja: '獣耳' },
      staff: { zh: '法杖', en: 'Staff', ja: '杖' },
      // ... 添加更多特征
    },

    // 角色喜好（多语言）
    likes: {
      ancientStories: {
        zh: '收集古老故事',
        en: 'Collecting ancient stories',
        ja: '古い物語を集めること',
      },
      // ... 添加更多喜好
    },

    // 立绘图片 URL
    images: {
      casualWithoutCloak: 'https://...',   // 常服（无披风）
      casualWithCloak: 'https://...',       // 常服（有披风）
      winter: 'https://...',                // 冬装
    },

    signatureImage: 'https://...',          // 签名图片
  },

  // ============================================
  // 作者信息配置 ⭐
  // ============================================
  authorInfo: {
    displayName: {
      zh: '创作者',
      en: 'Creator',
      ja: 'クリエイター',
    },
    avatar: 'https://...',                  // 头像 URL
    description: {
      zh: '角色设计师 & 插画师',
      en: 'Character designer & illustrator',
      ja: 'キャラクターデザイナー＆イラストレーター',
    },

    // 社交链接
    socialLinks: {
      blog: {
        url: 'https://blog.atago.moe',
        label: { zh: '个人博客', en: 'Personal Blog', ja: '個人ブログ' },
      },
      twitter: {
        url: 'https://x.com/Yini_Ruohong',
        label: 'Twitter',
      },
    },
  },

  // ============================================
  // 地图配置
  // ============================================
  map: {
    image: 'map.png',                       // 地图图片（相对于 public 目录）
    config: {
      minScale: 0.5,                        // 最小缩放比例
      maxScale: 3,                          // 最大缩放比例
      defaultScale: 1,                      // 默认缩放比例
    },
    text: {
      title: { zh: 'World Map', en: 'World Map', ja: 'ワールドマップ' },
      subtitle: { zh: '拖动探索 · 滚轮缩放', en: 'Drag to explore · Scroll to zoom', ja: 'ドラッグして探索 · スクロールでズーム' },
      // ... 更多文本
    },
  },

  // ============================================
  // 图片画廊配置
  // ============================================
  gallery: {
    title: { zh: '相册展示', en: 'Photo Gallery', ja: 'フォトギャラリー' },

    // 图片列表（添加/删除图片）
    images: [
      { src: 'https://...', alt: 'Astricia illustration 1' },
      { src: 'https://...', alt: 'Astricia illustration 2' },
      // ... 添加更多图片
    ],
  },

  // ============================================
  // 功能开关配置
  // ============================================
  features: {
    dynamicBackground: true,      // 动态背景效果
    typewriterEffect: true,       // 打字机效果
    backToTopButton: true,        // 返回顶部按钮
    photoGallery: true,           // 图片画廊
    mapPage: true,                // 地图页面
  },

  // ============================================
  // UI、性能、SEO 等其他配置
  // ============================================
  // ... 详见配置文件
}
```

### 配置示例

#### 修改角色信息

```typescript
character: {
  name: '你的角色名',
  birthday: '1月1日',
  personality: '描述角色的性格...',
  traits: {
    customTrait: { zh: '自定义特征', en: 'Custom Trait', ja: 'カスタム' },
  },
}
```

#### 更换立绘图片

```typescript
character: {
  images: {
    casualWithoutCloak: 'https://your-cdn.com/image1.png',
    casualWithCloak: 'https://your-cdn.com/image2.png',
    winter: 'https://your-cdn.com/image3.png',
  },
}
```

#### 添加画廊图片

```typescript
gallery: {
  images: [
    // ... 现有图片
    { src: 'https://your-new-image.jpg', alt: 'New illustration' },
  ],
}
```

#### 更换作者信息

```typescript
authorInfo: {
  avatar: 'https://your-avatar.jpg',
  description: { zh: '你的描述', en: 'Your description', ja: 'あなたの説明' },
  socialLinks: {
    blog: { url: 'https://your-blog.com', label: { zh: '博客', en: 'Blog', ja: 'ブログ' } },
  },
}
```

#### 更换地图图片

有两种方式：

1. **替换文件**（推荐）：将新的地图图片放到 `public/map.png`
2. **修改配置**：在 `config/site.config.ts` 中修改路径：

```typescript
map: {
  image: 'your-custom-map.png',  // 文件放在 public 目录下
}
```

#### 开启/关闭功能

```typescript
features: {
  dynamicBackground: false,  // 关闭动态背景（提升低端设备性能）
  photoGallery: true,        // 保持图片画廊开启
}
```

### 添加新语言

1. 在 `config/site.config.ts` 中添加语言配置：

```typescript
languages: {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  fr: 'Français',  // 添加法语
}
```

2. 在各个配置项中添加对应语言的翻译（详见配置文件注释）

### 环境变量覆盖（可选）

生产环境可以通过环境变量覆盖部分配置：

```env
# .env.production
PORT=3000
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 配置文件优势

- ✅ **集中管理**：所有配置在一个文件中
- ✅ **中文注释**：每个配置项都有详细说明
- ✅ **类型安全**：TypeScript 提供完整的类型提示
- ✅ **无需编程**：修改配置无需了解代码结构
- ✅ **快速部署**：修改配置后重新构建即可

## ⚡ 性能优化

本项目已实施以下优化：

- ✅ **代码分割** - 使用 Next.js dynamic import 按需加载
- ✅ **图片优化** - Next.js Image 组件自动优化
- ✅ **懒加载** - 图片画廊和动态背景按需加载
- ✅ **CSS 优化** - Tailwind CSS 自动清除未使用样式
- ✅ **Tree Shaking** - 自动移除未使用代码
- ✅ **静态生成** - 预渲染页面提升首屏速度
- ✅ **Suspense** - 骨架屏提升用户体验

性能指标：
- LCP (Largest Contentful Paint): < 1.2s
- FCP (First Contentful Paint): < 0.8s
- CLS (Cumulative Layout Shift): < 0.1

## 📝 更新日志

### 2025-01-03 - 重大更新 v2.0

**设计改进：**
- ✅ 重新设计主页面，参考 shiro.page 极简风格
- ✅ 添加打字机标题效果（"Astricia"）
- ✅ 统一常服/冬装立绘尺寸（5:7 宽高比）
- ✅ 添加图片切换淡入淡出过渡动画 (200ms)
- ✅ 修复滚动回弹问题，提供流畅自然的滚动体验

**地图页面：**
- ✅ 采用中古游戏风格设计（参考 eldenringmap）
- ✅ 深色主题 (slate-950) 背景提升沉浸感
- ✅ 近全屏地图展示，提高屏占比
- ✅ 添加双指缩放功能（移动端）
- ✅ 浮动控制面板和全屏支持

**移动端优化：**
- ✅ 全面的响应式设计优化
- ✅ 自适应文字大小和间距
- ✅ 优化触摸目标尺寸
- ✅ 主题切换按钮位置修复

**依赖更新：**
- Next.js: 15.2.4 → 16.1.1
- React: 19.0.0 → 19.2.3
- TypeScript: 5.0.2 → 5.9.3
- 所有 Radix UI 组件更新到最新版本

**功能添加：**
- ✅ 多语言副标题支持
- ✅ 移动端主题切换按钮修复
- ✅ Docker 容器化支持
- ✅ 清理 OS 生成文件

## 🔧 故障排除

### 端口被占用

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <进程ID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### 依赖安装失败

```bash
# 清理缓存并重新安装
rm -rf node_modules .next
pnpm install
```

### 构建失败

```bash
# 检查 Node 版本
node --version  # 应该 >= 18.17.0

# 清理并重新构建
rm -rf .next
pnpm build
```

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🌐 在线示例

- **Vercel 部署**: https://astricia.de

## 📧 联系方式

- **作者**: YiniRuohong
- **个人博客**: [blog.atago.moe](https://blog.atago.moe)
- **Twitter**: [@Yini_Ruohong](https://x.com/Yini_Ruohong)

---

## 📖 关于 Astricia

至于为什么有我女儿这个角色呢，大概是我从小就对剑与魔法的世界充满了幻想和憧憬吧。到了高中中二的年龄，加上住在学校有着充足的（摸鱼）时间，所以就有了这个角色，也有了围绕这个角色所产生的一系列故事。这些故事体现着高中生活中的点点滴滴，也体现着脱离生活的无穷幻想。我并不期望她与她的故事能有多么的人尽皆知或怎么样，但是我仍然想在互联网的小小角落，为我可爱的女儿以及她所承载的三年青春留下轻轻的记号。
