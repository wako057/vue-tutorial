const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
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
