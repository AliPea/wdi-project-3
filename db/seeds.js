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
  return console.log(`${novel.title} was created`);
}));
