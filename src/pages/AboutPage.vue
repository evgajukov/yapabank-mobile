<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('@/assets/acra_blue.png')" class="my-3" contain height="200" />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">ARCA кошелек</h1>
        <p class="subheading font-weight-regular">Версия 1.0.19</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>