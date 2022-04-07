function game2 () {
    game.setLife(1)
    game.setScore(0)
    basic.showLeds(`
        . # . # .
        # # # # #
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . # . # .
        # # # # #
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.showString("vosje")
    basic.showLeds(`
        . # . # .
        # # # # #
        # . # . #
        . # . # .
        . . # . .
        `)
}
input.onButtonPressed(Button.A, function () {
    if (blad_game == 3) {
        basic.showString("eten")
        basic.showLeds(`
            . # . # .
            # # # # #
            # . # . #
            . # . # .
            . . # . .
            `)
        game.addScore(1)
    } else {
        blad += -1
    }
})
input.onGesture(Gesture.Shake, function () {
    stap += 1
    basic.showNumber(stap)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (start == 0) {
        basic.showNumber(game.score())
    } else {
        basic.showNumber(stap)
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (blad_game == 1) {
        blad = 0
        blad_game += 1
        game.pause()
    } else if (blad_game == 2) {
        blad = 0
        blad_game += 1
        game.pause()
    } else if (blad_game == 3) {
        blad = 0
        blad_game += -2
        game.resume()
    }
})
input.onButtonPressed(Button.B, function () {
    if (blad_game == 3) {
        basic.showString("drinken")
        basic.showLeds(`
            . # . # .
            # # # # #
            # . # . #
            . # . # .
            . . # . .
            `)
        game.addScore(1)
    } else {
        blad += 1
    }
})
input.onSound(DetectedSound.Loud, function () {
    basic.showNumber(input.soundLevel())
})
let blad = 0
let stap = 0
let blad_game = 0
let start = 0
start = 1
blad_game = 1
stap = 0
blad = 0
basic.showLeds(`
    . . # . .
    . . # . .
    . . # # .
    . . . . .
    . . . . .
    `)
loops.everyInterval(60000, function () {
    if (start == 0) {
        game.addScore(-1)
    } else if (game.score() == 10) {
        game.gameOver()
    } else if (game.score() == -1) {
        game.gameOver()
    }
})
basic.forever(function () {
    if (blad_game == 2) {
        if (blad == 0) {
            basic.showLeds(`
                . # . # .
                # # # # #
                # . # . #
                . # . # .
                . . # . .
                `)
        } else if (blad == 1) {
            basic.showIcon(IconNames.Ghost)
        } else if (blad == 2) {
            basic.showLeds(`
                . # . # .
                # # # # #
                # . # . #
                # # . # #
                . # # # .
                `)
        } else if (blad == 3) {
            basic.showLeds(`
                . # . # .
                . # # # .
                # . # . #
                # # . # #
                . . # . .
                `)
        } else if (blad == 4) {
            basic.showLeds(`
                . # # # #
                # # # # .
                # # # . .
                # # # # .
                . # # # #
                `)
        } else {
        	
        }
    } else if (blad_game == 1) {
        if (blad == 0) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # # .
                . . . . .
                . . . . .
                `)
        } else if (blad == 1) {
            basic.showArrow(ArrowNames.North)
        } else if (blad == 2) {
            basic.showArrow(input.magneticForce(Dimension.Strength))
        } else if (blad == 3) {
            basic.showNumber(input.temperature())
        }
    } else if (blad_game == 3) {
        if (start == 1) {
            game2()
            start = 0
        }
    }
})
