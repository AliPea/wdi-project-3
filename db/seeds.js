const mongoose  = require("mongoose");
const config    = require("../config/config");
const Require   = require("../models/novel");
const Novel     = Require.novel;
const User      = require("../models/user");
mongoose.connect(config.db);
Novel.collection.drop();
User.collection.drop();
setTimeout(()=>{
let users = [{
  username: "Alfredo",
  firstName: "Alfredo Maria",
  lastName: "Milano",
  image: "https://s-media-cache-ak0.pinimg.com/originals/bf/07/e9/bf07e920f55347726bb9d9273cfc8d2c.gif",
  email:  "alfredo@alfredo.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "Alicia",
  firstName: "Alicia",
  lastName: "Pearse",
  image: "https://s-media-cache-ak0.pinimg.com/originals/bf/07/e9/bf07e920f55347726bb9d9273cfc8d2c.gif",
  email:  "alicia@alicia.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "Sam",
  firstName: "Sam",
  lastName: "Younger",
  image: "https://s-media-cache-ak0.pinimg.com/originals/bf/07/e9/bf07e920f55347726bb9d9273cfc8d2c.gif",
  email:  "sam@sam.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "Ajay",
  firstName: "Ajay",
  lastName: "Lard",
  image: "https://s-media-cache-ak0.pinimg.com/originals/bf/07/e9/bf07e920f55347726bb9d9273cfc8d2c.gif",
  email:  "ajay@ajay.com",
  password: "password",
  passwordConfirmation: "password",
}];
let seed = [];
users.forEach(user => User.create(user, (err, user) => {
  if(err) return console.log(err);
  seed.push(user._id);
  return console.log(`${user.username} was created`);
}));
setTimeout(()=>{
const novels = [{
  creator:    seed[0],
  title:      "Test Novel One",
  image:      "../images/image1.jpeg",
  entries:    [
    {
      author: seed[0],
      body: "Hi, I'm the first entry!",
      wordCount: 100
    },{
      author: seed[1],
      body: "Hi, I'm the second entry!",
      wordCount: 100
    }
  ],
  comments:   [
    {
      author: seed[1],
      body: "Cool story bro!!" ,
    }
  ]
}, {
  title:      "Test Novel Two",
  image:      "../images/image2.jpeg",
  entries:    [
    {
      author: '57ee603e058110c915c61e51',
      body: "Hi, I'm the first entry!",
      wordCount: 2
    }
  ],
  comments:   [
    {
      author: '57ee603e058110c915c61e51',
      body: "Hi, I'm a comment!" ,
    }
  ],
},{
  title:      "Test Novel Three",
  image:      "../images/image3.jpeg",
  entries:    [
    {
      author: '57ee603e058110c915c61e51',
      body: "Hi, I'm the first entry!",
      wordCount: 2
    }
  ]
},{
  title:      "Test Novel Four",
  image:      "../images/image4.jpeg",
  entries:    [
    {
      author: '57ee603e058110c915c61e51',
      body: "Hi, I'm the first entry!",
      wordCount: 1
    }
  ]
},{
  title:      "Test Novel Five",
  image:      "../images/image5.jpeg",
  entries:    [
    {
      author: '57ee603e058110c915c61e51',
      body: "Hi, I'm the first entry!" ,
      wordCount: 2
    }
  ],
  comments:   [
    {
      author: '57ee603e058110c915c61e51',
      body: "Hi, I'm a comment!",
    }
  ]
},{
  title:      "Test Novel Six",
  image:      "../images/image6.jpeg",
  entries:    [
    {
      author: '57ee603e058110c915c61e51',
      body: "Hi, I'm the first entry!",
      wordCount: 4
    }
  ],
  comments:   [
    {
      author: '57ee603e058110c915c61e51',
      body: "Hi, I'm a comment!"
    }
  ]
},{
  title:      "Test Novel Seven",
  image:      "../images/image7.jpeg",
  entries:    [
    {
      author: '57ee603e058110c915c61e51',
      body: "Hi, I'm the first entry!",
      wordCount: 2
    }
  ],
  comments:   [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm a comment!" }]
},{
  title:      "Test Novel Eight",
  image:      "../images/image8.jpeg",
  entries:    [
    {
      author: '57ee603e058110c915c61e51',
      body: "Hi, I'm the first entry!",
      wordCount: 1
    }
  ],
  comments:   [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm a comment!" }]
},{
  title:      "Test Novel Nine",
  image:      "../images/image9.jpeg",
  entries:    [
    {
      author: '57ee603e058110c915c61e51',
      body: "Hi, I'm the first entry!",
      wordCount: 5
    }
  ],
  comments:   [{ author: '57ee603e058110c915c61e51', body: "Hi, I'm a comment!" }]
}
];
novels.forEach(novel => Novel.create(novel, (err, novel) => {
  if(err) return console.log(err);
  return console.log(`${novel.title} was created`);
}));
}, 1000);
}, 1000);
