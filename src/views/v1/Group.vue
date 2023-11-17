<script>

import {defineComponent} from "vue";
import Topheader from "@/components/center/header/topheader.vue";

export default defineComponent({
  components: {Topheader},
  computed: {},
  mounted() {
  },
  data: () => ({
    tab: '',
  }),
  methods: {
    changetab() {
      // console.log(this.tab)
    },
  },
})

</script>

<template>
  <v-app>
    <!-- 顶部导航栏 -->
    <Topheader></Topheader>
    <v-tabs v-model="tab" @click="changetab"
            fixed-tabs
            bg-color="indigo-darken-2"
    >
      <v-tab>机器人管理的群</v-tab>
      <v-tab>机器人加入的群</v-tab>
    </v-tabs>
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
