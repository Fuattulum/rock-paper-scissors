let Hand = 0
input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (Hand == 2) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
