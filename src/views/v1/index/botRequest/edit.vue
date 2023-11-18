<template>
  <Topheader></Topheader>
  <v-form v-model="valid" ref="form" @submit.prevent="submitForm" class="mt-6">
    <v-row>
      <v-col v-for="field in fields" :key="field.key" cols="12" md="6">
        <v-text-field
          hide-details="false"
          v-if="field.type === 'text' || field.type === 'ip'"
          :label="field.label"
          :type="field.type"
          v-model="formData[field.key]"
          :rules="field.rules"
        ></v-text-field>
        <v-text-field
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          hide-details="false"
          v-if="field.type === 'password'"
          :label="field.label"
          :type="show1 ? 'text' : 'password'"
          v-model="formData[field.key]"
          :rules="field.rules"
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-select
          v-else-if="field.type === 'select'"
          :label="field.label"
          :items="field.items"
          v-model="formData[field.key]"
        ></v-select>
        <v-switch
          inset
          v-else-if="field.type === 'switch'"
          :label="field.label"
          v-model="formData[field.key]"
        ></v-switch>
        <!-- 其他类型的表单字段可以根据需要添加 -->
      </v-col>
    </v-row>
    <v-btn type="submit" :disabled="!valid" block color="primary" class="mt-4">提交</v-btn>
    <v-btn block color="grey" class="mt-4" @click="back">返回</v-btn>
  </v-form>
</template>

<script>
import Topheader from "@/components/center/header/topheader.vue";

export default {
  components: {Topheader},
  data() {
    return {
      valid: true,
      show1: false,
      formData: {
        secret: '',
        end_date: '',
        date: '',
        status: 0,
        id: null,
        uid: null,
        bot: null,
        password: '',
        owner: null
      },
      fields: [
        { key: 'secret', label: 'Secret', type: 'password', rules: [] },
        { key: 'end_date', label: 'End Date', type: 'text', rules: [] },
        { key: 'date', label: 'Date', type: 'text', rules: [] },
        { key: 'status', label: 'Status', type: 'select', items: [0, 1], rules: [] },
        { key: 'id', label: 'ID', type: 'text', rules: [] },
        { key: 'uid', label: 'UID', type: 'text', rules: [] },
        { key: 'bot', label: 'Bot', type: 'text', rules: [] },
        { key: 'password', label: 'Password', type: 'password', rules: [] },
        { key: 'owner', label: 'Owner', type: 'text', rules: [] }
      ]
    };
  },
  methods: {
    updateFormData(key, value) {},
    async submitForm() {
      // 这里调用你自己的提交方法，并将 this.formData 传递给它
      console.log('提交表单', this.formData);
      // 示例：在这里可以调用接口提交数据
    },
    back() {
      this.$router.go(-1);
    },
    async fillForm() {
      // 直接将提供的 JSON 数据回填到表单中
      this.formData = {
        secret: '123456123',
        end_date: '2023-11-18T22:37:11+08:00',
        date: '2023-11-18T22:37:11+08:00',
        status: 0,
        id: 1,
        uid: 710209520,
        bot: 123123,
        password: '123123',
        owner: 123123
      };
    }
  },
  mounted() {
    // 在组件挂载时调用 fillForm 方法进行回填
    this.fillForm();
  }
};
</script>

<style>
/* 可以根据需要添加样式 */
</style>
