<template>
  <v-app>
    <Topheader></Topheader>
    <v-container class="mt-16">
      <v-data-table
        :headers="headers"
        :items="dataList"
        :items-per-page="5"
        class="elevation-1"
      >

        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>数据列表</v-toolbar-title>
          </v-toolbar>
        </template>
        <template v-slot:item.action="{ item }">
          <v-btn @click="unbind(item)" icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn @click="viewDetails(item)" icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn @click="online(item)" icon>
            <v-icon>mdi-arrow-up-bold</v-icon>
          </v-btn>
          <v-btn @click="offline(item)" icon>
            <v-icon>mdi-arrow-down-bold</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script>
import Topheader from "@/components/center/header/topheader.vue";

export default {
  components: {Topheader},
  data() {
    return {
      headers: [
        {text: '昵称', value: 'cname'},
        {text: '图片', value: 'img'},
        {text: '类型', value: 'type'},
        {text: '所有者', value: 'owner'},
        {text: '结束时间', value: 'end_time'},
        {text: '激活状态', value: 'active'},
        {text: '操作', value: 'action', sortable: false},
      ],
      dataList: [
        {
          "date": "2020-12-31T17:06:47+08:00",
          "self_id": 1206420783,
          "cname": "AcFur二次元的皮",
          "img": "http://qlogo4.store.qq.com/qzone/1206420783/1206420783/100?1538293698",
          "type": "private",
          "owner": 710209520,
          "end_time": 4074257149,
          "active": 1
        },
        {
          "cname": "acfur二号姬",
          "img": "http://qlogo4.store.qq.com/qzone/1206420783/1206420783/100?1538293698",
          "type": "private",
          "owner": 710209520,
          "end_time": 4074257149,
          "active": 1,
          "date": "2021-02-09T18:43:56+08:00",
          "self_id": 409528661
        }
      ],
    };
  },
  methods: {
    unbind(item) {
      // 实现解绑逻辑
      console.log("解绑", item);
    },
    viewDetails(item) {
      // 实现查看详情逻辑
      console.log("查看详情", item);
    },
    online(item) {
      // 实现上线逻辑
      console.log("上线", item);
    },
    offline(item) {
      // 实现下线逻辑
      console.log("下线", item);
    },
  },
}
</script>

<style>
.elevation-1 {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
</style>
