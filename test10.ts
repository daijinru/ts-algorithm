

function cost(matrix: number[][], k: number): number {
  // let count: number = 0
  const marks: number[] = []
  const sons: number[][] = []


  recur(matrix[k - 1], k)


  function recur(m: number[], k: number): void {
    // 查看是否存在互相依赖
    marks.push(k)
    const son: number[] = []

    m.forEach((i, j) => {
      if (i === 1) {
        marks.push(j + 1)
        son.push(j + 1)
        recur(matrix[j], i)
      }
    })

    sons.push(son)
  }

  console.info(marks)
  console.info(sons)
  return Array.from(new Set(marks)).reduce((acc, curr) => {
    acc += matrix[curr - 1][curr - 1]
    return acc
  }, 0)
}

const matrix: number[][] = [[2, 0, 0, 0], [0, 3, 0, 0], [1, 1, 4, 0], [1, 1, 1, 5]]
console.info(cost(matrix, 4))