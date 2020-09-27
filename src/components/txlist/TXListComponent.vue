<template>
  <v-list>
    <v-subheader v-if="header != null">{{header}}</v-subheader>
    <v-list-item three-line v-for="tx of getList" :key="tx.id">
      <v-list-item-icon>
        <v-icon v-if="tx.type == 'send'" color="red">mdi-arrow-bottom-right</v-icon>
        <v-icon v-if="tx.type == 'receive'" color="success">mdi-arrow-top-right</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{getContactName(tx.address)}}</v-list-item-title>
        <v-list-item-subtitle>{{tx.amount}} {{asset.name}}</v-list-item-subtitle>
        <v-list-item-subtitle>{{tx.dt | dateFormat}}</v-list-item-subtitle>
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
  },methods: {
    getContactName(value) {
      const name = this.contactName(value);
      return name != null ? name : value;
    },
  },
  computed: {
    getList() {
      if (this.length == null) return this.list;
      return this.list.slice(0, this.length);
    },
    ...mapState(["asset"]),
    ...mapGetters(["contactName"]),
  },
  filters: {
    dateFormat(value) {
      return moment(value, "DD.MM.YYYY HH:mm:ss").fromNow();
    },
  },
  components: {
    Sheet, TXInfo,
  },
};
</script>