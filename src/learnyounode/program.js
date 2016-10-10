/* eslint-disable no-console */
const args = process.argv
      .slice(2, process.argv.length)
      .map(item => Number(item))
      .reduce((prev, curr) => prev + curr);
console.log(args);
