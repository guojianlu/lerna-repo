const {
  formatTime
} = require('@ragingsnail/utils');

function sum(a, b) {
  return a + b;
}

console.log('sum: ', sum(1, 2));
console.log('当前时间是： ', formatTime(new Date()));
module.exports = {
  sum
};