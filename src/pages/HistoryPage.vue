<template>
  <v-container fluid>
    <TXList :list="txlist" />
  </v-container>
</template>

<script>
import { mapState } from "vuex";

import TXList from "@/components/txlist/TXListComponent";

export default {
  name: "HistoryPage",
  computed: {
    ...mapState(["txlist"]),
  },
  components: {
    TXList
  }
}
</script>