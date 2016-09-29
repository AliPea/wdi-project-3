const express    = require("express");
const morgan     = require("morgan");
const bodyParser = require("body-parser");
const cors       = require("cors");
const mongoose   = require("mongoose");
const expressJWT = require("express-jwt");

const app        = express();
const config     = require("./config/config");
const router     = require("./config/routes");

mongoose.connect(config.db);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(cors());

app.use("/api", expressJWT({ secret: config.secret })
  .unless({
    path: [
      { url: "/api/register", methods: ["POST"] },
      { url: "/api/login",    methods: ["POST"] },
    ]
  }));
app.use(jwtErrorHandler);

function jwtErrorHandler(err, req, res, next){
  if (err.name !== "UnauthorizedError") return next();
  return res.status(401).json({ message: "Unauthorized request." });
}

app.use("/api", router);
app.get("/*", (req, res) =>  res.sendFile(__dirname + "/index.html"));

app.listen(config.port, () => console.log(`Express started on port: ${config.port}`));
