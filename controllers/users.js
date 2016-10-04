module.exports = {
  index:  usersIndex,
  show:   usersShow,
  update: usersUpdate,
  delete: usersDelete
};

const User    = require('../models/user');
const Require = require('../models/novel');
const Entry   = Require.entry;
const Novel   = Require.novel;

const Comment = Require.comment;

function usersIndex(req, res) {
  User.find((err, users) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    return res.status(200).json({ users });
  });
}

function usersShow(req, res) {
  let storage = {};
  User
    .findById(req.params.id)
    .exec((err, user) => {
      if (err) return res.status(500).json({ message: "Something went wrong."});
      if (!user) return res.status(404).json({ message: "User not found."});

      Novel.find({ creator: req.params.id }).exec((err, novels) => {
        if (err) return res.status(500).json({ message: "Something went wrong."});
        storage.novels = novels;
      });

      Novel.find({})
      .populate('entries')
      .find({'entries.author': req.params.id})
      .exec((err, entries) => {
        if (err) return res.status(500).json({ message: "Something went wrong."});
        console.log(entries);
        storage.entries = entries;
      });

setTimeout(function(){ return res.status(200).json({ user, novels: storage.novels, entries: storage.entries }); }, 500);

    });

}

function usersUpdate(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body.user, { new: true },  (err, user) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    if (!user) return res.status(404).json({ message: "User not found." });
    return res.status(200).json({ user });
  });
}

function usersDelete(req, res) {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    if (!user) return res.status(404).json({ message: "User not found." });
    return res.status(204).send();
  });
}
