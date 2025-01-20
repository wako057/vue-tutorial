const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
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
