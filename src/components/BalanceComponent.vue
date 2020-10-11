<template>
  <v-row justify="center">
    <h1 class="text-h4">Баланс {{value | amountFormat}} {{symbol}}</h1>
  </v-row>
</template>

<script>
export default {
  name: "BalanceComponent",
  props: ["value", "symbol"],
  filters: {
    amountFormat(value) {
      return new Intl.NumberFormat().format(value);
    }
  },
}
</script>