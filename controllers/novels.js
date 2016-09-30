module.exports = {
  index: novelsIndex

  
};

const Novel = require('../models/novel');

function novelsIndex (req, res) {
  Novel.find((err, novels) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    return res.status(200).json({novels});
  });
}
