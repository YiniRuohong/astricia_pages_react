/**
 * 站点统一配置文件
 *
 * 这个文件包含了整个项目的所有可配置项
 * 修改此文件后需要重新构建项目才能生效
 *
 * 部署说明：
 * - 普通部署：直接修改此文件，运行 pnpm build && pnpm start
 * - Docker部署：修改此文件后重新构建镜像即可
 * - 环境变量：可以通过环境变量覆盖部分配置（见下方说明）
 */

export const siteConfig = {
  // ============================================
  // 应用基础配置
  // ============================================

  /**
   * 应用端口号
   * 说明：应用运行的端口号
   * 环境变量覆盖：PORT
   */
  port: 3000,

  /**
   * Node 环境
   * 说明：production 为生产模式，development 为开发模式
   * 环境变量覆盖：NODE_ENV
   */
  nodeEnv: process.env.NODE_ENV || 'production',

  /**
   * 站点 URL
   * 说明：站点的完整访问地址
   * 用途：生成元数据、SEO、API 请求等
   * 环境变量覆盖：NEXT_PUBLIC_SITE_URL
   */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',

  // ============================================
  // 站点元数据配置
  // ============================================

  /**
   * 站点名称
   * 说明：显示在浏览器标签页的标题
   */
  siteName: 'Astricia',

  /**
   * 站点描述
   * 说明：用于 SEO 的站点描述
   */
  siteDescription: 'Astricia 的个人角色展示页面',

  /**
   * 站点关键词
   * 说明：用于 SEO 的关键词，用逗号分隔
   */
  siteKeywords: 'Astricia, 角色, OC, 原创角色, 插画',

  /**
   * 作者信息
   * 说明：站点作者的元数据信息
   */
  author: {
    name: 'YiniRuohong',
    url: 'https://blog.atago.moe',
    email: '', // 邮箱地址（可选）
    twitter: '@Yini_Ruohong', // Twitter 用户名（不含@）
  },

  // ============================================
  // 功能开关配置
  // ============================================

  /**
   * 启用的功能列表
   * 说明：设置为 false 可以关闭对应功能
   */
  features: {
    /**
     * 动态背景效果
     * 说明：鼠标跟随的渐变背景效果
     * 关闭后可以提高低端设备的性能
     */
    dynamicBackground: true,

    /**
     * 打字机效果
     * 说明：标题"Astricia"的打字机动画
     */
    typewriterEffect: true,

    /**
     * 返回顶部按钮
     * 说明：滚动到一定距离后显示的返回顶部按钮
     */
    backToTopButton: true,

    /**
     * 图片画廊
     * 说明：底部的图片展示区域
     */
    photoGallery: true,

    /**
     * 地图页面
     * 说明：交互式地图页面
     */
    mapPage: true,
  },

  // ============================================
  // 主题配置
  // ============================================

  /**
   * 默认主题
   * 说明：light = 亮色模式, dark = 暗色模式, system = 跟随系统
   */
  defaultTheme: 'system' as 'light' | 'dark' | 'system',

  /**
   * 主题切换按钮
   * 说明：是否显示主题切换按钮
   */
  showThemeToggle: true,

  // ============================================
  // 语言配置
  // ============================================

  /**
   * 默认语言
   * 说明：site 表示跟随浏览器语言
   * 可选值：'en' | 'zh' | 'ja' | 'site'
   */
  defaultLanguage: 'zh' as 'en' | 'zh' | 'ja' | 'site',

  /**
   * 支持的语言列表
   * 说明：配置站点支持的语言
   */
  languages: {
    en: 'English',
    zh: '中文',
    ja: '日本語',
  },

  /**
   * 是否显示语言切换器
   */
  showLanguageSwitcher: true,

  // ============================================
  // 角色信息配置
  // ============================================

  character: {
    /**
     * 角色基本信息
     */
    name: 'Astricia',
    birthday: '12月8日', // 中文显示
    birthdayEn: 'December 8', // 英文显示
    personality: '活泼、开朗、乐于助人。',

    /**
     * 角色特征列表
     */
    traits: {
      beastEars: {
        zh: '兽耳',
        en: 'Beast Ears',
        ja: '獣耳',
      },
      staff: {
        zh: '法杖',
        en: 'Staff',
        ja: '杖',
      },
      heterochromia: {
        zh: '异瞳',
        en: 'Heterochromia',
        ja: 'オッドアイ',
      },
      starMagic: {
        zh: '星辰魔法',
        en: 'Star Magic',
        ja: '星の魔法',
      },
    },

    /**
     * 角色喜好列表
     */
    likes: {
      ancientStories: {
        zh: '收集古老故事',
        en: 'Collecting ancient stories',
        ja: '古い物語を集めること',
      },
      iceFruitPudding: {
        zh: '冰果布丁',
        en: 'Ice fruit pudding',
        ja: 'アイスフルーツプリン',
      },
      hotSprings: {
        zh: '温泉',
        en: 'Hot springs',
        ja: '温泉',
      },
      fluffyThings: {
        zh: '毛茸茸的东西',
        en: 'Fluffy things',
        ja: 'ふわふわしたもの',
      },
    },

    /**
     * 立绘图片配置
     * 说明：支持本地图片路径或远程URL
     */
    images: {
      /**
       * 常服 - 无披风
       */
      casualWithoutCloak: 'https://cdn.sa.net/2025/05/18/EGu6CRHASBrwoLl.png',

      /**
       * 常服 - 有披风
       */
      casualWithCloak: 'https://cdn.sa.net/2025/05/18/y4EfhVPa6sqxtm9.png',

      /**
       * 冬装
       */
      winter: 'https://cdn.sa.net/2026/01/03/bvU4FnoOJCfPieZ.png',
    },

    /**
     * 签名图片
     */
    signatureImage: 'https://github.com/YiniRuohong/astricia/raw/main/source/签名.png',
  },

  // ============================================
  // 作者信息配置
  // ============================================

  authorInfo: {
    /**
     * 显示名称
     */
    displayName: {
      zh: '创作者',
      en: 'Creator',
      ja: 'クリエイター',
    },

    /**
     * 头像图片
     */
    avatar: 'https://cdn.sa.net/2024/10/24/Knmr5dXCQFycqDp.jpg',

    /**
     * 描述信息
     */
    description: {
      zh: '角色设计师 & 插画师',
      en: 'Character designer & illustrator',
      ja: 'キャラクターデザイナー＆イラストレーター',
    },

    /**
     * 社交链接
     */
    socialLinks: {
      /**
       * 个人博客
       */
      blog: {
        url: 'https://blog.atago.moe',
        label: {
          zh: '个人博客',
          en: 'Personal Blog',
          ja: '個人ブログ',
        },
      },

      /**
       * Twitter/X
       */
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
    /**
     * 地图图片
     * 说明：支持本地路径（public/map.png）或远程URL
     */
    image: 'map.png', // 相对于 public 目录

    /**
     * 地图配置
     */
    config: {
      /**
       * 最小缩放比例
       */
      minScale: 0.5,

      /**
       * 最大缩放比例
       */
      maxScale: 3,

      /**
       * 默认缩放比例
       */
      defaultScale: 1,
    },

    /**
     * 地图页面文本
     */
    text: {
      title: {
        zh: 'World Map',
        en: 'World Map',
        ja: 'ワールドマップ',
      },
      subtitle: {
        zh: '拖动探索 · 滚轮缩放',
        en: 'Drag to explore · Scroll to zoom',
        ja: 'ドラッグして探索 · スクロールでズーム',
      },
      enterButton: {
        zh: '进入地图页面',
        en: 'Enter Map',
        ja: '地図を開く',
      },
      backButton: {
        zh: '返回首页',
        en: 'Back to Home',
        ja: 'ホームへ戻る',
      },
      fullscreen: {
        zh: '全屏',
        en: 'Fullscreen',
        ja: '全画面',
      },
      exitFullscreen: {
        zh: '退出全屏',
        en: 'Exit Fullscreen',
        ja: '全画面終了',
      },
    },
  },

  // ============================================
  // 图片画廊配置
  // ============================================

  gallery: {
    /**
     * 画廊标题
     */
    title: {
      zh: '相册展示',
      en: 'Photo Gallery',
      ja: 'フォトギャラリー',
    },

    /**
     * 图片列表
     * 说明：可以在此添加或删除图片
     */
    images: [
      {
        src: 'https://cdn.sa.net/2024/10/24/Djz3NSiOVaWq97X.jpg',
        alt: 'Astricia illustration 1',
      },
      {
        src: 'https://cdn.sa.net/2024/10/24/ENyHIVXKmPBQrnh.jpg',
        alt: 'Astricia illustration 2',
      },
      {
        src: 'https://cdn.sa.net/2024/10/24/TVI5XFuBNC8Hrxe.jpg',
        alt: 'Astricia illustration 3',
      },
      {
        src: 'https://cdn.sa.net/2024/10/24/MU2s7gtuCa4GnSe.png',
        alt: 'Astricia illustration 4',
      },
      {
        src: 'https://cdn.sa.net/2024/10/24/c6r8SNRA3EYuawI.jpg',
        alt: 'Astricia illustration 5',
      },
      {
        src: 'https://cdn.sa.net/2024/10/24/4pnfDHlMk6NQL9K.jpg',
        alt: 'Astricia illustration 6',
      },
      {
        src: 'https://cdn.sa.net/2024/10/24/YaIPQCt4dhDeoqM.jpg',
        alt: 'Astricia illustration 7',
      },
      {
        src: 'https://cdn.sa.net/2024/10/24/AxfbFXwgsEnOZoN.png',
        alt: 'Astricia illustration 8',
      },
      {
        src: 'https://cdn.sa.net/2024/10/24/j4aMiVwvH8m6b1x.jpg',
        alt: 'Astricia illustration 9',
      },
      {
        src: 'https://cdn.sa.net/2024/10/24/x3zuStBk4Zp2NOQ.jpg',
        alt: 'Astricia illustration 10',
      },
      {
        src: 'https://cdn.sa.net/2024/10/24/149ieR5tIKOs3aq.png',
        alt: 'Astricia illustration 11',
      },
      {
        src: 'https://cdn.sa.net/2024/10/24/6aMVyjUSJOKeYFL.jpg',
        alt: 'Astricia illustration 12',
      },
      {
        src: 'https://cdn.sa.net/2024/10/24/lzdbu6XBDgWJ2rL.png',
        alt: 'Astricia illustration 13',
      },
      {
        src: 'https://cdn.sa.net/2024/10/24/3j2JzcgslGtfkYb.png',
        alt: 'Astricia illustration 14',
      },
      {
        src: 'https://cdn.sa.net/2024/10/24/bm4axGBrVNk1KfA.webp',
        alt: 'Astricia illustration 15',
      },
      {
        src: 'https://cdn.sa.net/2025/05/03/2d8bocaODNrZ1IL.webp',
        alt: 'Astricia illustration 16',
      },
      {
        src: 'https://cdn.sa.net/2025/05/03/9bGmznyst24JBNE.webp',
        alt: 'Astricia illustration 17',
      },
      {
        src: 'https://cdn.sa.net/2025/05/03/V1rT8X7F5qhftSg.webp',
        alt: 'Astricia illustration 18',
      },
      {
        src: 'https://cdn.sa.net/2025/05/03/lNKTHeUwXr5gyBu.jpg',
        alt: 'Astricia illustration 19',
      },
      {
        src: 'https://cdn.sa.net/2025/11/28/eJagyotKmruUX8n.png',
        alt: 'Astricia illustration 20',
      },
    ],
  },

  // ============================================
  // UI 配置
  // ============================================

  ui: {
    /**
     * 导航栏配置
     */
    navbar: {
      /**
       * 固定在顶部
       */
      fixed: true,

      /**
       * 导航栏内边距（移动端）
       * 格式：'{top/bottom} {left/right}'
       */
      paddingMobile: { top: 3, bottom: 3, left: 4, right: 4 },

      /**
       * 导航栏内边距（桌面端）
       */
      paddingDesktop: { top: 6, bottom: 6, left: 8, right: 8 },

      /**
       * 按钮之间的间距
       */
      gap: {
        mobile: 4,   // 移动端间距
        desktop: 6,  // 桌面端间距
      },
    },

    /**
     * 内容区域配置
     */
    content: {
      /**
       * 最大容器宽度
       */
      maxWidth: '1280', // Tailwind max-w-7xl

      /**
       * 内容区域内边距
       */
      padding: {
        mobile: { top: 12, bottom: 12, left: 4, right: 4 },  // pt-12 pb-12 px-4
        desktop: { top: 16, bottom: 16, left: 8, right: 8 },  // md:pt-16 md:pb-16 md:px-8
      },
    },

    /**
     * 角色立绘容器配置
     */
    characterImage: {
      /**
       * 最大宽度
       */
      maxWidth: {
        mobile: 400,   // 移动端 400px
        desktop: 500,  // 桌面端 500px
      },

      /**
       * 宽高比
       * 说明：5:7 表示宽度5，高度7
       */
      aspectRatio: '5/7',
    },
  },

  // ============================================
  // 性能配置
  // ============================================

  performance: {
    /**
     * 图片优化
     */
    imageOptimization: {
      /**
       * 是否启用图片优化
       * 关闭后使用原始图片，可能影响性能
       */
      enabled: true,

      /**
       * 图片加载优先级
       * 说明：'priority' = 立即加载, 'auto' = 懒加载
       */
      priority: 'auto',
    },

    /**
     * 代码分割配置
     */
    codeSplitting: {
      /**
       * 延迟加载的组件
       * 说明：这些组件会按需加载，减少初始包大小
       */
      lazyComponents: [
        'PhotoGallery',
        'DynamicBackground',
        'BackToTopButton',
      ],
    },
  },

  // ============================================
  // SEO 配置
  // ============================================

  seo: {
    /**
     * 是否启用 Open Graph 协议
     * 说明：用于社交媒体分享时的卡片展示
     */
    enableOpenGraph: true,

    /**
     * OG 图片（社交媒体分享时显示的图片）
     */
    ogImage: '/og-image.png', // 相对于 public 目录

    /**
     * Twitter 卡片类型
     * 可选值：'summary' | 'summary_large_image'
     */
    twitterCard: 'summary_large_image',
  },

  // ============================================
  // 构建配置
  // ============================================

  build: {
    /**
     * 是否生成源地图
     * 说明：开发时启用，生产环境建议关闭
     */
    generateSourceMaps: false,

    /**
     * 是否启用 TypeScript 类型检查
     * 说明：构建时检查类型错误
     */
    typecheck: false,
  },

  // ============================================
  // 开发配置
  // ============================================

  development: {
    /**
     * 是否启用热重载
     */
    hotReload: true,

    /**
     * 开发服务器端口
     */
    port: 3000,
  },
}

/**
 * 类型定义
 */
export type SiteConfig = typeof siteConfig

/**
 * 导出配置类型供其他文件使用
 */
export type Config = SiteConfig
