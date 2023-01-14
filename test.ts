function isNumber(obj: any): boolean {
    return typeof obj === 'number' && !isNaN(obj)
}

function isIdentity(str: string): boolean {
    return str === 'A' || str === 'D' || str === 'W' || str === 'S'
}

function move(input: string): number[] {
    const original = [0, 0]
    let movement = ''
    for (let i = 0; i < input.length; i++) {
        const str = input.charAt(i)

        // 当遇到 方向标识 leftPtr 更新到该字符的位置
        // rightPtr 从 leftPtr + 1 开始前进，必须是数字才能加入到 movement
        // 当 rightPtr 再次遇到 方向标识 则更新 leftPtr，并清空 movement
        // 当 rightPtr 遇到 ; 时如果 movement 为空则不操作
        console.info(str, movement)
        if (isIdentity(str)) {
            movement += str
            continue
        }
        if (isNumber(Number(str))) {
            movement += str
            continue
        }
        if (str === ';' && movement) {
            go(movement)
            movement = ''
            continue
        }
        // 上述条件以外重置
        movement = ''
    }

    return original

    function go(movement: string) {
        const direction = movement.charAt(0)
        const distance = Number(movement.slice(1))
        if (!isNumber(distance)) return
        switch(direction) {
            case 'A':
                original[0] -= distance
                break
            case 'D':
                original[0] += distance
                break
            case 'S':
                original[1] -= distance
                break
            case 'W':
                original[1] += distance
        }
    }
}

console.info(move('A10;S20;W10;D30;X;A1A;B10A11;;A10;').join(','))