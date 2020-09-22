import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appName: "Acropol",
    symbol: "ACRA",
    txlist: [
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
    contacts: [
      { id: 1, name: "Хасан Карданов", address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk" },
    ],
  },
  getters,
  mutations
});