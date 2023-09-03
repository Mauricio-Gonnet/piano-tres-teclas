basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.clearScreen()
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.showIcon(IconNames.Heart)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.clearScreen()
        music.playTone(294, music.beat(BeatFraction.Half))
        basic.showIcon(IconNames.Duck)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        basic.clearScreen()
        music.playTone(330, music.beat(BeatFraction.Half))
        basic.showIcon(IconNames.Skull)
    }
})
