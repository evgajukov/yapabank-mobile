<template>
  <v-app>
    <HeaderLayer v-if="seed != null" />
    <v-main>
      <router-view></router-view>
    </v-main>
    <FooterLayer v-if="wallet.address != null" />
  </v-app>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import HeaderLayer from "@/pages/layers/HeaderLayer";
import FooterLayer from "@/pages/layers/FooterLayer";

export default {
  name: "App",
  data() {
    return {
      seed: null,
    };
  },
  computed: {
    ...mapState(["asset", "wallet"]),
  },
  async created() {
    console.log("created app");
    this.seed = localStorage.seed;
    if (this.$route.name != "auth" && this.seed == null) {
      console.log("redirect to auth");
      this.$router.push("/signin");
    } else {
      await this.load();
    }
  },
  async updated() {
    console.log("updated app");
    await this.load();
  },
  methods: {
    async load() {
      console.log("start load");
      if (this.$route.name != "auth" && this.wallet.address == null) {
        console.log("load...");
        this.seed = localStorage.seed;
        if (this.seed == null) {
          console.log("seed is null");
          return;
        }

        try {
          console.log("login and get balance...");
          await this.loadWallet(this.seed);
        } catch (error) {
          console.error(error.message);
        }

        try {
          console.log("get txlist...");
          await this.loadTxList();
        } catch (error) {
          console.error(error.message);
        }

        console.log("get contacts...");
        let data = localStorage[this.wallet.address];
        if (data != null) {
          data = JSON.parse(data);
          const contacts = data.contacts;
          if (contacts != null) {
            this.setContacts(contacts);
          }
        }

        console.log("finish load");
      }
    },
    ...mapMutations(["setWallet", "setTxList", "setContacts"]),
    ...mapActions(["loadWallet", "loadTxList"]),
  },
  components: {
    HeaderLayer,
    FooterLayer,
  },
};
</script>
