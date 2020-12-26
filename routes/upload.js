const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { uuid } = require("uuidv4");
const Item=require("../models/item.js");
//multer setting
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuid() + "-" + Date.now() + path.extname(file.originalname));
  },
});
var upload = multer({
  storage: storage,
});

router.post("/", upload.single("file"),(req, res) => {
  try {
    const {item_name,item_type,item_description,expected_exchange}=req.body;
    console.log("itemname"+ item_name+ " itemtype"+ item_type+ " description"+ item_description+ " exchange"+ expected_exchange);
    const newItem=new Item({
        item_name:item_name,
        item_type:item_type,
        item_description:item_description,
        expected_exchange:expected_exchange
    });
    newItem.save()
    .then((value)=>{
        console.log(value);
    })
    .catch(value=>console.log(value));
    res.status(400).send("ok");
    pathhere = req.file.path;
    res.send({ path: pathhere.slice(8, pathhere.length) });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/", async (req, res) => {
  console.log("***GET TEST***");
  res.render("upload");
});

module.exports = router;
