const winston = require("winston");
const winstonRotator = require("winston-daily-rotate-file");

var options = {
  file: {
    level: 'info',
    name: 'file.info',
    filename: `./logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 100,
    colorize: true,
  },
  errorFile: {
    level: 'error',
    name: 'file.error',
    filename: `./logs/error.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 100,
    colorize: true,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};


// your centralized logger object
let logger = new(winston.Logger)({
  transports: [
    new(winston.transports.Console)(options.console),
    new(winston.transports.File)(options.errorFile),
    new(winston.transports.File)(options.file)
  ],
  exitOnError: false, // do not exit on handled exceptions
});

module.exports = logger;