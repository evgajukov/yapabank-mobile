<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center" class="text-center">
      <v-col>
        <v-img
          :src="require('@/assets/acra_blue.png')"
          class="my-3"
          contain
          height="300"
        />
        <br /><v-btn color="info" large @click="signin">Войти</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";

import Signer from "@waves/signer";
import Provider from "@waves.exchange/provider-web";

import client from "../client";

export default {
  name: "AuthPage",
  data() {
    return {
      mobile: null,
    };
  },
  methods: {
    async signin() {
      try {
        const signer = new Signer();
        signer.setProvider(new Provider());
        this.setSigner(signer);

        let wallet = await signer.login();
        const assets = await signer.getBalance();
        this.setWallet({
          ...wallet,
          assets,
        });

        const result = await client().get("http://localhost:8000/transactions/address/3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk/limit/100");
        const txlist = (result.data != null && result.data.length == 1 ? result.data[0] : []);
        console.log(txlist);

        this.$router.push("/");
      } catch (error) {
        console.error(error.message);
      }
    },
    ...mapMutations(["setSigner", "setWallet"]),
  },
};
</script>