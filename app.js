//สำหรับ run application หลัก สำหรับ Run

const express = require(`express`);
const chalk = require(`chalk`);
const debug = require(`debug`)(`app`);
const morgan = require(`morgan`);
const path = require(`path`);
const contact = require(`./data/contact.json`);
//require object class ของ json มาใช้งาน
const { get } = require("http");
const contactRoute = express.Router(); //Route1
// เข้าถึง path ต่างๆ
const app = express();
const port = process.env.PORT || 2000 || 3000 || 4000 || 5000;

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "/public/")));

//Route2
app.use("/contact", contactRoute);
//Route3
contactRoute.route("/").get((req, res) => {
  res.render("contact", contact);
});
contactRoute.route("/1").get((req, res) => {
  res.send("Hellowww product1");
});
contactRoute.route("/2").get((req, res) => {
  res.send("Hellowww product2");
});

app.get("/", (req, res) => {
  res.render(`index`, {
    username: "Hut",
    customer: ["Tatcha", "Korn", "Chom"],
  });
});

app.listen(port, () => {
  debug("Listening on Port :" + chalk.red(port));
});
