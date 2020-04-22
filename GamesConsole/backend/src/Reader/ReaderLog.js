const fs = require('fs');
const config = require('../../config');

class ReaderLog {

  constructor() {
  }

  doReadFile() {
    return new Promise((resolve, reject) => {
      fs.readFile(config.logFileName, function (err, logData) {
        if (err) {
          reject(err);
        }
        else {
          resolve(logData.toString());
        }
      })
    }).catch((err) => {
      return {
        error: "500",
        message: err.message
      };
    });
  }
}

exports.ReaderLog = ReaderLog