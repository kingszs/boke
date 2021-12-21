module.exports = {
  title: "派大星",
  description: "一个来自海底深处的博客专栏",
  dest: "public",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "首页", link: "/", icon: "reco-home" },
      { text: "时间轴", link: "/timeline/", icon: "reco-date" },
      {
        text: "文章",
        icon: "reco-message",
        items: [{ text: "杂谈", link: "/docs/other/" }],
      },
      {
        text: "联系",
        icon: "reco-message",
        items: [
          // 联系我的相关配置
          {
            text: "GitHub",
            link: "https://github.com/kingszs",
            icon: "reco-github",
          },
          {
            text: "Gitee",
            link: "https://gitee.com/paidaxing258",
            icon: "reco-mayun",
          },
        ],
      },
    ],
    // themeConfig: {
    //   subSidebar: "auto", //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    // },
    // sidebar: {
    //   "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    // },
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag", // 默认 “标签”
      },
    },
    friendLink: [
      //
      {
        title: "派大星",
        desc: "少年易学老难成，一寸光阴不可轻。",
        email: "576560107@qq.com",
        // link: "https://www.recoluan.com",
      },
      {
        title: "快去催更新",
        desc: "他已经好久没有更新了",
        email: "576560107@qq.com",
        // link: "https://www.recoluan.com",
      },
    ],
    logo: "/logo.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: "auto",
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 作者
    author: "派大星",
    // 作者头像
    authorAvatar: "/avatar.png",
    // 备案号
    record: "2020-13-14",
    // 项目开始时间
    startYear: "2021",
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true,
  },
}
