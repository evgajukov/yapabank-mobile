<template>
  <v-app>
    <HeaderLayer v-if="wallet.address != null" />
    <v-main>
      <router-view></router-view>
    </v-main>
    <FooterLayer v-if="wallet.address != null" />
  </v-app>
</template>

<script>
import { mapState } from "vuex";

import HeaderLayer from "@/pages/layers/HeaderLayer";
import FooterLayer from "@/pages/layers/FooterLayer";

export default {
  name: "App",
  computed: {
    ...mapState(["wallet"]),
  },
  created() {
    if (this.$route.name != "auth" && this.wallet.address == null) this.$router.push("/signin");
  },
  components: {
    HeaderLayer, FooterLayer,
  }
};
</script>
