const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      console.log("bluuu");
      alert("submitted!");
    },
    setName(event, lastName) {
      this.name = `${event.target.value} ${lastName}`;
    },
    increment(nb) {
      this.counter += nb;
    },
    decrement(nb) {
      this.counter -= nb;
    },
  },
});

app.mount("#events");
