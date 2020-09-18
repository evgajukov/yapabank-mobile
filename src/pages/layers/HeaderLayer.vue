<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Acropol</v-toolbar-title>
    <v-spacer></v-spacer>
    <MenuLayer />
  </v-app-bar>
</template>

<script>
import MenuLayer from "@/pages/layers/MenuLayer";

export default {
  name: "HeaderLayer",
  components: {
    MenuLayer,
  }
}
</script>