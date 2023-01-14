function statis(input: string): number[] {
  const rem: number[] = [0, 0, 0, 0]

  let n = input.length - 1

  console.info(input.length)

  while (n > -1) {
      const str = input.charAt(n)
      console.info(str)
      if (/[A-Za-z]/.test(str)) {
          rem[0] ++
      } else if (escape(str).indexOf("%u") >= 0) {
          rem[0] ++
      } else if (/\s/.test(str)) {
          rem[1] ++
      } else if (/\d/.test(String(str))) {
          rem[2] ++
      } else {
          rem[3] ++
      }
      n--
  }

  return rem
}

console.info(statis("1qazxsw23 edcvfr45tgbn hy67uj m,ki89ol.\\/;p0-=\\]["))