<template>
  <v-row justify="center">
    <h1 class="text-h4">Баланс {{value}} {{asset.name}}</h1>
  </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BalanceComponent",
  props: ["value"],
  computed: {
    ...mapState(["asset"]),
  },
}
</script>