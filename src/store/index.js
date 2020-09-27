import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appName: "Acropol",
    asset: {
      id: "AERXACWDKTKBcvHLZch3UozqogjbcPktrfdoSuDxh3Lu",
      name: "ACRA",
    },
    wallet: {
      address: null,
    },
    txlist: [
      {
        id: 10,
        address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk",
        amount: "-10",
        type: "send",
        dt: "21.09.2020 09:30:32",
        status: "success",
      },
      {
        id: 9,
        address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJW1",
        amount: "+10",
        type: "receive",
        dt: "20.09.2020 09:30:32",
        status: "process",
      },
      {
        id: 8,
        address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJW1",
        amount: "-10",
        type: "send",
        dt: "19.09.2020 09:30:32",
        status: "error",
      },
      {
        id: 7,
        address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJW1",
        amount: "-10",
        type: "send",
        dt: "19.09.2020 08:30:32",
        status: "success",
      },
      {
        id: 6,
        address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJW1",
        amount: "-10",
        type: "send",
        dt: "18.09.2020 09:30:32",
        status: "success",
      },
      {
        id: 5,
        address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJW1",
        amount: "-10",
        type: "send",
        dt: "17.09.2020 09:30:32",
        status: "success",
      },
      {
        id: 4,
        address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJW1",
        amount: "-10",
        type: "send",
        dt: "16.09.2020 09:30:32",
        status: "success",
      },
      {
        id: 3,
        address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJW1",
        amount: "-10",
        type: "send",
        dt: "15.09.2020 09:30:32",
        status: "success",
      },
      {
        id: 2,
        address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJW1",
        amount: "-10",
        type: "send",
        dt: "01.09.2020 09:30:32",
        status: "success",
      },
      {
        id: 1,
        address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk",
        amount: "+1000",
        type: "receive",
        dt: "01.09.2020 12:31:45",
        status: "success",
      },
    ],
    contacts: [
      { id: 1, name: "Хасан Карданов", address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk" },
    ],
  },
  getters,
  mutations
});