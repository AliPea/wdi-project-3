require("../spec_helper");

const User = require("../../models/user");
const Novel = require("../../models/novel");

describe("Novels tests", function() {
  beforeEach(done => {
    const novel = new Novel({
      creator: "testName",
      title: "testTitle",
      image: "http://fillmurray.com/200/300",
      wordCount: 150,
      entries: 5,
      status: "active",
      comments:[{
        author: "testAuthor",
        body: "testTestTestTest"
      }]
    });
    novel.save((err, novel) => {
      api.post("/api/novels")
      .set("Accept", "application/json")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send({
        // what goes here?
      });
    });
  });

  describe("GET /api/novels", () => {
    it ("Should return a 200 response", function(done) {
      this.skip();
      api.get('/api/novels')
      .set('Accept', 'application/json')
      .set("Authorization", `Bearer ${TOKEN}`)
      .expect(200, done);
    });
    it ("Should return a list of all novels", function(done) {
      this.skip();
    });
    it ("Should display all novels on the page", function(done) {
      this.skip();
    });
  });
  describe("POST /api/novels", () => {
    it ("Should get a 200 response", function(done) {
      this.skip();
      api.post("/api/novels")
      .set("Accept", "application/json")
      .expect(200, done);
    });
    it ("Should create a new novel", function(done) {
      this.skip();
    });
    it ("After POST it should redirect the page back to the main novels Index", function(done) {
      this.skip();
    });
    it ("Should save a reference of the users ID to the novel", function(done) {
      this.skip();
    });
    it ("Should only create an object if object includes: title, image and wordCount", function(done) {
      this.skip();
    });
    it ("Should only create the novel if the novel wordcount is below xxxxx", function(done) {
      this.skip();
    });
  });
  describe("PUT/PATCH /api/novels/:id", () => {
    it ("Should get a 200 response", function(done) {
      this.skip();
    });
    it ("Should create a new comment linked to the novel", function(done) {
      this.skip();
    });
    it ("Should only create the comment if the wordcount is below XXXX", function(done) {
      this.skip();
    });
  });
  describe("GET /api/novels/:id", () => {
    it ("Should get a 200 response", function(done) {
      this.skip();
      api.get("/api/novels/:id")
      .set("Accept", "application/json")
      .expect(200, done);
    });
    it ("Should display the novel on the page with an image", function(done) {
      this.skip();
    });
    it ("Be a unique image that has not been commented on before", function(done) {
      this.skip();
    });
  });
  describe("POST /api/novels/:id/entries", () => {
    it ("Should get a 200 response", function(done) {
      this.skip();
    });
    it ("Should display on the page all entries related to the novel", function(done) {
      this.skip();
    });
    it ("Should only enable the post if the character count is below the allowable limit", function(done) {
      this.skip();
    });
  });
  describe("POST /api/novels/:id/comments", () => {
    it ("Should get a 200 response", function(done) {
      this.skip();
    });
    it ("Should post the comment onto the page", function(done) {
      this.skip();
    });
    it ("Should contain a reference to the User ID", function(done) {
      this.skip();
    });
  });
});
