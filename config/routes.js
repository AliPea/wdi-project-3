const express  = require("express");
const router   = express.Router();

const authentications  = require("../controllers/authentications");
const users            = require("../controllers/users");
const novels           = require("../controllers/novels");

router.route("/register")
  .post(authentications.register);
router.route("/login")
  .post(authentications.login);

router.route('/users')
  .get(users.index);
router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .patch(users.update)
  .delete(users.delete);

router.route("/novels")
  .get(novels.index)
  .post(novels.create);
router.route("/novels/:id")
  .get(novels.show)
  .post(novels.create)
  .put(novels.update)
  .patch(novels.update)
  .delete(novels.delete);
router.route("/novels/:id/addentry")
  .put(novels.addEntry);
router.route("/novels/:id/addcomment")
  .put(novels.addComment);

module.exports = router;
