<template>
  <v-app>
    <!-- 顶部导航栏 -->
    <Topheader></Topheader>
    <v-tabs v-model="tab" @click="changetab"
            fixed-tabs
            bg-color="indigo-darken-2"
    >

      <v-tab>我管理的群</v-tab>
      <v-tab>我加入的群</v-tab>

      <v-tab>机器人加入的群</v-tab>
      <v-tab>机器人管理的群</v-tab>

    </v-tabs>
    <!-- 主页面内容区域 -->
    <v-slide-x-transition>
      <MyGroup v-if="tab===0"></MyGroup>
    </v-slide-x-transition>
  </v-app>

</template>


<script>

import {defineComponent} from "vue";
import Topheader from "@/components/center/header/topheader.vue";
import MyGroup from "@/views/v1/group/MyGroup.vue";

export default defineComponent({
  components: {MyGroup, Private, Topheader},
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

<style scoped>

</style>
