---
layout: home

hero:
  name: "文档标题"
  text: "文档副标题"
  tagline: "文档标语"
  image:
    src: "/image/logo.png"
    alt: "网页的logo图标"

  actions:
    - theme: brand
      text: "示例"
      link: /markdown-examples
    - theme: brand
      text: "开始使用"
      link: /markdown-examples
    - theme: alt
      text: "在 gitee 上查看"
      link: "https://gitee.com/csdn-mzh/mzh-vitepress"

features:
  - icon: 🛠️
    title: 模块1
    details: 模块1细节描述
    link: /guide/start
    linkText: 了解更多
  - icon: ⚡️
    title: 模块2
    details: 模块2细节描述
  - icon: 🌞
    title: 模块3
    details: 模块3细节描述
  - title: Vue3
    details: 渐进式JavaScript框架.
    link: https://cn.vuejs.org/
    linkText: 了解更多
  - title: vitePress
    details: Vite & Vue Powered Static Site Generator.
    link: https://vitepress.dev/
  - title: Pinia
    details: 符合直觉的Vue.js 状态管理库.
    link: https://pinia.vuejs.org/zh/
  - title: Vuex
    details: 是一个专为 Vue.js 应用程序开发的状态管理模式.
    link: https://vuex.vuejs.org/zh/
  - title: Vue Router
    details: Vue.js 的官方路由,为 Vue.js 提供富有表现力、可配置的、方便的路由.
    link: https://router.vuejs.org/zh/
---

<script setup lang="ts">
import { onMounted } from 'vue'
import { fetchVersion } from './.vitepress/utils/fetchVersion'

onMounted(() => {
  fetchVersion()
})
</script>
