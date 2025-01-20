const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
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
