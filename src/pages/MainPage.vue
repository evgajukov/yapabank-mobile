<template>
  <v-container fluid>
    <Balance value="990" />
    <br />
    <v-row justify="center">
      <v-col cols="12">
        <v-text-field :value="address" readonly>
          <v-icon slot="append" v-clipboard="address" @click="copy">mdi-content-copy</v-icon>
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <qrcode-vue :value="qrcodeValue" size="200" />
    </v-row>
    <v-row justify="center">
      <Sheet
        :show="sheet.receive"
        color="info"
        btnText="Получить"
        @open="sheetOpen"
        @close="sheetClose"
      >
        <ReceivePage />
      </Sheet>
      <Sheet
        :show="sheet.send"
        color="success"
        btnText="Отправить"
        @open="sheetOpen"
        @close="sheetClose"
      >
        <SendPage :showQrcodeReader="showQrcodeReader" />
      </Sheet>
    </v-row>
    <br />
    <v-card outlined>
      <v-list>
        <v-subheader>Последние 20 операций</v-subheader>
        <v-list-item three-line v-for="tx of txlist" :key="tx.id">
          <v-list-item-icon>
            <v-icon v-text="tx.icon" :color="tx.color"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{tx.address}}</v-list-item-title>
            <v-list-item-subtitle>{{tx.amount}} ACRO</v-list-item-subtitle>
            <v-list-item-subtitle>{{tx.dt}}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
    <Toast
      v-if="toast.show"
      :show="toast.show"
      :text="toast.text"
      color="success"
      @close="toastClose"
    />
  </v-container>
</template>

<script>
import QrcodeVue from "qrcode.vue";
import Balance from "@/components/BalanceComponent";
import Toast from "@/components/ToastComponent";
import Sheet from "@/components/SheetComponent";
import SendPage from "@/pages/SendPage";
import ReceivePage from "@/pages/ReceivePage";

export default {
  name: "MainPage",
  data() {
    return {
      toast: {
        show: false,
        text: "",
      },
      sheet: {
        send: false,
        receive: false,
      },
      showQrcodeReader: true,
      address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk",
      txlist: [
        {
          id: 2,
          icon: "mdi-arrow-bottom-right",
          color: "red",
          address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk",
          amount: "-10",
          dt: "сегодня",
        },
        {
          id: 1,
          icon: "mdi-arrow-top-right",
          color: "success",
          address: "3P6DuEzi1zaCYik3DGXEjtHmKNdiA7YQJWk",
          amount: "+1000",
          dt: "вчера",
        },
      ],
    };
  },
  computed: {
    qrcodeValue() {
      let value = { address: this.address, amount: null };
      return JSON.stringify(value);
    },
  },
  methods: {
    copy() {
      this.toast.show = true;
      this.toast.text = "Адрес кошелька скопирован";
    },
    toastClose() {
      this.toast.show = false;
      this.toast.text = "";
    },
    sheetOpen() {
      this.showQrcodeReader = true;
    },
    sheetClose() {
      this.showQrcodeReader = false;
    },
  },
  components: {
    QrcodeVue,
    Balance,
    Toast,
    Sheet,
    SendPage,
    ReceivePage,
  },
};
</script>