/**
 * 
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
 * JavaScript中的 Object 是构造函数（创建对象的包装器）。
一般用法是：
var obj = new Object();

所以：
Object.getPrototypeOf( Object );               // ƒ () { [native code] }
Object.getPrototypeOf( Function );             // ƒ () { [native code] }

Object.getPrototypeOf( Object ) === Function.prototype;        // true

Object.getPrototypeOf( Object )是把Object这一构造函数看作对象，
返回的当然是函数对象的原型，也就是 Function.prototype。

正确的方法是，Object.prototype是构造出来的对象的原型。
var obj = new Object();
Object.prototype === Object.getPrototypeOf( obj );              // true

Object.prototype === Object.getPrototypeOf( {} );               // true
 */

const obj1 = {a: 1, b: 2};
const getpo = Object.getPrototypeOf(obj1);
console.log(getpo);
console.log('getpo === Object.prototype', getpo === Object.prototype);
const copy = Object.create(getpo);
console.log(copy);