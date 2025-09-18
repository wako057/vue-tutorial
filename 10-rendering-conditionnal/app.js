const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalValue: "",
      showList: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.showList ? "Hide List" : "Show List";
    },
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
    toggleList() {
      console.log("toggleList", this.showList);
      this.showList = !this.showList;
    },
  },
});

app.mount("#user-goals");
