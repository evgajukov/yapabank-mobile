<template>
  <v-app>
    <HeaderLayer />
    <v-main>
      <router-view></router-view>
    </v-main>
    <FooterLayer />
  </v-app>
</template>

<script>
import HeaderLayer from "@/pages/layers/HeaderLayer";
import FooterLayer from "@/pages/layers/FooterLayer";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    HeaderLayer, FooterLayer,
  }
};
</script>
