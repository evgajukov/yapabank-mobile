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
import Signer from "@waves/signer";
import { ProviderSeed } from "@waves/provider-seed";

import client from "./client";

import { mapState, mapMutations } from "vuex";

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
        const signer = new Signer();
        signer.setProvider(new ProviderSeed(this.seed));

        console.log("login and get balance...");
        const wallet = await signer.login();
        const assets = await signer.getBalance();
        this.setWallet({ ...wallet, assets });

        try {
          console.log("get txlist...");
          const gate = "https://acrasrv.yapalab.ru";
          const limit = 1000;
          const result = await client().get(
            `${gate}/transactions/address/${wallet.address}/limit/${limit}`
          );
          let txlist =
            result.data != null && result.data.length == 1
              ? result.data[0]
              : [];
          txlist = txlist.filter((tx) => tx.assetId == this.asset.id);
          this.setTxList(txlist);
        } catch (error) {
          console.error(error.message);
        }

        console.log("get contacts...");
        let data = localStorage[wallet.address];
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
  },
  components: {
    HeaderLayer,
    FooterLayer,
  },
};
</script>
