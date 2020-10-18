<template>
  <v-container fluid>
    <Balance :value="balance" :symbol="symbol()" />
    <br />
    <v-row justify="center">
      <v-col cols="12">
        <v-text-field :value="wallet.address" readonly>
          <v-icon slot="append" v-clipboard="() => wallet.address" @click="copy">mdi-content-copy</v-icon>
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
        @open="sheetOpen(); sheet.receive = true;"
        @close="sheetClose(); sheet.receive = false"
      >
        <ReceivePage />
      </Sheet>
      <Sheet
        :show="sheet.send"
        color="success"
        btnText="Отправить"
        @open="sheetOpen(); sheet.send = true;"
        @close="sheetClose(); sheet.send = false;"
      >
        <SendPage :showQrcodeReader="showQrcodeReader" @send="sheet.send = false" />
      </Sheet>
    </v-row>
    <br />
    <v-card outlined>
      <TXList header="Последние 10 операций" :list="txlist" :length="10" />
    </v-card>
    <br /><br />
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
import { mapState, mapGetters } from "vuex";

import QrcodeVue from "qrcode.vue";
import Balance from "@/components/BalanceComponent";
import Toast from "@/components/ToastComponent";
import Sheet from "@/components/SheetComponent";
import TXList from "@/components/txlist/TXListComponent";
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
    };
  },
  computed: {
    balance() {
      const asset = this.asset();
      if (asset == null) return 0;
      return asset.amount;
    },
    qrcodeValue() {
      let value = { address: this.wallet.address, amount: null };
      return JSON.stringify(value);
    },
    ...mapState(["wallet", "txlist"]),
    ...mapGetters(["asset", "symbol"]),
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
    TXList,
  },
};
</script>