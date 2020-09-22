<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-text-field v-model="mobile" label="Мобильный номер телефона" v-mask="'+7 ### ###-##-##'" />
      </v-col>
      <v-col cols="4">
        <v-btn color="info" large @click="signin">Войти</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AuthPage",
  data() {
    return {
      mobile: null,
    };
  },
  methods: {
    signin() {
      this.setUser({ mobile: this.mobile });
      this.$router.push("/");
    },
    ...mapMutations(["setUser"]),
  },
}
</script>