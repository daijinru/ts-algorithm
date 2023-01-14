function triangle(input: number): number[][] {
  let tri: number[][] = []

  // tri[0][0] = 1
  // tri[1][0] = 2
  // tri[0][1] = 3

  let interval = 0
  
  let columnInterval = 2
  
  for (let i = 0; i < input; i++) {
    if (!tri[i]) tri[i] = []

      tri[i][0] = ((tri[i - 1] && tri[i - 1][0]) || 1) + interval

      interval += 1
      console.info(interval, tri[i][0], i)
      
      let interval2 = columnInterval
      for (let j = 1; j < input; j++) {

        tri[i][j] = tri[i][j - 1] + interval2
        
        interval2 ++
      }

      columnInterval ++
      
  }

  return tri
}

console.info(triangle(4))

