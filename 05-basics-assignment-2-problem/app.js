const app = Vue.createApp({
  data() {
    return {
      enteredText: "",
      enteredText2: "",
      confirmedText: "",
    };
  },
  methods: {
    showAlert() {
      alert("On montre une alerte");
    },
    updateText(event) {
      this.enteredText = event.target.value;
    },
    updateText2(event) {
      this.enteredText2 = event.target.value;
    },
    confirmText() {
      this.confirmedText = this.enteredText2;
    },
  },
});

app.mount("#assignment");
