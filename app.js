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
  methods: {
    getUser() {
      (this.firstName = "Sam"),
        (this.lastName = "Smith"),
        (this.email = "sam@gmail.com"),
        (this.gender = "male"),
        (this.picture = "/samSmith.jpg");
    },
  },
});

app.mount("#app");
