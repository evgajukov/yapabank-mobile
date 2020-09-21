<template>
  <v-container fluid>
    <TXList />
  </v-container>
</template>

<script>
import TXList from "@/components/TXListComponent";
export default {
  name: "HistoryPage",
  components: {
    TXList
  }
}
</script>