import Utils from '@ragingsnail/utils';
function sum(a, b) {
  return a + b;
}

function foo() {
  console.log('this is foo func');
}

function bar() {
  console.log('this is bar func');
}
console.log('sum: ', sum(1, 2));
console.log('当前时间是： ', Utils.formatTime(new Date()));