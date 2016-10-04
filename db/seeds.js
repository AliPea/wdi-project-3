const mongoose  = require("mongoose");
const config    = require("../config/config");
const Novel     = require("../models/novel");
const User      = require("../models/user");

mongoose.connect(config.db);

Novel.collection.drop();
User.collection.drop();

let user = {
  username: "Admin",
  email:  "admin@admin.com",
  password: "password",
  passwordConfirmation: "password",
};

let adminId = "";

User.create(user, (err, user) => {
  if(err) return console.log(err);
  adminId = user._id;
  return console.log(`${user} was created`);
});

const novels = [{
  title:      "The Pilgrim’s Progress",
  image:      "../images/image3.jpeg",
  entries:    [
    {
      author: adminId,
      body: "A story of a man in search of truth told with the simple clarity and beauty of Bunyan’s prose make this the ultimate English classic.",
      wordCount: 25
    },{
      author: adminId,
      body: "Christian is weighed down by a great burden—the knowledge of his sin—which he believed came from his reading the book in his hand the Bible",
      wordCount: 27
    }
  ],
},

{
  title:      "Robinson Crusoe",
  image:      "../images/image2.jpeg",
  entries:    [
    {
      author: adminId,
      body: "By the end of the 19th century, no book in English literary history had enjoyed more editions, spin-offs and translations.",
      wordCount: 20
    }
  ],
  comments:   [
    {
      author: adminId,
      body: "Crusoe’s world-famous novel is a complex literary confection, and it’s irresistible." ,
    }
  ],
},{
  title:      "Emma",
  image:      "../images/image1.jpeg",
  entries:    [
    {
      author: adminId,
      body: "The book begins with a preamble in which Lemuel Gulliver gives an outline of his life and history before his voyages",
      wordCount: 116
    }
  ]
},{
  title:      "Tom Jones",
  image:      "../images/image4.jpeg",
  entries:    [
    {
      author: adminId,
      body: "The distinguished country gentleman Allworthy, who lives in Somersetshire with his unmarried sister Bridget Allworthy...",
      wordCount: 120
    }
  ]
},{
  title:      "Clarissa",
  image:      "../images/image5.jpeg",
  entries:    [
    {
      author: adminId,
      body: "Clarissa Harlowe is a beautiful and virtuous young lady whose family has become wealthy and now desires to become part of the aristocracy." ,
      wordCount: 138
    }
  ],
  comments:   [
    {
      author: adminId,
      body: "Hi, I'm a comment!",
    }
  ]
},{
  title:      "Frankenstein",
  image:      "../images/image6.jpeg",
  entries:    [
    {
      author: adminId,
      body: "Hi, I'm the first entry!",
      wordCount: 4
    }
  ],
  comments:   [
    {
      author: adminId,
      body: "Hi, I'm a comment!"
    }
  ]
},{
  title:      "Nightmare Abbey",
  image:      "../images/image7.jpeg",
  entries:    [
    {
      author: adminId,
      body: "Hi, I'm the first entry!",
      wordCount: 2
    }
  ],
  comments:   [{ author: adminId, body: "Hi, I'm a comment!" }]
},{
  title:      "The Narrative of Arthur Gordon Pym of Nantucket",
  image:      "../images/image8.jpeg",
  entries:    [
    {
      author: adminId,
      body: "Hi, I'm the first entry!",
      wordCount: 1
    }
  ],
  comments:   [{ author: adminId, body: "Hi, I'm a comment!" }]
},{
  title:      "Sybil",
  image:      "../images/image9.jpeg",
  entries:    [
    {
      author: adminId,
      body: "Hi, I'm the first entry!",
      wordCount: 5
    }
  ],
  comments:   [{ author: adminId, body: "Hi, I'm a comment!" }]
}
];

novels.forEach(novel => Novel.create(novel, (err, novel) => {
  if(err) return console.log(err);
  return console.log(`${novel.title} was created`);
}));
