
// 定义一个可复用的 函数式编程的Promise链式调用工具
const applyAsync = (acc, val) => acc.then(val);
const composeAsync = (...funcs) => x => funcs.reduce(applyAsync, Promise.resolve('result0'));

const func1 = (input) => new Promise ((resolve, reject) => {
  console.log('执行了func1', '/n');
  resolve(input + 'result1');
})
const func2 = (input) => new Promise ((resolve, reject) => {
  console.log('执行了func2', '/n');
  resolve(input + 'result2');
  // reject('rejected');
})
const func3 = (input) => new Promise ((resolve, reject) => {
  console.log('执行了func3', '/n');
  resolve(input + 'result3');
})
 
const  transformData = composeAsync(func1, func2, func3);

transformData().then((result3) => console.log('结果', result3)).catch(err => {
  console.log('出错了阿西吧', err);
});


