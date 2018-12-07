var express = require("express");
var router = express.Router();
var axios = require("axios");
var config = require("../config/config")
var _ = require('lodash');

function getProducts() {
  return axios.get(config.application.API_URL + `getAllProduct`)
    .then(response => {
      console.log(response.data.data)
      return response.data.data
    }).catch(function (error) {
      console.log("Error: " + error)
    })
}

/* GET home page. */
router.get("/", function (req, res) {

  // res.clearCookie("token")

  getProducts(req).then((data) => {

    res.render("screens/index", {
      title: "Home Page",
      products: data
    });

  })

});

module.exports = router;