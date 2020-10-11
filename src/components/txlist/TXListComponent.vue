<template>
  <v-list>
    <v-subheader v-if="header != null">{{header}}</v-subheader>
    <v-list-item three-line v-for="tx of getList" :key="tx.id">
      <v-list-item-icon>
        <v-icon v-if="tx.sender == wallet.address" color="red">mdi-arrow-bottom-right</v-icon>
        <v-icon v-else color="success">mdi-arrow-top-right</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{getContactName(tx)}}</v-list-item-title>
        <v-list-item-subtitle>{{tx | amountFormat(wallet)}} {{asset.name}}</v-list-item-subtitle>
        <v-list-item-subtitle>{{tx.timestamp | dateFormat}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <Sheet :show="sheet.info" color="grey lighten-1" :onlyIcon="true" btnIcon="mdi-information">
          <TXInfo :tx="tx" />
        </Sheet>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
import moment from "moment";
import { mapState, mapGetters } from "vuex";

import Sheet from "@/components/SheetComponent";
import TXInfo from "@/components/txlist/TXInfoComponent";

export default {
  name: "TXListComponent",
  props: {
    header: String,
    list: Array,
    length: Number,
  },
  data() {
    return {
      sheet: {
        info: false,
      },
    };
  },
  computed: {
    getList() {
      if (this.length == null) return this.list;
      return this.list.slice(0, this.length);
    },
    ...mapState(["asset", "wallet"]),
    ...mapGetters(["contactName"]),
  },
  methods: {
    getContactName(tx) {
      const value = tx.sender == this.wallet.address ? tx.recipient : tx.sender;
      const name = this.contactName(value);
      return name != null ? name : value;
    },
  },
  filters: {
    amountFormat(tx, wallet) {
      return tx.sender == wallet.address ? `-${tx.amount}` : `+${tx.amount}`;
    },
    dateFormat(value) {
      return moment(value).fromNow();
    },
  },
  components: {
    Sheet, TXInfo,
  },
};
</script>