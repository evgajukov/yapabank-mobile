<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-text-field
          v-model="mobile"
          label="Мобильный номер телефона"
          v-mask="'+7 ### ###-##-##'"
        />
      </v-col>
      <v-col cols="4">
        <v-btn color="info" large @click="signin">Войти</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";

import Signer from "@waves/signer";
import Provider from "@waves.exchange/provider-web";

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
        let wallet = await signer.login();
        const assets = await signer.getBalance();
        console.log(balances);
        this.setWallet({
          ...wallet,
          assets
        });
        this.$router.push("/");
      } catch (error) {
        console.error(error.message);
      }
    },
    ...mapMutations(["setWallet"]),
  },
};
</script>