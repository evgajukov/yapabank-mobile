<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        class="shrink mr-2"
        contain
        :src="require('@/assets/acra_white.png')"
        transition="scale-transition"
        width="30"
      />
    </div>
    <v-toolbar-title>{{appName}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <MenuLayer />
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
import MenuLayer from "@/pages/layers/MenuLayer";

export default {
  name: "HeaderLayer",
  computed: {
    ...mapState(["appName"]),
  },
  components: {
    MenuLayer,
  },
};
</script>