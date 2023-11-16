<script>

import {defineComponent} from "vue";
import Topheader from "@/components/center/header/topheader.vue";

export default defineComponent({
  components: {Topheader}
})
</script>

<template>
  <v-app>
    <!-- 顶部导航栏 -->
    <Topheader></Topheader>

    <!-- 主页面内容区域 -->
    <v-main>
      <!-- 根据路由显示不同的页面 -->
      <router-view>
      </router-view>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
