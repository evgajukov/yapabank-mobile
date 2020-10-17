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
        <br />
        <v-textarea
          label="Введите SEED"
          hint="Введите SEED для доступа к своему кошельку"
          v-model="seed"
        />
        <br />
        <v-btn color="info" large @click="signin">Войти</v-btn>
        <br />
        &mdash; или &mdash;
        <br />
        <v-btn color="success" large @click="create">Создать</v-btn>
        <br /><br />
        <p v-if="newAddress" class="red--text text-caption">ВНИМАНИЕ! Не забудьте сохранить SEED в надежном месте. При его потере доступ к кошельку и всему его содержимому будет потерян.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { libs } from "@waves/waves-transactions";

export default {
  name: "AuthPage",
  data() {
    return {
      seed: null,
      newAddress: false,
    };
  },
  created() {
    console.log("created auth");
  },
  updated() {
    console.log("updated auth");
  },
  methods: {
    async signin() {
      try {
        localStorage.seed = this.seed;
        this.$router.push("/");
      } catch (error) {
        console.error(error.message);
      }
    },
    create() {
      this.seed = libs.crypto.randomSeed(15);
      this.newAddress = true;
    },
  },
};
</script>