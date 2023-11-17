<template>
  <v-app>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <!-- Other form fields -->

        <!-- Switch for each setting -->
        <v-row v-for="(value, key) in formData" :key="key">
          <v-col cols="12" md="6" lg="4">
            <v-switch
              v-model="formData[key]"
              :label="key"
              :value="value"
              @change="updateFormData(key)"
            ></v-switch>
          </v-col>
        </v-row>

        <!-- Text fields for specific settings -->
        <v-row>
          <v-col cols="12" md="6" lg="4">
            <v-text-field
              v-if="formData.auto_verify_word !== null"
              v-model="formData.auto_verify_word"
              :label="'自动验证答案'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-text-field
              v-if="formData.welcome_word !== null"
              v-model="formData.welcome_word"
              :label="'欢迎词'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-text-field
              v-if="formData.auto_card_value !== null"
              v-model="formData.auto_card_value"
              :label="'预设群名片'"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- Other form fields -->

        <v-btn @click="submitForm">保存</v-btn>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      formData: {
        ban_repeat: 1,
        auto_card_insert: 0,
        ban_group: 0,
        ban_time: 60,
        ban_share: 0,
        exit_alert: 0,
        id: 14,
        sign_send_private: 0,
        auto_verify: 1,
        auto_kick_out: 1,
        auto_verify_word: "",
        join_alert: 0,
        kick_to_black: 0,
        auto_card: 0,
        group_id: 94537310,
        sign: 1,
        auto_retract: 1,
        welcome_word: "欢迎加入火线兔的宇宙飞船",
        repeat_count: 2,
        auto_card_value: "请修改群名片",
        word_limit: 1000,
        ban_retract: 1,
        auto_welcome: 1,
        sign_send_retract: 1,
        ad_retract: 1,
        exit_to_black: 0,
        auto_hold: 1,
        repeat_time: 10,
        adblock: 1,
        all_send_private: 0,
        welcome_at: 1,
        auto_join: 1,
        ban_wx: 0,
        ban_limit: 3,
        ban_url: 0,
      },
    };
  },
  methods: {
    updateFormData(key) {
      // Handle specific logic if needed
    },
    submitForm() {
      if (this.$refs.form.validate()) {
        // Handle form submission, e.g., send data to the server
        console.log(this.formData);
      }
    },
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
