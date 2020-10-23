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
      timerId: null,
    };
  },
  computed: {
    ...mapState(["asset", "wallet", "reloadTimer"]),
  },
  async created() {
    this.seed = localStorage.seed;
    if (this.$route.name != "auth" && this.seed == null) {
      console.log("redirect to auth");
      this.$router.push("/signin");
    } else {
      await this.load();
    }
  },
  async updated() {
    await this.load();
  },
  destroyed() {
    if (this.timerId != null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  },
  methods: {
    async load() {
      if (this.$route.name != "auth" && this.wallet.address == null) {
        this.seed = localStorage.seed;
        if (this.seed == null) {
          console.log("seed is null");
          return;
        }

        try {
          await this.loadWallet(this.seed);
        } catch (error) {
          console.error(error.message);
        }

        try {
          await this.loadTxList();
        } catch (error) {
          console.error(error.message);
        }

        let data = localStorage[this.wallet.address];
        if (data != null) {
          data = JSON.parse(data);
          const contacts = data.contacts;
          if (contacts != null) {
            this.setContacts(contacts);
          }
        }

        if (this.timerId == null) {
          this.timerId = setInterval(async () => {
            await this.loadWallet(localStorage.seed);
            await this.loadTxList();
          }, this.reloadTimer);
        }
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
