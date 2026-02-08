# Astricia Pages React 说明文档

> 本文为项目详细说明与使用指南。适合部署、维护与二次定制。

## 目录

- [项目架构](#项目架构)
- [部署方式](#部署方式)
  - [Vercel 部署（推荐）](#vercel-部署推荐)
  - [本地开发与预览](#本地开发与预览)
  - [Docker 部署](#docker-部署)
- [配置方法（逐行说明）](#配置方法逐行说明)
  - [站点基础信息](#站点基础信息)
  - [功能开关](#功能开关)
  - [角色信息](#角色信息)
  - [作者信息](#作者信息)
  - [地图配置](#地图配置)
  - [图片画廊配置](#图片画廊配置)
- [版本更新历史](#版本更新历史)

---

## 项目架构

```
astricia_pages_react/
├── app/                  # Next.js App Router 页面
│   ├── page.tsx          # 首页
│   ├── map/              # 地图页面
│   │   └── page.tsx
│   ├── layout.tsx        # 根布局
│   └── globals.css       # 全局样式
├── components/           # 业务组件
│   ├── ui/               # shadcn/ui 基础组件
│   ├── character-showcase.tsx  # 角色展示（标题+立绘）
│   ├── character-info.tsx      # 角色信息卡片
│   ├── author-info.tsx         # 作者信息
│   ├── image-gallery.tsx       # 立绘切换
│   ├── photo-gallery.tsx       # 画廊
│   ├── immersive-map.tsx       # 沉浸式地图
│   ├── dynamic-background.tsx  # 动态背景
│   └── back-to-top-button.tsx  # 返回顶部
├── config/               # 配置文件（可直接编辑）
│   └── site.config.ts
├── lib/                  # 工具与多语言
│   └── i18n/             # 翻译与语言状态
├── public/               # 静态资源（如 map.png）
├── Dockerfile            # Docker 构建
├── docker-compose.yml    # Docker Compose
└── README.md             # 项目简介
```

---

## 部署方式

### Vercel 部署（推荐）

1. 访问仓库并点击 README 中的 **Deploy with Vercel** 按钮
2. 选择你的 GitHub 账号并创建新项目
3. Vercel 将自动识别 Next.js 项目并构建部署

> 默认无需额外环境变量。修改配置后需重新部署。

---

### 本地开发与预览

```bash
# 1. 安装依赖
pnpm install

# 2. 启动开发服务器
pnpm dev
```

打开浏览器访问：`http://localhost:3000`

---

### Docker 部署

#### 方式一：使用 Dockerfile

```bash
# 构建镜像
docker build -t astricia-pages .

# 运行容器
docker run -p 3000:3000 astricia-pages
```

#### 方式二：使用 Docker Compose

```bash
# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

---

## 配置方法（逐行说明）

所有自定义内容在 `config/site.config.ts` 中完成。修改后需要重新构建或重新部署。

> 下方按模块逐行说明配置项用途和填写方式。

### 站点基础信息

```ts
siteName: 'Astricia' // 站点名称（浏览器标题）
siteDescription: '...' // 站点描述（用于分享卡片）
siteKeywords: '...' // SEO 关键词，逗号分隔
author: {
  name: 'YourName' // 作者名称（metadata）
  url: 'https://your-site.com' // 作者主页
}
```

### 功能开关

```ts
features: {
  dynamicBackground: true // 是否显示动态背景
  typewriterEffect: true // 是否启用打字机效果
  backToTopButton: true // 是否显示返回顶部
  photoGallery: true // 是否显示图片画廊
  mapPage: true // 是否启用地图页面
  showThemeToggle: true // 是否显示主题切换按钮
  showLanguageSwitcher: true // 是否显示语言切换按钮
}
```

### 角色信息

```ts
character: {
  name: 'Astricia' // 角色名称
  birthday: '12月8日' // 生日（中文）
  birthdayEn: 'December 8' // 生日（英文）
  personality: '活泼、开朗、乐于助人。' // 性格描述
  traits: { ... } // 角色特征（多语言）
  likes: { ... } // 角色喜好（多语言）
  images: { ... } // 立绘图片 URL
  signatureImage: 'https://...' // 签名图 URL
}
```

### 作者信息

```ts
authorInfo: {
  displayName: { zh: '创作者', en: 'Creator', ja: 'クリエイター' } // 多语言名称
  avatar: 'https://...' // 作者头像
  description: { ... } // 作者描述
  socialLinks: { ... } // 社交链接
}
```

### 地图配置

```ts
map: {
  config: {
    minScale: 0.5 // 最小缩放比例
    maxScale: 3 // 最大缩放比例
    defaultScale: 1 // 初始缩放比例
  }
  text: { ... } // 地图页面文案
}
```

### 图片画廊配置

```ts
gallery: {
  title: { zh: '相册展示', en: 'Photo Gallery', ja: 'フォトギャラリー' } // 标题
  images: [
    { src: 'https://...', alt: 'Astricia illustration 1' } // 图片地址与替代文本
  ]
}
```

---

## 版本更新历史

### v2.0.0（2025-01-03）
- 重构首页布局并优化视觉风格
- 新增地图页与全屏控制
- 增强响应式适配
- 支持 Docker 部署

### v3.0.0（2025-xx-xx）
- 精简配置结构，集中化开关
- 增强可访问性（Dialog 标题修复）
- README 精简，新增文档索引
