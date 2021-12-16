function 重置 () {
    let list: number[] = []
    状态 = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    目标点 = [randint(0, 4), randint(0, 4)]
    led.plot(list[0], list[1])
}
let 目标点: number[] = []
let 状态 = 0
重置()
basic.forever(function () {
    if (状态 == 0) {
    	
    } else {
        重置()
    }
})
