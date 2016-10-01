const mongoose  = require("mongoose");
const config    = require("../config/config");

const Novel     = require("../models/novel");
const User      = require("../models/user");

mongoose.connect(config.db);

Novel.collection.drop();

const novels = [{
  title:      "Test Novel One",
  image:      "http://fillmurray.com/400/200",
  entries:    [{body: "Hi, I'm the first entry!"},
               {body: "Hi, I'm the second entry!"}]
},{
  title:      "Test Novel Two",
  image:      "http://fillmurray.com/400/200",
  entries:    [{body: "Hi, I'm the first entry!"}]
},{
  title:      "Test Novel Three",
  image:      "http://fillmurray.com/400/200",
  entries:    [{body: "Hi, I'm the first entry!"}]
},{
  title:      "Test Novel Four",
  image:      "http://fillmurray.com/400/200",
  entries:    [{body: "Hi, I'm the first entry!"}]
}
];

novels.forEach(novel => Novel.create(novel, (err, novel) => {
  if(err) return console.log(err);
  return console.log(`${novel.title} was created`);
}));
