# Astricia Pages React

一个基于 Next.js、React 和 Tailwind CSS 构建的角色页面示例，支持多语言、地图、画廊等功能。

## 技术栈

- Next.js 15.x
- React 19.x
- TypeScript
- Tailwind CSS
- Radix UI
 - astricia.dev（自动同步部署）
- Vercel

## 主要功能

- 响应式布局
- 主题切换（暗色/亮色模式）
- i18n 多语言支持
- 图片画廊、照片集
- 沉浸式地图
- 角色卡片展示

## 更新日志 / Changelog

### 2025-01-03 - UI 重新设计与移动端优化

**设计改进 / Design Improvements:**
- 重新设计主页面，参考 shiro.page 极简风格，去除过度装饰元素
- 简洁的打字机标题效果，配合"一段命运的旅程"副标题
- 优化布局结构，聚焦内容展示
- 统一常服/冬装立绘尺寸，使用固定宽高比容器
- 添加图片切换时的淡入淡出过渡动画 (200ms)
- 修复滚动回弹问题，提供流畅自然的滚动体验

**地图页面重新设计 / Map Page Redesign:**
- 采用中古游戏风格设计（参考 eldenringmap）
- 深色主题 (slate-950) 背景提升沉浸感
- 近全屏地图展示，提高屏占比
- 浮动控制面板，包含全屏功能按钮
- 游戏风格标题覆盖层
- 响应式设计，完美支持移动端

**移动端优化 / Mobile Optimization:**
- 全面的响应式设计优化
- 移动端自适应文字大小 (text-xs md:text-sm)
- 响应式间距和内边距 (px-4 py-3 md:px-8 md:py-6)
- 优化触摸目标尺寸 (h-4 w-4 md:h-5 md:w-5)
- 标题响应式缩放 (text-4xl md:text-7xl)
- 图库布局移动端优化
- 更紧凑的移动端间距设计

**组件更新 / Component Updates:**
- theme-toggle.tsx: 响应式图标尺寸
- language-switcher.tsx: 移动端友好内边距
- character-showcase.tsx: 响应式标题和图片容器
- character-info.tsx: 移动端文字尺寸优化
- author-info.tsx: 响应式头像和按钮
- map-entry-button.tsx: 响应式按钮内边距
- photo-gallery.tsx: 响应式间距布局
- immersive-map.tsx: 全屏功能修复

## 本地运行

```bash
pnpm install
pnpm dev
```

访问 http://localhost:3000

## 构建与部署

```bash
pnpm build
pnpm start
```

已部署于 Vercel: https://astricia.de

## 关于女儿角色

至于为什么有我女儿这个角色呢，大概是我从小就对剑与魔法的世界充满了幻想和憧憬吧。到了高中中二的年龄，加上住在学校有着充足的（摸鱼）时间，所以就有了这个角色，也有了围绕这个角色所产生的一系列故事。这些故事体现着高中生活中的点点滴滴，也体现着脱离生活的无穷幻想。我并不期望她与她的故事能有多么的人尽皆知或怎么样，但是我仍然想在互联网的小小角落，为我可爱的女儿以及她所承载的三年青春留下轻轻的记号。