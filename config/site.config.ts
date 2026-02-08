/**
 * 站点统一配置文件
 * 修改此文件后需要重新构建项目才能生效。
 */

export const siteConfig = {
  // 站点名称（用于浏览器标题）
  siteName: 'Astricia',
  // 站点描述（用于 SEO 和分享摘要）
  siteDescription: 'Astricia 的个人角色展示页面',
  // 站点关键词（逗号分隔）
  siteKeywords: 'Astricia, 角色, OC, 原创角色, 插画',
  // 作者元信息（用于 metadata）
  author: {
    // 作者名称
    name: 'YiniRuohong',
    // 作者主页
    url: 'https://blog.atago.moe',
  },

  // 功能开关（关闭可提升低端设备性能）
  features: {
    // 是否显示动态背景
    dynamicBackground: true,
    // 是否启用打字机标题效果
    typewriterEffect: true,
    // 是否显示返回顶部按钮
    backToTopButton: true,
    // 是否显示图片画廊
    photoGallery: true,
    // 是否启用地图页面与入口
    mapPage: true,
    // 是否显示主题切换按钮
    showThemeToggle: true,
    // 是否显示语言切换器
    showLanguageSwitcher: true,
  },

  // 角色信息
  character: {
    // 角色名称（首页标题）
    name: 'Astricia',
    // 生日（中文）
    birthday: '12月8日',
    // 生日（英文）
    birthdayEn: 'December 8',
    // 性格描述
    personality: '活泼、开朗、乐于助人。',
    // 角色特征（多语言，可新增）
    traits: {
      // 兽耳
      beastEars: { zh: '兽耳', en: 'Beast Ears', ja: '獣耳' },
      // 法杖
      staff: { zh: '法杖', en: 'Staff', ja: '杖' },
      // 异瞳
      heterochromia: { zh: '异瞳', en: 'Heterochromia', ja: 'オッドアイ' },
      // 星辰魔法
      starMagic: { zh: '星辰魔法', en: 'Star Magic', ja: '星の魔法' },
    },
    // 角色喜好（多语言，可新增）
    likes: {
      // 收集古老故事
      ancientStories: { zh: '收集古老故事', en: 'Collecting ancient stories', ja: '古い物語を集めること' },
      // 冰果布丁
      iceFruitPudding: { zh: '冰果布丁', en: 'Ice fruit pudding', ja: 'アイスフルーツプリン' },
      // 温泉
      hotSprings: { zh: '温泉', en: 'Hot springs', ja: '温泉' },
      // 毛茸茸的东西
      fluffyThings: { zh: '毛茸茸的东西', en: 'Fluffy things', ja: 'ふわふわしたもの' },
    },
    // 立绘图片（支持远程 URL）
    images: {
      // 常服 - 无披风
      casualWithoutCloak: 'https://cdn.sa.net/2025/05/18/EGu6CRHASBrwoLl.png',
      // 常服 - 有披风
      casualWithCloak: 'https://cdn.sa.net/2025/05/18/y4EfhVPa6sqxtm9.png',
      // 冬装
      winter: 'https://cdn.sa.net/2026/01/03/bvU4FnoOJCfPieZ.png',
    },
    // 签名图片（支持远程 URL）
    signatureImage: 'https://github.com/YiniRuohong/astricia/raw/main/source/签名.png',
  },

  // 作者信息
  authorInfo: {
    // 显示名称（多语言）
    displayName: {
      zh: '创作者',
      en: 'Creator',
      ja: 'クリエイター',
    },
    // 作者头像
    avatar: 'https://cdn.sa.net/2024/10/24/Knmr5dXCQFycqDp.jpg',
    // 作者描述（多语言）
    description: {
      zh: '角色设计师 & 插画师',
      en: 'Character designer & illustrator',
      ja: 'キャラクターデザイナー＆イラストレーター',
    },
    // 社交链接
    socialLinks: {
      // 个人博客
      blog: {
        url: 'https://blog.atago.moe',
        label: { zh: '个人博客', en: 'Personal Blog', ja: '個人ブログ' },
      },
      // Twitter/X
      twitter: {
        url: 'https://x.com/Yini_Ruohong',
        label: 'Twitter',
      },
    },
  },

  // 地图配置
  map: {
    // 地图缩放限制
    config: {
      // 最小缩放比例
      minScale: 0.5,
      // 最大缩放比例
      maxScale: 3,
      // 默认缩放比例
      defaultScale: 1,
    },
    // 地图页面文本（多语言）
    text: {
      // 标题
      title: { zh: 'World Map', en: 'World Map', ja: 'ワールドマップ' },
      // 副标题
      subtitle: { zh: '拖动探索 · 滚轮缩放', en: 'Drag to explore · Scroll to zoom', ja: 'ドラッグして探索 · スクロールでズーム' },
      // 进入地图按钮
      enterButton: { zh: '进入地图页面', en: 'Enter Map', ja: '地図を開く' },
      // 返回首页按钮
      backButton: { zh: '返回首页', en: 'Back to Home', ja: 'ホームへ戻る' },
      // 全屏按钮
      fullscreen: { zh: '全屏', en: 'Fullscreen', ja: '全画面' },
      // 退出全屏按钮
      exitFullscreen: { zh: '退出全屏', en: 'Exit Fullscreen', ja: '全画面終了' },
    },
  },

  // 图片画廊配置
  gallery: {
    // 画廊标题（多语言）
    title: { zh: '相册展示', en: 'Photo Gallery', ja: 'フォトギャラリー' },
    // 图片列表（可增删）
    images: [
      { src: 'https://cdn.sa.net/2024/10/24/Djz3NSiOVaWq97X.jpg', alt: 'Astricia illustration 1' }, // 图片 1
      { src: 'https://cdn.sa.net/2024/10/24/ENyHIVXKmPBQrnh.jpg', alt: 'Astricia illustration 2' }, // 图片 2
      { src: 'https://cdn.sa.net/2024/10/24/TVI5XFuBNC8Hrxe.jpg', alt: 'Astricia illustration 3' }, // 图片 3
      { src: 'https://cdn.sa.net/2024/10/24/MU2s7gtuCa4GnSe.png', alt: 'Astricia illustration 4' }, // 图片 4
      { src: 'https://cdn.sa.net/2024/10/24/c6r8SNRA3EYuawI.jpg', alt: 'Astricia illustration 5' }, // 图片 5
      { src: 'https://cdn.sa.net/2024/10/24/4pnfDHlMk6NQL9K.jpg', alt: 'Astricia illustration 6' }, // 图片 6
      { src: 'https://cdn.sa.net/2024/10/24/YaIPQCt4dhDeoqM.jpg', alt: 'Astricia illustration 7' }, // 图片 7
      { src: 'https://cdn.sa.net/2024/10/24/AxfbFXwgsEnOZoN.png', alt: 'Astricia illustration 8' }, // 图片 8
      { src: 'https://cdn.sa.net/2024/10/24/j4aMiVwvH8m6b1x.jpg', alt: 'Astricia illustration 9' }, // 图片 9
      { src: 'https://cdn.sa.net/2024/10/24/x3zuStBk4Zp2NOQ.jpg', alt: 'Astricia illustration 10' }, // 图片 10
      { src: 'https://cdn.sa.net/2024/10/24/149ieR5tIKOs3aq.png', alt: 'Astricia illustration 11' }, // 图片 11
      { src: 'https://cdn.sa.net/2024/10/24/6aMVyjUSJOKeYFL.jpg', alt: 'Astricia illustration 12' }, // 图片 12
      { src: 'https://cdn.sa.net/2024/10/24/lzdbu6XBDgWJ2rL.png', alt: 'Astricia illustration 13' }, // 图片 13
      { src: 'https://cdn.sa.net/2024/10/24/3j2JzcgslGtfkYb.png', alt: 'Astricia illustration 14' }, // 图片 14
      { src: 'https://cdn.sa.net/2024/10/24/bm4axGBrVNk1KfA.webp', alt: 'Astricia illustration 15' }, // 图片 15
      { src: 'https://cdn.sa.net/2025/05/03/2d8bocaODNrZ1IL.webp', alt: 'Astricia illustration 16' }, // 图片 16
      { src: 'https://cdn.sa.net/2025/05/03/9bGmznyst24JBNE.webp', alt: 'Astricia illustration 17' }, // 图片 17
      { src: 'https://cdn.sa.net/2025/05/03/V1rT8X7F5qhftSg.webp', alt: 'Astricia illustration 18' }, // 图片 18
      { src: 'https://cdn.sa.net/2025/05/03/lNKTHeUwXr5gyBu.jpg', alt: 'Astricia illustration 19' }, // 图片 19
      { src: 'https://cdn.sa.net/2025/11/28/eJagyotKmruUX8n.png', alt: 'Astricia illustration 20' }, // 图片 20
    ],
  },
}

export type SiteConfig = typeof siteConfig
export type Config = SiteConfig
