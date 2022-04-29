const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
var cors = require("cors");
const Headers = require("./Utils/Middelwares/headers");
const errorHandler = require("./Utils/Middelwares/headers");

require("./db.js");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({extended: true, limit: "50mb"}));
server.use(bodyParser.json({limit: "50mb"}));
server.use(cookieParser());
server.use(morgan("dev"));

server.use(Headers);

server.use(cors());
server.use("/", routes);

// Error catching endware.
server.use(errorHandler);

module.exports = server;
