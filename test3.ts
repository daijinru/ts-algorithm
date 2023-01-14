function rmLess(str: string): string {
  if (!str) return ''

  // 记录最少字符的次数
  let count = 0
  // 记录最少字符数组
  let lessStrArr: string[] = []
  // 记录所有字符出现次数的 map
  let map = {}
  
  for (let i = 0; i < str.length; i++) {
      if (!map[str.charAt(i)]) {
          map[str.charAt(i)] = 1
      } else {
          map[str.charAt(i)] ++
      }
  }

  // 转数组并倒序
  const sortedArr = Object.keys(map).sort((a, b) => {
      return map[b] - map[a]
  })

  // 从尾遍历数组，如果倒数第一个的次数小于倒数第二个，中断遍历并返回倒数第一个
  // 否则返回多个字符并添加到到 lessStrArr
  count = map[sortedArr[sortedArr.length - 1]]

  for (let i = sortedArr.length - 1; i >= 0; i--) {
    if (map[sortedArr[i]] === count) {
      lessStrArr.push(sortedArr[i])
    } else {
      break
    }
  }

  // 删除
  lessStrArr.forEach(ka => {
    str = str.replace(new RegExp(ka), '')
  })
  return str
}

console.info(rmLess('aabcdd'))
