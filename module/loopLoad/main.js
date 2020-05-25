// 模块循环加载
console.log('main.js ', require('./a.js').x);
console.log('main.js ', require('./b.js').x);