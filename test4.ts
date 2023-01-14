function reverse(input: string): string {
  let arr: string[] = []
  let str = ''

  for (let i = 0; i < input.length; i++) {
      if (/[a-zA-Z]/i.test(input.charAt(i))) {
          console.info(input.charAt(i))
          str += input.charAt(i)
      } else {
          if (str) {
              arr.push(str)
              str = ''
          }
      }
  }
  if (str) {
    arr.push(str)
    str = ''
  }

  return arr.reverse().join(' ')
}

console.info(reverse('I am a student'))