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
  image: "../images/alfredo.jpg",
  email:  "alfredo@alfredo.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "Alicia",
  firstName: "Alicia",
  lastName: "Pearse",
  image: "../images/alicia.jpg",
  email:  "alicia@alicia.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "Sam",
  firstName: "Sam",
  lastName: "Younger",
  image: "../images/sam.jpg",
  email:  "sam@sam.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "Ajay",
  firstName: "Ajay",
  lastName: "Lard",
  image: "../images/ajay.jpg",
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
  creator:    seed[1],
  title:      "The grass",
  image:      "../images/1.jpeg",
},{
  creator:    seed[2],
  title:      "The sunset",
  image:      "../images/2.jpeg",
},{
  creator:    seed[3],
  title:      "The stars",
  image:      "../images/3.jpeg",
},{
  creator:    seed[0],
  title:      "The woods",
  image:      "../images/4.jpeg",
},{
  creator:    seed[1],
  title:      "The panorama",
  image:      "../images/5.jpeg"
},{
  creator:    seed[2],
  title:      "The fire-guy",
  image:      "../images/6.jpeg",
},{
  creator:    seed[3],
  title:      "The sky",
  image:      "../images/7.jpeg",
},{
  creator:    seed[2],
  title:      "The children",
  image:      "../images/8.jpeg",
},{
  creator:    seed[2],
  title:      "The fog",
  image:      "../images/9.jpeg",
},{
  creator:    seed[3],
  title:      "The friends",
  image:      "../images/10.jpeg",
},{
  creator:    seed[0],
  title:      "The lovers",
  image:      "../images/11.jpeg",
},{
  creator:    seed[0],
  title:      "The deers",
  image:      "../images/12.jpeg",
},{
  creator:    seed[2],
  title:      "The car",
  image:      "../images/13.jpeg",
},{
  creator:    seed[0],
  title:      "The rain",
  image:      "../images/14.jpeg",
}, {
  creator:    seed[1],
  title:      "The DJ",
  image:      "../images/15.jpeg",
  entries:    [
    {
      author: seed[0],
      body: "Facete impetus has at, has ex movet accusata. Quas vidisse facilisis per at, eu tantas malorum nostrud vim. Eum congue deseruisse et, in mel assum regione. Per ut agam labitur, ei mediocrem posidonium percipitur nec, has labores necessitatibus ex. Sit nostro noluisse delectus ut, no mei eleifend qualisque, quas falli eos ex. Illum mazim volutpat ut vis, qui congue nominati eu. Ea eum modus veniam phaedrum, nec amet eloquentiam ex.",
      wordCount: 100
    },{
      author: seed[1],
      body: "Facete impetus has at, has ex movet accusata. Quas vidisse facilisis per at, eu tantas malorum nostrud vim. Eum congue deseruisse et, in mel assum regione. Per ut agam labitur, ei mediocrem posidonium percipitur nec, has labores necessitatibus ex. Sit nostro noluisse delectus ut, no mei eleifend qualisque, quas falli eos ex. Illum mazim volutpat ut vis, qui congue nominati eu. Ea eum modus veniam phaedrum, nec amet eloquentiam ex.",
      wordCount: 100
    }, {
      author: seed[2],
      body: "Facete impetus has at, has ex movet accusata. Quas vidisse facilisis per at, eu tantas malorum nostrud vim. Eum congue deseruisse et, in mel assum regione. Per ut agam labitur, ei mediocrem posidonium percipitur nec, has labores necessitatibus ex. Sit nostro noluisse delectus ut, no mei eleifend qualisque, quas falli eos ex. Illum mazim volutpat ut vis, qui congue nominati eu. Ea eum modus veniam phaedrum, nec amet eloquentiam ex.",
      wordCount: 100
    }
  ],
  comments:   [
    {
      author: seed[1],
      body: "Cool story bro!!" ,
    } , {
      author: seed[2],
      body: "Yep, definitely!"
    }, {
      author: seed[4],
      body: "Hi mom!!" ,
    } , {
      author: seed[3],
      body: "coolio!"
    }
  ]
}
];
novels.forEach(novel => Novel.create(novel, (err, novel) => {
  if(err) return console.log(err);
  return console.log(`${novel.title} was created`);
}));
}, 1000);
}, 1000);
