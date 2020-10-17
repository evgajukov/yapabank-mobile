<template>
  <v-container>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{address}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-text-field
      v-model="name"
      label="Название"
      hint="Введите название кошелька"
      persistent-hint
    />
    <br />
    <v-row justify="center">
      <v-btn color="success" class="ma-2 white--text" dark @click="save">Сохранить</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ContactEditPage",
  props: {
    address: String,
  },
  data() {
    return {
      name: null,
    };
  },
  computed: {
    ...mapGetters(["contactName"]),
  },
  created() {
    this.name = this.getContactName(this.address);
  },
  methods: {
    getContactName(address) {
      const name = this.contactName(address);
      return name != null ? name : null;
    },
    save() {
      if (this.name == null || this.name.trim().length == 0) return; // TODO: добавить удаление из адресной книги
      this.saveContact({ address: this.address, name: this.name.trim() });
      this.$emit("save");
      // TODO: закрыть окно
    },
    ...mapMutations(["saveContact"]),
  },
}
</script>