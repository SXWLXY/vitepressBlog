import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "网站标题",
  description: "网站描述",

  // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
  lastUpdated: true, // string | boolean

  themeConfig: {
    // 导航上的logo ,logo应该直接放在 public 中，并定义为绝对路径。
    logo: "/earth.png",

    lastUpdatedText: "最后更新", // string
    // 搜索
    algolia: {
      appId: "your_appId",
      apiKey: "your_api_key",
      indexName: "index_name",
    },

    //顶部导航栏配置
    nav: [
      {
        text: "前端网聚",
        items: [
          { text: "前端综合", link: "/site/page" },
          { text: "HTML/CSS", link: "/site/html-css" },
          { text: "框架组件", link: "/site/framework" },
        ],
      },
      {
        text: "技术笔记",
        items: [
          { text: "VitePress", link: "/note/vitePress" },
          { text: "Vue", link: "/note/vue" },
          { text: "react", link: "/note/react" },
        ],
      },
      {
        text: "关于我们",
        link: "/about/page",
      },
      { text: "更新日志", link: "" },
    ],
    // 左侧导航栏配置
    sidebar: [
      {
        text: "从零开始用VitePress搭建个人博客的笔记",
        items: [
          {
            text: "1.VitePress的安装和首页配置",
            link: "/note/page1",
          },
          {
            text: "2.VitePress默认主题修改和配置",
            link: "/note/page2",
          },
          {
            text: "3.如何自定义布局和主题样式修改?",
            link: "/note/page3",
          },
          {
            text: "4.如何自定义布局页面模板？",
            link: "/note/page4",
          },
          {
            text: "5.第三方组件库的使用-组件库文档",
            link: "/note/page5",
          },
        ],
      },
    ],

    //顶部导航最右边社交链接配置
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://gitee.com/csdn-mzh/mzh-vitepress' },
      { icon: 'discord', link: 'https://gitee.com/csdn-mzh/mzh-vitepress' },
      { icon: 'facebook', link: 'https://gitee.com/csdn-mzh/mzh-vitepress' },
      { icon: 'instagram', link: 'https://gitee.com/csdn-mzh/mzh-vitepress' },
      // | 'discord'
      // | 'facebook'
      // | 'github'
      // | 'instagram'
      // | 'linkedin'
      // | 'slack'
      // | 'twitter'
      // | 'youtube'
      // | { svg: string }
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
      //   },
      //   link: 'https://gitee.com/csdn-mzh'
      // }
    ],


    //自定义文章内容编辑链接
    //目前只是一个样式，想要真正实现对接 https://vitepress.dev/zh/reference/default-theme-edit-link#site-level-config
    editLink: {
      pattern: "https://gitee.com/csdn-mzh/mzh-vitepress", // 自己项目仓库地址
      text: "在 gitee 上编辑此页",
    },
    // 站点页脚配置
    footer: {
      message: "Released under the MIT License",
      copyright: "Copyright © 2024-mzh",
    },
  }
})
