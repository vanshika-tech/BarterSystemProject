const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { uuid } = require("uuidv4");
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

router.post("/", upload.single("file"), (req, res) => {
  try {
    
    res.status(400).send("ok");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/", async (req, res) => {
  console.log("***GET TEST***");
  res.render("upload");
});

module.exports = router;
