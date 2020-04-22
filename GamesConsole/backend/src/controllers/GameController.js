const libReader = require('../Reader/ReaderLog');
const libParser = require('../Reader/Kills');

module.exports.getLog = (app, req, res) => {

  return new Promise((resolve, reject) => {

    let reader = new libReader.ReaderLog();
    reader.doReadFile().then((log) => {
      if (log.error) {
        reject(log)
      }
      else {
        let parser = new libParser.LogParser();
        parser.doParse(log).then((logObject) => {
          resolve(res.send(logObject));
        }).catch((err) => reject(err));
      }
    });

  }).catch((err) => res.send(err));
}