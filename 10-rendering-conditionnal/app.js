const app = Vue.createApp({
  data() {
    enteredGoalValue: "";
    return { goals: [] };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
  },
});

app.mount("#user-goals");
