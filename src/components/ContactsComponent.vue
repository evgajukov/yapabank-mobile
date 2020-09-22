<template>
  <v-list>
    <v-subheader v-if="header != null">{{header}}</v-subheader>
    <v-list-item two-line v-for="contact of list" :key="contact.id">
      <v-list-item-content>
        <v-list-item-title>{{contact.name}}</v-list-item-title>
        <v-list-item-subtitle>{{contact.address}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn icon>
          <v-icon color="grey lighten-1">mdi-information</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "ContactsComponent",
  props: {
    header: String,
    list: Array,
  },
};
</script>