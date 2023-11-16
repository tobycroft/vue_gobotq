<template>
  <v-dialog width="500" v-model="dialogVisible">
    <template v-if="dialogVisible">
      <v-card title="信息">
        <v-card-text>
          {{ message }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close Dialog"
            @click="close"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
  <router-view/>
</template>

<script>
import Alert from "@/plugins/Alert";

export default {
  data: () => ({
    dialogVisible: false,
    message: '',
  }),
  created() {
    setInterval(this.readalert, 1000)
  },
  destroyed() {
  },
  methods: {
    readalert() {
      const alert = Alert.GetAlert()
      if (alert != null) {
        this.handleCustomEvent(alert)
      }
    },
    close() {
      this.dialogVisible = false;
    },
    handleCustomEvent(message) {
      this.message = message;
      this.dialogVisible = true;
      console.log("channelmsg", message);
    },
  },
};
</script>
