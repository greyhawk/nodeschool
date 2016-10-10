const filter = require('./filter-dir');

/* eslint-disable no-console */
filter(process.argv[2], process.argv[3], (error, data) => {
  if (error) console.error(error);
  data.forEach(item => console.log(item));
});
