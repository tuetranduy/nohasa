"use strict";
var winston = require("winston");
require("winston-daily-rotate-file");
winston.emitErrs = true;

var timeFormat = function () {
  var date = new Date();

  var hour = date.getUTCHours();
  hour = (hour < 10 ? "0" : "") + hour;

  var min = date.getUTCMinutes();
  min = (min < 10 ? "0" : "") + min;

  var sec = date.getUTCSeconds();
  sec = (sec < 10 ? "0" : "") + sec;

  var year = date.getUTCFullYear();

  var month = date.getUTCMonth() + 1;
  month = (month < 10 ? "0" : "") + month;

  var day = date.getUTCDate();
  day = (day < 10 ? "0" : "") + day;

  var millisecond = date.getUTCMilliseconds();

  return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec + "." + millisecond;

}

var transport = new(winston.transports.DailyRotateFile)({
  handleExceptions: true,
  json: true,
  colorize: true,
  filename: "./logs/%DATE%.log",
  datePattern: "YYYY-MM-DD-HH",
  timestamp: timeFormat,
  formatter: function (options) {
    // Return string will be passed to logger.
    return options.timestamp() + " " + options.level.toUpperCase() + " " + (undefined !== options.message ? options.message : "") +
      (options.meta && Object.keys(options.meta).length ? "\n\t" + JSON.stringify(options.meta) : "");
  }
});

transport.on("rotate", function (oldFilename, newFilename) {});

var logger = new winston.Logger({
  transports: [
    transport
  ],
  exitOnError: false
});

module.exports = logger