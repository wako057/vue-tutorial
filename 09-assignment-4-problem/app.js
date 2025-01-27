const app = Vue.createApp({
  data() {
    return {
      userInputCss: "",
      paragraphVisible: true,
      userInputInlineStyle: "",
    };
  },
  computed: {
    computedCss() {
      if (["user1", "user2"].includes(this.userInputCss)) {
        return this.userInputCss;
      }
      return "";
    },
  },
  methods: {
    toggleParagraphVisibility() {
      this.paragraphVisible = !this.paragraphVisible;
    },
  },
});

app.mount("#assignment");
