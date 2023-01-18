// 杨辉三角变形，通过生成三角形数据找出目标值。
// 实际上杨辉三角存在规律，但是用其出题不太妥当。

function triangle(input: number): number[] {
  // 初始化
  const last: number[] = [1];
  let len: number = 3;
  return recu(last, len, input - 1);

  function recu(lastArr: number[], len: number, index: number): number[] {
    if (index === 0) return lastArr;
    let cache: number[] = [];
    for (let i = 0; i < len; i ++) {
      cache[i] = (lastArr[i - 2] || 0)
      + (lastArr[i - 1] || 0)
      + (lastArr[i] || 0);
    }
    len += 2;
    index --;
    return recu(cache, len, index);
  }
}


function println(input: number): void {
  const arr = triangle(input);
  let res = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      res = i + 1;
      break;
    }
  }
  console.info(res);
}

console.info(println(4))
