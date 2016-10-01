<<<<<<< HEAD
const mongoose = require("mongoose");
const config   = require("../config/config");
const Novel = require("../models/novel");

mongoose.connect(config.db);

const novels = [
{ title: 'The guy with a lot of problems', image: 'http://fillmurray.com/200/200' },
{ title: 'Kill me now or I\'ll kill you', image: 'http://fillmurray.com/300/300' }
];

Novel.collection.drop();

novels.forEach(novel => Novel.create(novel, (err, novel) => {
  if (err) return console.log(err);
=======
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
>>>>>>> ec909fc599b7dc9da83585bf900a41b40f9b9831
  return console.log(`${novel.title} was created`);
}));
