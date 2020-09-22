<template>
  <v-list>
    <v-subheader v-if="header != null">{{header}}</v-subheader>
    <v-list-item three-line v-for="tx of getList" :key="tx.id">
      <v-list-item-icon>
        <v-icon v-text="tx.icon" :color="tx.color"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{tx.address}}</v-list-item-title>
        <v-list-item-subtitle>{{tx.amount}} {{symbol}}</v-list-item-subtitle>
        <v-list-item-subtitle>{{tx.dt | dateFormat}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn icon>
          <v-icon color="grey lighten-1">mdi-information</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";

export default {
  name: "TXListComponent",
  props: {
    header: String,
    list: Array,
    length: Number,
  },
  computed: {
    getList() {
      if (this.length == null) return this.list;
      return this.list.slice(0, this.length);
    },
    ...mapState(["symbol"]),
  },
  filters: {
    dateFormat(value) {
      return moment(value, "DD.MM.YYYY HH:mm:ss").fromNow();
    },
  },
};
</script>