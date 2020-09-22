<template>
  <v-container>
    <div class="py-3">Наведите на QR-код с адресом кошелька</div>
    <v-row justify="center">
      <v-col cols="10">
        <qrcode-stream v-if="showQrcodeReader" @init="onInit" @decode="onDecode"></qrcode-stream>
      </v-col>
    </v-row>
    <v-text-field
      v-model="amount"
      label="Сумма"
      hint="Укажите сколько хотите отправить"
      persistent-hint
      :suffix="symbol"
    />
    <v-text-field
      v-model="address"
      label="Адрес"
      hint="Укажите адрес кошелька получателя"
      persistent-hint
    />
    <v-row justify="center">
      <v-btn color="success" class="ma-2 white--text" dark @click="send">Отправить</v-btn>
    </v-row>
    <Toast
      v-if="toast.show"
      :show="toast.show"
      :text="toast.text"
      color="error"
      @close="toastClose"
    />
  </v-container>
</template>

<script>
import { mapState } from "vuex";

import Toast from "@/components/ToastComponent";

export default {
  name: "SendPage",
  props: {
    showQrcodeReader: Boolean,
  },
  data() {
    return {
      error: null,
      value: null,
      amount: null,
      address: null,
      toast: {
        show: false,
        text: "",
      },
    };
  },
  computed: {
    ...mapState(["symbol"]),
  },
  methods: {
    async onInit(promise) {
      try {
        await promise;
        this.toast.text = "";
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
          this.toast.text =
            "Необходимо предоставить разрешение на доступ к камере";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
          this.toast.text = "На этом устройстве нет камеры";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
          this.toast.text =
            "Контекст безопасности, требуется (по протоколу HTTPS, локальный)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
          this.toast.text = "Камера уже используется?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
          this.toast.text = "Установленные камеры не подходят";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
          this.toast.text = "Stream API не поддерживается в этом браузере";
        }
        this.toast.show = this.error != null;
      }
    },
    onDecode(decodedString) {
      console.log(decodedString);
      if (decodedString != null) {
        try {
          this.value = JSON.parse(decodedString);
          console.log(this.value);

          this.amount = this.value.amount != null ? Math.abs(parseFloat(this.value.amount)) : null;
          this.address = this.value.address != null ? this.value.address : null;
        } catch (error) {
          console.error(error.message);
        }
      }
    },
    toastClose() {
      this.toast.show = false;
      this.toast.text = "";
    },
    send() {
      console.log("Отправка монет!!!");
    },
  },
  components: {
    Toast,
  },
};
</script>