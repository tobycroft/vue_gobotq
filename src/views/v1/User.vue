<template>
  <Topheader></Topheader>
  <!-- 显示 QQ 号码 -->
  <v-row justify="center">
    <v-col cols="12">
      <v-card>
        <v-card-title>个人信息</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="QQ号码"
                v-model="qqNumber"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <!-- 退出按钮 -->
          <v-btn @click="logout" color="primary">退出</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Topheader from "@/components/center/header/topheader.vue";

export default {
  components: {Topheader},
  data() {
    return {
      qqNumber: 'YourQQNumber', // 替换为实际的 QQ 号码
    };
  },
  methods: {
    // 退出按钮点击事件
    logout() {
      // 处理退出逻辑，可以调用接口等操作
      // 例如：this.$router.push('/login') 跳转到登录页
    },
  },
};
</script>
