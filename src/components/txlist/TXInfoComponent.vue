<template>
  <v-container class="text-left">
    <v-list>
      <v-list-item two-line>
        <v-list-item-icon>
          <v-icon v-if="tx.type == 'send'" color="red">mdi-arrow-bottom-right</v-icon>
          <v-icon v-if="tx.type == 'receive'" color="success">mdi-arrow-top-right</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{tx.type | typeFormat}}</v-list-item-title>
          <v-list-item-subtitle>{{tx.amount}} {{asset.name}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="getContactName(tx.address) != null" three-line class="blue-grey lighten-4">
        <v-list-item-content>
          <v-list-item-title>{{tx.type | typeFormat2}}</v-list-item-title>
          <v-list-item-subtitle>{{getContactName(tx.address)}}</v-list-item-subtitle>
          <v-list-item-subtitle>{{tx.address}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-else two-line class="blue-grey lighten-4">
        <v-list-item-content>
          <v-list-item-title>{{tx.type | typeFormat2}}</v-list-item-title>
          <v-list-item-subtitle>{{tx.address}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Дата</v-list-item-title>
          <v-list-item-subtitle>{{tx.dt}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Статус</v-list-item-title>
          <v-list-item-subtitle :class="statusClass">{{tx.status | statusFormat}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "TXInfoComponent",
  props: {
    tx: Object,
  },
  computed: {
    statusClass() {
      if (this.tx.status == "success") {
        return { "success--text": true };
      } else if (this.tx.status == "process") {
        return { "warning--text": true };
      } else if (this.tx.status == "error") {
        return { "error--text": true };
      } else {
        return { "error--text": true };
      }
    },
    ...mapState(["asset", "contacts"]),
    ...mapGetters(["contactName"]),
  },
  methods: {
    getContactName(value) {
      return this.contactName(value);
    },
  },
  filters: {
    typeFormat(value) {
      if (value == "send") {
        return "Отправлено";
      } else if (value == "receive") {
        return "Получено";
      }
      return "Неизвестно";
    },
    typeFormat2(value) {
      if (value == "send") {
        return "Отправлено";
      } else if (value == "receive") {
        return "Получено от";
      }
      return "Неизвестно";
    },
    statusFormat(value) {
      if (value == "success") {
        return "Выполнено";
      } else if (value == "process") {
        return "В процессе";
      } else if (value == "error") {
        return "Ошибка";
      } else {
        return "Не известно";
      }
    }
  },
};
</script>