const envConfig = require("./env.config");

const env = process.env.ENV || "development";

module.exports = Object.freeze({
  application: {
    API_URL: envConfig[env].API_URL,
    SECRET_KEY: envConfig[env].SECRET_KEY
  }
})