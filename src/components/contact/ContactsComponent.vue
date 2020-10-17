<template>
  <v-list>
    <v-subheader v-if="header != null">{{ header }}</v-subheader>
    <v-list-item two-line v-for="contact of list" :key="contact.address">
      <v-list-item-content>
        <v-list-item-title>{{ contact.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ contact.address }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <Sheet
          :show="sheet.edit"
          color="grey lighten-1"
          :onlyIcon="true"
          btnIcon="mdi-pencil"
        >
          <ContactEditPage :address="contact.address" @save="saveContact" />
        </Sheet>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
import Sheet from "@/components/SheetComponent";
import ContactEditPage from "@/pages/ContactEditPage";

export default {
  name: "ContactsComponent",
  props: {
    header: String,
    list: Array,
  },
  data() {
    return {
      sheet: {
        edit: false,
      },
    };
  },
  methods: {
    saveContact() {
      console.log("Edit contact");
    },
  },
  components: {
    Sheet,
    ContactEditPage,
  }
};
</script>