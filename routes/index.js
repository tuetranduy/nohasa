var express = require("express");
var router = express.Router();
var axios = require("axios");
var config = require("../common/config")

/* GET home page. */
router.get("/", function (req, res) {

  // res.clearCookie("token")

  res.render("screens/index", {
    title: "Home Page"
  });

});

module.exports = router;