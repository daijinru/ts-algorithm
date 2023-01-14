
function rec(n: number, drinks: number): any {
  if (n < 3) {
    if (n == 2) {
      drinks ++
    }
    return {
      drinks,
      botts: n,
    }
  }
  if (n % 3 === 0) {
    let canDrink = n / 3
    drinks += canDrink
    return rec(canDrink, drinks)
  } else {
    let canDrink = Math.floor(n / 3)
    drinks += canDrink
    return rec(canDrink + (n % 3), drinks)
  }
}

console.info(rec(10, 0))