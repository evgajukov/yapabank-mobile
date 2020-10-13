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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AuthPage",
  data() {
    return {
      seed: "border priority access found ethics between length cinnamon blame useful happy bag captain sad side",
    };
  },
  created() {
    console.log("created auth");
    // if (localStorage.seed != null) this.$router.push("/");
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
  },
};
</script>