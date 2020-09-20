<template>
  <v-bottom-sheet v-model="visible" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn :color="color" class="ma-2 white--text" dark v-bind="attrs" v-on="on" @click="open">{{btnText}}</v-btn>
    </template>
    <v-sheet class="text-center">
      <v-btn class="mt-6" text color="error" @click="close">Закрыть</v-btn>
      <slot></slot>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  name: "SheetComponent",
  props: {
    show: Boolean,
    color: String,
    btnText: String,
  },
  data() {
    return {
      visible: false,
    };
  },
  created() {
    this.visible = this.show;
  },
  methods: {
    open() {
      this.$emit("open");
    },
    close() {
      this.visible = false;
      this.$emit("close");
    },
  }
}
</script>