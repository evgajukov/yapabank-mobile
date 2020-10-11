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
import { mapState, mapMutations } from "vuex";

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
  computed: {
    ...mapState(["asset"]),
  },
  methods: {
    async signin() {
      try {
        const signer = new Signer();
        signer.setProvider(new Provider());
        this.setSigner(signer);

        const wallet = await signer.login();
        wallet.address = "3P2o7ddaTLiw5QSqBevG7Y3RhFSu9xkA9Nf"; // TODO: на время тестирования
        const assets = await signer.getBalance();
        this.setWallet({
          ...wallet,
          assets,
        });

        const gate = "http://localhost:8000";
        const limit = 1000;
        const result = await client().get(`${gate}/transactions/address/${wallet.address}/limit/${limit}`);
        let txlist = (result.data != null && result.data.length == 1 ? result.data[0] : []);
        txlist = txlist.filter(tx => tx.assetId == this.asset.id);
        console.log(txlist);
        this.setTxList(txlist);

        this.$router.push("/");
      } catch (error) {
        console.error(error.message);
      }
    },
    ...mapMutations(["setSigner", "setWallet", "setTxList"]),
  },
};
</script>