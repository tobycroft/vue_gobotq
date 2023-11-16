<template>
  <v-app>
    <Topheader></Topheader>
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
      <template v-slot:header="{ props }">
        <thead>
        <tr>
          <th v-for="header in props.headers" :key="header.title" :class="{ 'text-left': header.value !== 'action' }">
            {{ header.title }}
          </th>
          <th class="text-right">操作</th>
        </tr>
        </thead>
      </template>
      <template v-slot:item.img="{ item }">
        <v-img :src="item.img" alt="Image" width="50" height="50"></v-img>
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
  </v-app>


</template>


<script>
import Topheader from "@/components/center/header/topheader.vue";
import Net from "@/plugins/Net";

export default {
  mounted() {
  },
  components: {Topheader},
  data() {
    return {
      headers: [
        {title: '昵称', value: 'cname'},
        {title: '图片', value: 'img'},
        {title: '类型', value: 'type'},
        {title: '所有者', value: 'owner'},
        {title: '结束时间', value: 'end_date'},
        {title: '激活状态', value: 'active'},
        {title: '操作', value: 'action', sortable: false},
      ],
      dataList: [],
    };
  },
  methods: {
    async getdata(){
      var ret=await new Net("/v1/bot/list/owned").PostFormData()
    },
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
