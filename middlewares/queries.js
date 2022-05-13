const connection = require("../services/connection");


module.exports.ingatlanList = function (callback) {
    myQuery = `SELECT ingatlanok._id, kategoriak.nev AS "kategoria", ingatlanok.leiras, DATE_FORMAT(ingatlanok.hirdetesDatuma, "%Y-%m-%d") AS hirdetesDatuma, IF(tehermentes, 'true', 'false') AS "tehermentes", ingatlanok.ar, ingatlanok.kepUrl FROM ingatlanok LEFT JOIN kategoriak ON ingatlanok._id = kategoriak.id`;
    connection.query(myQuery, (err, result, fields) => {
      if (err) callback(err, null);
      else {
        callback(null, JSON.parse(JSON.stringify(result)));
      }
    });
  };

  module.exports.addIngatlan = function (data, callback) {
    myQuery = `INSERT INTO ingatlanok (_id, kategoria, leiras, hirdetesDatuma, tehermentes, ar, kepUrl) VALUES ('${data._id}','${data.kategoria}','${data.leiras}','${data.hirdetesDatuma}','${data.tehermentes}','${data.ar}','${data.kepUrl}')`;
    connection.query(myQuery, (err, result, fields) => {
      if (err) callback(err.sqlMessage, null);
      else {
        callback(null, JSON.parse(JSON.stringify(result)));
      }
    });
  };

  module.exports.delIngatlan = function (_id, callback) {
    myQuery = `DELETE FROM ingatlanok WHERE _id = '${_id}'`;
    connection.query(myQuery, (err, result, fields) => {
      if (err) callback(err, null);
      else {
        callback(null, JSON.parse(JSON.stringify(result)));
      }
    });
  };