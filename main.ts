input.onButtonPressed(Button.A, function () {
    basic.showString("Hi")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
basic.showIcon(IconNames.Heart)
