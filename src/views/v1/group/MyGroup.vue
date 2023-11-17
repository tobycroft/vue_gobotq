<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <tr>
          <td>{{ props.item.self_id }}</td>
          <td>{{ props.item.user_id }}</td>
          <td>{{ props.item.nickname }}</td>
          <td>{{ props.item.card }}</td>
          <td>{{ props.item.role }}</td>
          <td>{{ formatTimestamp(props.item.join_time) }}</td>
          <td>{{ formatTimestamp(props.item.last_sent_time) }}</td>
          <td>{{ props.item.level }}</td>
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.group_id }}</td>
          <td>{{ props.item.title }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {text: 'self_id', value: 'self_id'},
        {text: 'user_id', value: 'user_id'},
        {text: 'nickname', value: 'nickname'},
        {text: 'card', value: 'card'},
        {text: 'role', value: 'role'},
        {text: 'join_time', value: 'join_time'},
        {text: 'last_sent_time', value: 'last_sent_time'},
        {text: 'level', value: 'level'},
        {text: 'id', value: 'id'},
        {text: 'group_id', value: 'group_id'},
        {text: 'title', value: 'title'},
      ],
      items: [
        {
          "self_id": 1206420783,
          "user_id": 710209520,
          "nickname": "╰⋛⋋ 火线兔 ⋌⋚╯",
          "card": "福州-元PlusDmi 510-1658-绿 兔兔",
          "role": "admin",
          "join_time": "1659356918",
          "last_sent_time": "1698031577",
          "level": 301,
          "id": 26194,
          "group_id": 155497937,
          "title": null
        },
        // ... (其他数据项)
      ]
    };
  },
  methods: {
    formatTimestamp(timestamp) {
      // 将时间戳格式化为可读的日期时间字符串
      const date = new Date(timestamp * 1000);
      return date.toLocaleString();
    }
  }
};
</script>
