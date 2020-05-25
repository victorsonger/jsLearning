/**
 * 下面通过一个例子来说明生成器在框架和第三方库中的使用。Babel 是一个流行的 JavaScript 编译工具，可以把使用了最新规范的 JavaScript 代码转换成可以在今天的平台上运行的代码。async/await 是一个实用的新特性。为了在老的平台上支持这一特性，Babel 提供了一个插件来把使用了 async/await 的代码转换成使用生成器。代码清单 18 中给出了一个使用 async/await 的简单函数。
 * 
 * 
async function foo() {
  await bar();
}


上述代码经过 Babel 转换之后的结果如代码清单 19 所示。首先，async 函数被转换成生成器函数，而 await 被转换成 yield 表达式。接着通过函数_asyncToGenerator 把生成器函数转换成一个返回 Promise 的普通函数。
 */

// 19
let foo = (() => {
  var _ref = _asyncToGenerator(function* () {
    yield bar();
  });

  return function foo() {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg); 
          var value = info.value;
        } 
        catch (error) { 
          reject(error); 
          return; 
        } 
        if (info.done) { 
          resolve(value); 
        } else {
          return Promise.resolve(value)
            .then(
              function (value) { 
                    step("next", value); 
              },
              function (err) { step("throw", err); }
            );
        }
      }
      return step("next");
    });
  };
}