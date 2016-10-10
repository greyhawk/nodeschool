const fs = require('fs');
const path = require('path');

module.exports = function filter(dir, ext, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);
    const list = files.filter(item => path.extname(item).match(ext));
    return callback(null, list);
  });
};
