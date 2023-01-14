
function rabbits(input: number): number {

  // rem[0] 成熟期(繁殖中)
  // rem[1] 生长期
  // rem[2] 新生兔子
  // 从 rem[2] 每个月向左侧迁移到 rem[0]
  let rem: number[] = [0, 0, 1]

  for (let i = 1; i <= input; i++ ) {
      if (i > 1) {
        rem[0] = rem[0] + rem[1]
        rem[1] = 0
  
        rem[1] = rem[1] + rem[2]
        rem[2] = 0
  
        if (rem[0] > 0) {
            // 新生
            rem[2] = rem[0] + rem[2]
        }
      }

  }
  console.info(rem)
  return rem[0] + rem[1] + rem[2]
}

console.info(rabbits(26))