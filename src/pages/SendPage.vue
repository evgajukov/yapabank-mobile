<template>
  <div>
    <div class="py-3">Наведите на QR-код с адресом кошелька</div>
    <v-row justify="center">
      <v-col cols="10">
        <qrcode-stream v-if="showQrcodeReader" @init="onInit" @decode="onDecode"></qrcode-stream>
      </v-col>
    </v-row>
    <Toast
      v-if="toast.show"
      :show="toast.show"
      :text="toast.text"
      color="error"
      @close="toastClose"
    />
  </div>
</template>

<script>
import Toast from "@/components/ToastComponent";

export default {
  name: "SendPage",
  props: {
    showQrcodeReader: Boolean,
  },
  data() {
    return {
      error: null,
      toast: {
        show: false,
        text: "",
      },
    };
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
      if (decodedString != null) {
        const value = JSON.parse(decodedString);
        console.log(value);
      }
    },
    toastClose() {
      this.toast.show = false;
      this.toast.text = "";
    },
  },
  components: {
    Toast,
  },
};
</script>