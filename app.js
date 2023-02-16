//สำหรับ run application หลัก สำหรับ Run

const express = require(`express`);
const chalk = require(`chalk`);
const debug = require(`debug`)(`app`);
const morgan = require(`morgan`);
const path = require(`path`);
// เข้าถึง path ต่างๆ
const app = express();
const port = process.env.PORT || 2000 || 3000 || 4000 || 5000;

app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
  res.send("Hellos");
});

app.listen(port, () => {
  debug("Listening on Port :" + chalk.red(port));
});
