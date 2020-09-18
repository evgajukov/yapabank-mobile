<template>
  <v-bottom-navigation v-model="bottomNav" color="primary">
    <v-btn value="main" to="/">
      <span>Главная</span>
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>
    <v-btn value="history" to="/history">
      <span>История</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>
    <v-btn value="contacts" to="/contacts">
      <span>Контакты</span>
      <v-icon>mdi-account-box-multiple-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "FooterLayer",
  data() {
    return {
      bottomNav: "main",
    };
  },
};
</script>