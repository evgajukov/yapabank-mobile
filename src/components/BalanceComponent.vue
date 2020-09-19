<template>
  <v-row justify="center">
    <h1 class="text-h4">Баланс {{value}} ACRO</h1>
  </v-row>
</template>

<script>
export default {
  name: "BalanceComponent",
  props: ["value"],
}
</script>