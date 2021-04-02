input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (start == 0) {
        basic.showNumber(0)
        start += 1
        tiempo = input.runningTime()
    } else {
        tfinal = Math.floor((input.runningTime() - tiempo) / 1000)
        start = 0
        tiempo = 0
    }
})
let tfinal = 0
let tiempo = 0
let start = 0
start = 0
tiempo = 0
tfinal = 0
basic.forever(function () {
    if (start == 1) {
        basic.showNumber(Math.floor((input.runningTime() - tiempo) / 1000))
    } else {
        basic.showNumber(tfinal)
    }
})
