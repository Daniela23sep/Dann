input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.showString("G R A C I A S ")
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(349, music.beat(BeatFraction.Sixteenth))
    basic.showString("G E L !")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
