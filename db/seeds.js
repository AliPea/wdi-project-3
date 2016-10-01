const mongoose  = require("mongoose");
const config    = require("../config/config");

const Novel     = require("../models/novel");
const User      = require("../models/user");

Novel.collection.drop();
User.collection.drop();

const novels = [{
  title:      "Test Novel One",
  image:      "http://fillmurray.com/400/200",
  wordCount:  100,
  status:     "active",
},{
  title:      "Test Novel Two",
  image:      "http://fillmurray.com/400/200",
  wordCount:  100,
  status:     "active",
},{
  title:      "Test Novel Three",
  image:      "http://fillmurray.com/400/200",
  wordCount:  100,
  status:     "active",
},{
  title:      "Test Novel Four",
  image:      "http://fillmurray.com/400/200",
  wordCount:  100,
  status:     "active",
}
];

novels.forEach(novel => Novel.create(novel, (err, novel) => {
  if(err) return console.log(err);
  return console.log(`${novel.title} was created`);
}));
