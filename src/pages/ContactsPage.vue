<template>
  <v-container fluid>
    <Contacts />
  </v-container>
</template>

<script>
import Contacts from "@/components/ContactsComponent";

export default {
  name: "ContactsPage",
  components: {
    Contacts,
  },
}
</script>