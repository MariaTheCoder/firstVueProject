const app = Vue.createApp({
  data() {
    return {
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@gmail.com",
      gender: "female",
      picture: "/janeDoe.jpg",
    };
  },
});

app.mount("#app");
