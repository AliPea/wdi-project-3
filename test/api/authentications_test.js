require("../spec_helper");

const User = require('../../models/user');

describe("Auth tests", function() {

  this.timeout(5000);

  beforeEach(done => {
    User.collection.drop();
    done();
  });

  describe("POST api/register with good credentials", () => {
    it("should return a token", done => {
      api.post("/api/register")
      .set("Accept", "application/json")
      .send({
        user: {
          userName: "testFirst",
          email: "test@test.com",
          password: "password",
          passwordConfirmation: "password",
        }
      });
    });
  });
});
