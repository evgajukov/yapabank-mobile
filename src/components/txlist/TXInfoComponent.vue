<template>
  <v-container class="text-left">
    <v-list>
      <v-list-item two-line>
        <v-list-item-icon>
          <v-icon v-if="tx.type == 4 && tx.sender == wallet.address" color="red">mdi-arrow-bottom-right</v-icon>
          <v-icon v-if="tx.type == 4 && tx.sender != wallet.address" color="success">mdi-arrow-top-right</v-icon>
          <v-icon v-if="tx.type == 3" color="success">mdi-arrow-expand-right</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{tx | typeFormat(wallet)}}</v-list-item-title>
          <v-list-item-subtitle>{{tx | amountFormat(wallet)}} {{asset.name}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="getContactName(tx) != null" three-line class="blue-grey lighten-4">
        <v-list-item-content>
          <v-list-item-title>{{tx | typeFormat2(wallet)}}</v-list-item-title>
          <v-list-item-subtitle>{{getContactName(tx)}}</v-list-item-subtitle>
          <v-list-item-subtitle>{{getAddress(tx)}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-else two-line class="blue-grey lighten-4">
        <v-list-item-content>
          <v-list-item-title>{{tx | typeFormat2(wallet)}}</v-list-item-title>
          <v-list-item-subtitle>{{getAddress(tx)}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Дата</v-list-item-title>
          <v-list-item-subtitle>{{tx.timestamp | dateFormat}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Статус</v-list-item-title>
          <v-list-item-subtitle :class="statusClass">{{tx.applicationStatus | statusFormat}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import moment from "moment";
import { mapState, mapGetters } from "vuex";

export default {
  name: "TXInfoComponent",
  props: {
    tx: Object,
  },
  computed: {
    statusClass() {
      if (this.tx.applicationStatus == "succeeded") {
        return { "success--text": true };
      // TODO: статусы ниже нужно проработать по документации
      } else if (this.tx.status == "process") {
        return { "warning--text": true };
      } else if (this.tx.status == "error") {
        return { "error--text": true };
      } else {
        return { "error--text": true };
      }
    },
    ...mapState(["asset", "contacts", "wallet"]),
    ...mapGetters(["contactName"]),
  },
  methods: {
    getContactName(tx) {
      const value = tx.sender == this.wallet.address ? tx.recipient : tx.sender;
      const name = this.contactName(value);
      return name != null ? name : null;
    },
    getAddress(tx) {
      return tx.sender == this.wallet.address ? tx.recipient : tx.sender;
    },
  },
  filters: {
    typeFormat(tx, wallet) {
      if (tx.sender == wallet.address) {
        return "Отправлено";
      } else {
        return "Получено";
      }
    },
    amountFormat(tx, wallet) {
      if (tx.type == 3) return `+${tx.quantity}`;
      if (tx.type == 4) return tx.sender == wallet.address ? `-${tx.amount}` : `+${tx.amount}`;
      return 0;
    },
    typeFormat2(tx, wallet) {
      if (tx.sender == wallet.address) {
        return "Отправлено";
      } else {
        return "Получено от";
      }
    },
    dateFormat(value) {
      return moment(value).format("DD.MM.YYYY HH:mm:ss");
    },
    statusFormat(value) {
      if (value == "succeeded") {
        return "Выполнено";
      // TODO: статусы ниже нужно проработать по документации
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