<template>
  <v-container>
    <v-text-field
      v-model="amount"
      label="Сумма"
      hint="Укажите сколько хотите получить"
      persistent-hint
      :suffix="asset.name"
    />
    <v-row justify="center">
      <v-col cols="12">
        <v-text-field :value="wallet.address" readonly>
          <v-icon slot="append" v-clipboard="wallet.address" @click="copy">mdi-content-copy</v-icon>
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <qrcode-vue :value="qrcodeValue" size="200" />
    </v-row>
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
import { mapState } from "vuex";

import QrcodeVue from "qrcode.vue";
import Toast from "@/components/ToastComponent";

export default {
  name: "ReceivePage",
  data() {
    return {
      toast: {
        show: false,
        text: "",
      },
      amount: 100,
    };
  },
  computed: {
    qrcodeValue() {
      let value = {
        address: this.wallet.address,
        amount: this.amount.length > 0 || this.amount != 0 ? this.amount : null,
      };
      return JSON.stringify(value);
    },
    ...mapState(["asset", "wallet"]),
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
  },
  watch: {
    amount: function (value) {
      if (value == null || value.length == 0) return;
      this.amount = Math.abs(parseFloat(value));
    },
  },
  components: {
    QrcodeVue,
    Toast,
  },
};
</script>