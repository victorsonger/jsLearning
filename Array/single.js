// 一个数组去重的算法  去重的同时，不改变数组对象的内存地址


const isSame = (arr, obj) => {
  console.log('isSame Start');
  let same = false;
  same = arr.findIndex((arrItem) => {
    if (Object.is(arrItem, obj)) {
      return true;
    }
  }) !== -1;

  console.log('same--', same);
  return same;
}

const singlefy = (arr) => {
  let alreadyItem = [];
  let toBeDeleteIndex;

  for (let i = 0; i < arr.length; i++) {
    if (isSame(alreadyItem, arr[i])) {
      console.log('有重复的项目：', arr[i]);
      toBeDeleteIndex = i;
    } else {
      toBeDeleteIndex = null;
      alreadyItem.push(arr[i]);
    }
    if (toBeDeleteIndex) {
      console.log('要删除的index', toBeDeleteIndex);
      arr.splice(toBeDeleteIndex, 1);
      console.log('被删除后的arr', arr);
      // 循环指针要前移一位  不然arr[i+1]就会变成实际上的arr[i+2]了
      i = i - 1;
    }
  }
}


const test = 111;
const sameObj = {
  a: 'dadad'
}
let oriArr = [2, 2, {a: 'a'}, 'dada', ['sad'], 2, 'dada', {a: 'a'}, {b: 'b'}, sameObj, [test], [111], sameObj];
singlefy(oriArr);
console.log('oriArr', oriArr);