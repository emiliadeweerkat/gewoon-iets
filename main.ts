input.onButtonPressed(Button.A, function () {
	
})
let poep = 0
music.setVolume(0)
basic.forever(function () {
    poep = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(poep)
    music.playTone(poep, music.beat(BeatFraction.Whole))
})
