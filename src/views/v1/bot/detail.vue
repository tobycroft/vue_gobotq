<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="24" md="6">
          <v-img :src="details.img" alt="Image"></v-img>
        </v-col>
        <v-col cols="24" md="6">
          <v-card>
            <v-card-title>{{ details.cname }}</v-card-title>
            <v-card-subtitle>机器人类型: {{ details.type }}</v-card-subtitle>
            <v-card-subtitle>所有者: {{ details.owner }}</v-card-subtitle>
            <v-card-subtitle>过期日期: {{ details.end_date }}</v-card-subtitle>
            <v-card-subtitle>启用状态: {{ details.active ? "是" : "否" }}</v-card-subtitle>
            <v-card-subtitle>添加日期: {{ details.date }}</v-card-subtitle>
            <v-card-subtitle>机器人QQ: {{ details.self_id }}</v-card-subtitle>
            <!-- 其他字段根据需要添加 -->
          </v-card>
          <v-btn @click="goBack" color="primary" block class="mt-4">返回</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      details: JSON.parse(this.$route.query.data || '{}'),
    };
  },
  methods: {
    goBack() {
      // 返回上一页的逻辑
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.v-card-title {
  font-size: 3rem;
  line-height: unset;
}

.v-card-subtitle {
  font-size: 1.5rem; /* 设置特定组件的字体大小 */
  line-height: unset;
}
</style>
