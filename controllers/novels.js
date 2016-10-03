module.exports = {
  index:      novelsIndex,
  create:     novelsCreate,
  show:       novelsShow,
  update:     novelsUpdate,
  delete:     novelsDelete,
  addEntry:   novelsAddEntry,
  addComment: novelsAddComment
};

const Novel = require('../models/novel');

function novelsIndex (req, res ) {
  Novel.find((err, novels) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    return res.status(200).json({ novels });
  });
}

function novelsCreate(req, res) {
  Novel.create({
    creator: req.user._id,
    title:   req.body.novel.title,
    image:   req.body.novel.image
  }, (err, novel) => {
    if(err) return res.status(500).json({ message: "Something went wrong"});

    let data = {
      body: req.body.novel.entry,
      author: req.user._id,
      wordCount: req.body.novel.wordCount
    };

    novel.entries.addToSet(data);

    novel.save((err, novel) => {
      if (err) return res.status(500).json({ message: "Something went wrong"});
      return res.status(201).json({ novel });
    });

    return res.status(200).json({ novel });
  });
}

function novelsShow( req, res ) {
  Novel.findById(req.params.id)
  .populate('creator')
  .populate('entries.author')
  .populate('comments.author')
  .exec((err, novel) => {
    if(err) return res.status(500).json({ message: "Something went wrong"});
    return res.status(200).json({ novel });
  });
}

function novelsUpdate( req, res ) {
  Novel.findByIdAndUpdate(req.params.id, { status: req.body.status }, (err, novel) => {
    if(err) return res.status(500).json({ message: "Something went wrong"});
    if(!novel) return res.status(404).json({ message: "Novel not found"});
    return res.status(200).json({ novel });
  });
}

function novelsDelete( req, res ) {
  Novel.findByIdAndRemove(req.params.id, (err, novel) => {
    if(err) return res.status(500).json({ message: "Something went wrong"});
    return res.status(204).send();
  });
}

function novelsAddEntry(req, res) {
  Novel.findById(req.params.id, (err, novel) => {
    if (err) return res.status(500).json({ message: "Something went wrong"});
    if (!novel) return res.status(404).json({ message: "Novel not found"});

    let data = {
      body: req.body.entry,
      author: req.user._id,
      wordCount: req.body.wordCount
    };

    novel.entries.addToSet(data);

    novel.save((err, novel) => {
      if (err) return res.status(500).json({ message: "Something went wrong"});
      return res.status(201).json({ novel });
    });
  });
}

function novelsAddComment(req, res) {
  Novel.findById(req.params.id, (err, novel) => {
    if (err) return res.status(500).json({ message: "Something went wrong"});
    if (!novel) return res.status(404).json({ message: "Novel not found"});
    novel.comments.addToSet({
      body: req.body.comment,
      author: req.user._id
    });

    novel.save((err, novel) => {
      if (err) return res.status(500).json({ message: "Something went wrong"});
      return res.status(201).json({ novel });
    });
  });
}
