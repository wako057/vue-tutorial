const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
          detailsAreVisible: false,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
          detailsAreVisible: false,
        },
      ],
    };
  },
  methods: {
    toggleDetails(id) {
      this.friends.find((friend) => friend.id === id).detailsAreVisible =
        !this.friends.find((friend) => friend.id === id).detailsAreVisible;
    },
  },
});

app.mount("#app");
