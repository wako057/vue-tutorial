const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  computed: {
    output() {
      if (this.result < 37) {
        return "Not there yet";
      }
      if (this.result > 37) {
        return "Too much!";
      }
      return this.result;
    },
  },
  watch: {
    output(nb) {
      const that = this;
      setTimeout(function () {
        console.log("on reset");
        that.result = 0;
      }, 5000);
    },
  },
  methods: {
    add(nb) {
      this.result += nb;
    },
  },
});

app.mount("#assignment");
