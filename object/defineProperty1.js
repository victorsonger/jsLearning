// 3种基础的defineProperty方法
var obj = {};
// 1 使用 __proto__
var descriptor = Object.create(null); // 没有继承的属性
// 默认没有 enumerable，没有 configurable，没有 writable
console.log('descriptor', descriptor);
descriptor.value = 'static';
descriptor.enumerable = true; // 如果不配置enumerable的话，是无法在打印obj的时候展现出来key属性的（虽然可以获取到obj.key）
Object.defineProperty(obj, 'key', descriptor);
console.log('obj', obj);
console.log('obj.key', obj.key);

// 2 显式
// Object.defineProperty(obj, "key", {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   value: "static"
// });
// console.log('obj', obj);
// console.log('obj.key', obj.key);

// 3 循环使用同一对象
// function withValue(value) {
//   var d = withValue.d || (
//     withValue.d = {
//       enumerable: false,
//       writable: false,
//       configurable: false,
//       value: null
//     }
//   );
//   d.value = value;
//   return d;
// }
// // ... 并且 ...
// Object.defineProperty(obj, "key", withValue("static"));

// console.log('obj', obj);
// console.log('obj.key', obj.key);