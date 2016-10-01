module.exports = {
  index: novelsIndex,
  create: novelsCreate,
  show: novelsShow,
  update: novelsUpdate,
  delete: novelsDelete
};

const Novel = require('../models/novel');

function novelsIndex (req, res ) {
  Novel.find((err, novels) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    return res.status(200).json({ novels });
  });
}

function novelsCreate( req, res ) {
  Novel.create(req.body.novel, (err, novel) => {
    if(err) return res.status(500).json({ message: "Something went wrong"});
    return res.status(200).json({ novel });
  });
}

function novelsShow( req, res ) {
  Novel.findById(req.params.id)
  .populate('entries.author')
  .exec((err, novel) => {
    if(err) return res.status(500).json({ message: "Something went wrong"});
    return res.status(200).json({ novel });
  });
}

function novelsUpdate( req, res ) {
  Novel.findByIdAndUpdate(req.params.id, req.body.novel, {new: true}, (err, novel) => {
    if(err) return res.status(500).json({ message: "Something went wrong"});
    if(!novel) return res.status(500).json({ message: "Novel not found"});
    return res.status(200).json({ novel });
  });
}

function novelsDelete( req, res ) {
  Novel.findByIdAndRemove(req.params.id, (err, novel) => {
    if(err) return res.status(500).json({ message: "Something went wrong"});
    return res.status(204).send();
  });
}
