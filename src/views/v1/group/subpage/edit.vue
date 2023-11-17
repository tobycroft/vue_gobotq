<template>
  <v-container>
    <v-form v-model="valid" ref="form" @submit.prevent="submitForm">
      <v-row>
        <v-col v-for="field in fields" :key="field.key" cols="12" md="6">

          <v-textarea
            hide-details="false"
            v-if="field.type === 'string'"
            :label="field.label"
            v-model="formData[field.key]"
            :rules="field.rules"
          ></v-textarea>


          <v-switch inset
                    v-if="field.type === 'bool'"
                    :label="field.label"
                    v-model="formData[field.key]"
          ></v-switch>

          <!-- Other types of form fields can be added as needed -->

        </v-col>
      </v-row>

      <v-btn type="submit" :disabled="!valid" block color="primary" class="mt-4">提交</v-btn>
      <v-btn block color="grey" class="mt-4" @click="back">返回</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import Net from "@/plugins/Net";
import Alert from "@/plugins/Alert";

export default {
  data() {
    return {
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
      fields: [],
      field: {},
    };
  },
  methods: {
    updateFormData(key, value) {
    },
    async submitForm() {
      // This is where you call your own submission method and pass this.formData to it
      var ret = await new Net("/v1/bot/info/edit").PostFormData(this.formData)
      if (ret.isSuccess) {
        Alert.SetAlert(ret.echo)
        this.$router.go(-1)
      } else {
        Alert.SetAlert(ret.echo)
      }
    },
    back() {
      this.$router.go(-1)
    },
    async getDetail() {
      var ret = await new Net("/v1/group/function/detail").Get()
      if (ret.isSuccess) {
        const list = ret.data
        for (const i in list) {
          const data = list[i]
          this.fields.push({key: data["key"], label: data["name"], type: data["type"], rules: []})
          this.field[data["key"]] = data["type"]
        }
        this.fillForm()
      } else {
        Alert.SetAlert(ret.echo)
      }
    },
    async fillForm() {
      // Fill the form directly with the provided JSON data
      var ret = await new Net("/v1/group/function/get").PostFormData({
        self_id: this.$route.query.self_id,
        group_id: this.$route.query.group_id,
      })
      if (ret.isSuccess) {
        let list = ret.data
        for (const listKey in list) {
          console.log(listKey)
          console.log(this.field[listKey])
          switch (this.field[listKey]) {
            case "string":
              break

            case "bool":
              list[listKey] = Boolean(list[listKey])
              console.log(listKey)
              break

            case "int":
              break
          }
        }
        this.formData = list
      } else {
        Alert.SetAlert(ret.echo)
      }
    },
  },
  created() {
    // Call fillForm method to perform data filling when the component is mounted
    this.getDetail();
  },
};
</script>
