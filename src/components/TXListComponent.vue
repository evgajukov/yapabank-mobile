<template>
  <v-list>
    <v-subheader v-if="header != null">{{header}}</v-subheader>
    <v-list-item three-line v-for="tx of list" :key="tx.id">
      <v-list-item-icon>
        <v-icon v-text="tx.icon" :color="tx.color"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{tx.address}}</v-list-item-title>
        <v-list-item-subtitle>{{tx.amount}} ACRO</v-list-item-subtitle>
        <v-list-item-subtitle>{{tx.dt | dateFormat}}</v-list-item-subtitle>
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
import moment from "moment";

export default {
  name: "TXListComponent",
  props: {
    header: String,
  },
  data() {
    return {
      list: [
        {
          id: 10,
          icon: "mdi-arrow-bottom-right",
          color: "red",
          address: "Хасан Карданов",
          amount: "-10",
          dt: "21.09.2020 09:30:32",
        },
        {
          id: 9,
          icon: "mdi-arrow-top-right",
          color: "success",
          address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk",
          amount: "+10",
          dt: "20.09.2020 09:30:32",
        },
        {
          id: 8,
          icon: "mdi-arrow-bottom-right",
          color: "red",
          address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk",
          amount: "-10",
          dt: "19.09.2020 09:30:32",
        },
        {
          id: 7,
          icon: "mdi-arrow-bottom-right",
          color: "red",
          address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk",
          amount: "-10",
          dt: "19.09.2020 08:30:32",
        },
        {
          id: 6,
          icon: "mdi-arrow-bottom-right",
          color: "red",
          address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk",
          amount: "-10",
          dt: "18.09.2020 09:30:32",
        },
        {
          id: 5,
          icon: "mdi-arrow-bottom-right",
          color: "red",
          address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk",
          amount: "-10",
          dt: "17.09.2020 09:30:32",
        },
        {
          id: 4,
          icon: "mdi-arrow-bottom-right",
          color: "red",
          address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk",
          amount: "-10",
          dt: "16.09.2020 09:30:32",
        },
        {
          id: 3,
          icon: "mdi-arrow-bottom-right",
          color: "red",
          address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk",
          amount: "-10",
          dt: "15.09.2020 09:30:32",
        },
        {
          id: 2,
          icon: "mdi-arrow-bottom-right",
          color: "red",
          address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk",
          amount: "-10",
          dt: "01.09.2020 09:30:32",
        },
        {
          id: 1,
          icon: "mdi-arrow-top-right",
          color: "success",
          address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk",
          amount: "+1000",
          dt: "01.09.2020 12:31:45",
        },
      ],
    };
  },
  filters: {
    dateFormat(value) {
      return moment(value, "DD.MM.YYYY HH:mm:ss").fromNow();
    },
  },
};
</script>