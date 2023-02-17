//สำหรับ run application หลัก สำหรับ Run

const express = require(`express`);
const contactRoute = express.Router(); //Route1
const contact = require(`../data/contact.json`);
//require object class ของ json มาใช้งาน
//Route2
app.use("/contact", contactRoute); //เก็บ URL ไว้ใน contactRoute เพื่อทำการ Route

//Route3
contactRoute.route("/").get((req, res) => {
    res.render("contact", {
      contact,
  });
  });
  contactRoute.route("/:id").get((req, res) => {
    const id = req.params.id; //เก็บค่า id จาก url
    res.render("contacts", {
      contacts: contact[id],
    });
  });
  module.exports = contactRoute;