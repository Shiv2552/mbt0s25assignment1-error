let switch1 = 0
let S2 = 0
basic.forever(function () {
    switch1 = pins.digitalReadPin(DigitalPin.P11)
    S2 = pins.digitalReadPin(DigitalPin.P5)
    if (switch1 == 1 && S2 == 0) {
        basic.showIcon(IconNames.Heart)
    } else if (switch1 == 0 && S2 == 1) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.clearScreen()
    }
})
