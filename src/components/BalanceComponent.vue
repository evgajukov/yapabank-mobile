<template>
  <v-row justify="center">
    <h1 class="text-h4">Баланс {{value}} {{symbol}}</h1>
  </v-row>
</template>

<script>
export default {
  name: "BalanceComponent",
  props: ["value", "symbol"],
}
</script>