<template>
  <v-container class="text-left">
    <v-list>
      <v-list-item two-line>
        <v-list-item-icon>
          <v-icon v-if="tx.type == 4 && tx.sender == wallet.address" color="red"
            >mdi-arrow-bottom-right</v-icon
          >
          <v-icon
            v-if="tx.type == 4 && tx.sender != wallet.address"
            color="success"
            >mdi-arrow-top-right</v-icon
          >
          <v-icon v-if="tx.type == 3" color="success"
            >mdi-arrow-expand-right</v-icon
          >
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ tx | typeFormat(wallet) }}</v-list-item-title>
          <v-list-item-subtitle
            >{{ tx | amountFormat(wallet) }}
            {{ asset.name }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-if="addressName != null"
        three-line
        class="blue-grey lighten-4"
      >
        <v-list-item-content>
          <v-list-item-title>{{ tx | typeFormat2(wallet) }}</v-list-item-title>
          <v-list-item-subtitle>{{ addressName }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ getAddress(tx) }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <Sheet
            :show="sheet.edit"
            @open="sheet.edit = true"
            @close="sheet.edit = false"
            color="grey lighten-1"
            :onlyIcon="true"
            btnIcon="mdi-pencil"
          >
            <ContactEditPage :address="getAddress(tx)" @save="sheet.edit = false" />
          </Sheet>
        </v-list-item-action>
      </v-list-item>
      <v-list-item v-else two-line class="blue-grey lighten-4">
        <v-list-item-content>
          <v-list-item-title>{{ tx | typeFormat2(wallet) }}</v-list-item-title>
          <v-list-item-subtitle>{{ getAddress(tx) }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <Sheet
            :show="sheet.edit"
            @open="sheet.edit = true"
            @close="sheet.edit = false"
            color="grey lighten-1"
            :onlyIcon="true"
            btnIcon="mdi-pencil"
          >
            <ContactEditPage :address="getAddress(tx)" @save="sheet.edit = false" />
          </Sheet>
        </v-list-item-action>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Дата</v-list-item-title>
          <v-list-item-subtitle>{{
            tx.timestamp | dateFormat
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Статус</v-list-item-title>
          <v-list-item-subtitle :class="statusClass">{{
            tx.applicationStatus | statusFormat
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import moment from "moment";
import { mapState, mapGetters } from "vuex";

import Sheet from "@/components/SheetComponent";
import ContactEditPage from "@/pages/ContactEditPage";

export default {
  name: "TXInfoComponent",
  props: {
    tx: Object,
  },
  data() {
    return {
      addressName: null,
      sheet: {
        edit: false,
      },
    };
  },
  computed: {
    statusClass() {
      if (this.tx.applicationStatus == "succeeded") {
        return { "success--text": true };
      } else if (this.tx.applicationStatus == null) {
        return { "warning--text": true };
      } else {
        return { "error--text": true };
      }
    },
    ...mapState(["asset", "contacts", "wallet"]),
    ...mapGetters(["contactName"]),
  },
  created() {
    this.addressName = this.getContactName(this.tx);
  },
  methods: {
    getContactName(tx) {
      const value = this.getAddress(tx);
      const name = this.contactName(value);
      return name != null ? name : null;
    },
    getAddress(tx) {
      if (tx.type == 3) return tx.sender;
      if (tx.type == 4)
        return tx.sender == this.wallet.address ? tx.recipient : tx.sender;
    },
  },
  filters: {
    typeFormat(tx, wallet) {
      if (tx.type == 3) {
        return "Создано";
      } else if (tx.type == 4) {
        if (tx.sender == wallet.address) {
          return "Отправлено";
        } else {
          return "Получено";
        }
      }
    },
    amountFormat(tx, wallet) {
      if (tx.type == 3) return `+${Intl.NumberFormat().format(tx.quantity)}`;
      if (tx.type == 4) {
        const amount = Intl.NumberFormat().format(tx.amount);
        return tx.sender == wallet.address ? `-${amount}` : `+${amount}`;
      }
      return 0;
    },
    typeFormat2(tx, wallet) {
      if (tx.type == 3) {
        return "Создано";
      } else if (tx.type == 4) {
        if (tx.sender == wallet.address) {
          return "Отправлено";
        } else {
          return "Получено от";
        }
      }
    },
    dateFormat(value) {
      return moment(value).format("DD.MM.YYYY HH:mm:ss");
    },
    statusFormat(value) {
      if (value == "succeeded") {
        return "Выполнено";
      } else if (value == null) {
        // почему-то не везде в транзакциях есть поле со статусом
        return "Выполнено";
      } else {
        return value;
      }
    },
  },
  components: {
    Sheet,
    ContactEditPage,
  }
};
</script>