// every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。   若收到一个空数组，此方法在一切情况下都会返回 true。
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every


// 从这个例子可以发现  只要出现了为false的  就直接跳出循环了
// 注意  这四种方法都有类似的表现  every()  some() find() findIndex
function isBigEnough(element, index, array) {
  console.log('element', element);
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
