//สำหรับ run application หลัก สำหรับ Run

const express = require(`express`);
const chalk = require(`chalk`);
const debug = require(`debug`)(`app`);
const morgan = require(`morgan`);
const path = require(`path`);
const contactRouter = require(`./src/router/contactRouter`);
const { get } = require("http");
// เข้าถึง path ต่างๆ
const app = express();
const port = process.env.PORT || 2000 || 3000 || 4000 || 5000;

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
  res.render(`index`, {
    username: "Hut",
    customer: ["Tatcha", "Korn", "Chom"],
  });
});

app.listen(port, () => {
  debug("Listening on Port :" + chalk.red(port));
});
