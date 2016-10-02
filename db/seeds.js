const mongoose  = require("mongoose");
const config    = require("../config/config");

const Novel     = require("../models/novel");
const User      = require("../models/user");

mongoose.connect(config.db);

Novel.collection.drop();

let user = {
  _id: "57ee603e058110c915c61e51"
};

const novels = [{
  title:      "Test Novel One",
  image:      "../images/image1.jpeg",
  entries:    [{author: '57ee603e058110c915c61e51',
    body: "Hi, I'm the first entry!"},
               { author: '57ee603e058110c915c61e51', body: "Hi, I'm the second entry!"}]
},{
  title:      "Test Novel Two",
  image:      "../images/image2.jpeg",
  entries:    [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm the first entry!" }],
  comments:   [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm a comment!" }]
},{
  title:      "Test Novel Three",
  image:      "../images/image3.jpeg",
  entries:    [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm the first entry!"}]
},{
  title:      "Test Novel Four",
  image:      "../images/image4.jpeg",
  entries:    [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm the first entry!"}]
},{
  title:      "Test Novel Five",
  image:      "../images/image5.jpeg",
  entries:    [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm the first entry!" }],
  comments:   [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm a comment!" }]
},{
  title:      "Test Novel Six",
  image:      "../images/image6.jpeg",
  entries:    [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm the first entry!" }],
  comments:   [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm a comment!" }]
},{
  title:      "Test Novel Seven",
  image:      "../images/image7.jpeg",
  entries:    [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm the first entry!" }],
  comments:   [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm a comment!" }]
},{
  title:      "Test Novel Eight",
  image:      "../images/image8.jpeg",
  entries:    [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm the first entry!" }],
  comments:   [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm a comment!" }]
},{
  title:      "Test Novel Nine",
  image:      "../images/image9.jpeg",
  entries:    [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm the first entry!" }],
  comments:   [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm a comment!" }]
}
];

novels.forEach(novel => Novel.create(novel, (err, novel) => {
  if(err) return console.log(err);
  return console.log(`${novel.title} was created`);
}));
