<template>
  <v-container fluid>
    <Contacts :list="contacts" />
  </v-container>
</template>

<script>
import { mapState } from "vuex";

import Contacts from "@/components/contact/ContactsComponent";

export default {
  name: "ContactsPage",
  computed: {
    ...mapState(["contacts"]),
  },
  components: {
    Contacts,
  },
}
</script>