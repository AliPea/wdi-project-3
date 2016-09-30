require("../spec_helper");

const User = require('../../models/user');

let TOKEN;

describe("User tests", function() {

  beforeEach(done => {
    const user = new User({
      username:             "test",
      firstName:            "testFirst",
      lastName:             "testLast",
      image:                "http://fillmurray.com/200/200",
      email:                "test@test.com",
      password:             "password",
      passwordConfirmation: "password"
    });

    user.save((err, user) => {
      api.post('/api/login')
      .set("Accept", "application/json")
      .send({
        email: "test@test.com",
        password: "password"
      }).end((err, res) => {
        TOKEN = res.body.token;
        done();
      });
    });
  });

  describe("GET /users", () => {
    it("Should get a 200 response", function(done) {
      this.skip();
      api.get("/api/users")
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`)
      .expect(200, done);
    });
    it ("Should list all users/novelists onto the page", function(done) {
      this.skip();
    });
    it ("Should only return a list of users if the user is logged in", function(done) {
      this.skip();
    });
  });
  describe("GET /users/:id", () => {
    it ("Should get a 200 response", function(done) {
      this.skip();
    });
    it ("Should display the user profile page", function(done) {
      this.skip();
    });
    it("Should return the users username, first, lastName, email, and any novel entries they have made", function(done) {
      this.skip();
    });
    it ("Should only return information related to that user", function(done) {
      this.skip();
    });
    it ("Should only return the user information if the user is logged in", function(done) {
      this.skip();
    });
  });
  describe("PUT/PATCH /users/:id", () => {
    it("Should geta  200 response", function(done) {
      this.skip();
    });
    it("Should save the user detail changes to their profile", function(done) {
      this.skip();
    });
    it("Should only allow an edit if the user is logged in", function(done) {
      this.skip();
    });
    it("Should not allow the user to edit their narative comments", function(done) {
      this.skip();
    });
  });
});
