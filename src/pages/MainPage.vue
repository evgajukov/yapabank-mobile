<template>
  <v-container fluid>
    <v-row justify="center">
      <qrcode-vue value="3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk" size="200" />
    </v-row>
  </v-container>
</template>

<script>
import QrcodeVue from "qrcode.vue";

export default {
  name: "MainPage",
  components: {
    QrcodeVue,
  },
};
</script>