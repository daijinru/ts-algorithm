function run(answers: string[], targets: string[]): string[] {
  const res: string[] = []
  answers.forEach(answer => {
      targets.forEach(target => {
          if (isSame(norepeat(answer), norepeat(target))) {
              res.push(answer)
          }
      })
  })
  return res
}

function isSame(a: string, b: string): boolean {
  const aMap: Record<string, number> = a.split('').reduce((acc, curr) => {
    // @ts-ignore
    acc[curr] = 1
    return acc
  }, {})
  for (let i = 0; i < b.length; i++) {
      if (!aMap[b.charAt(i)]) return false
  }
  return true
}

function norepeat(str: string): string {
  return Array.from(new Set(str.split(''))).join('')
}

console.info(run(['connection', 'today',], ['conection']))