require("../spec_helper");

const User = require("../../models/user");

let TOKEN;

describe("Auth tests", function() {
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

  describe("POST /login", () => {
    it ("Should get a 200 response", function(done) {
      // this.skip();
      api.post("/api/login")
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send({
        email: "test@test.com",
        password: "password"
      }).expect(200, done);
    });
    it("should return a 401 response from wrong password", function(done) {
      // this.skip();
      api.post('/api/login')
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send({
        email: "test@test.com",
        password: "wrongPassword"
      }).expect(401, done);
    });
    it("Should only be able to log in with a unique username and matching password", function(done) {
      // this.skip();
      api.post("/api/login")
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send({
        email: "differentTest@test.com",
        password: "password"
      }).expect(401, done);

    });
  });
  describe("POST /register", function(done) {
    it ("Should get a 200 repsonse", function(done) {
      this.skip();
      api.post("api/register")
      .set("Accept", "application/json")
      .send({
        user: {
          username:             "testTest",
          firstName:            "testTestFirst",
          lastName:             "testTestLast",
          image:                "http://fillmurray.com/200/200",
          email:                "testTest@test.com",
          password:             "password",
          passwordConfirmation: "password"
        }
      }).expect(201, done);
    });
    it("should return a token", function(done) {
      this.skip();
      api.post('/api/register')
      .set("Accept", "application/json")
      .send({
        user: {
          username:             "testTest",
          firstName:            "testTestFirst",
          lastName:             "testTestLast",
          image:                "http://fillmurray.com/200/200",
          email:                "testTest@test.com",
          password:             "password",
          passwordConfirmation: "password"
        }
      }).end((err, res) => {
        expect(res.body.token).to.be.a('string');
        done();
      });
    });
    it("should return a 400 response", function(done) {
      this.skip();
      api.post('/api/register')
      .set("Accept", "application/json")
      .send({
        username: "test",
        email: "test@test.com",
      }).expect(400, done);
    });
    it ("Should only accept registry with a unique username", function(done) {
      this.skip();
      api.post("api/register")
      .set("Accept", "application/json")
      .send({
        username:             "test",
        firstName:            "testFirst",
        lastName:             "testLast",
        image:                "http://fillmurray.com/200/200",
        email:                "test@test.com",
        password:             "password",
        passwordConfirmation: "password"
      }).expect(401, done);
    });
    it ("Should only accept a password of more than 5 letters", function(done) {
      this.skip();
    });
    it ("Should only accept registry if a username, email and password are included", function(done) {
      this.skip();
    });
  });
});
