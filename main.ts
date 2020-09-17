input.onButtonPressed(Button.A, function () {
    PLAYER.move(-1)
})
input.onButtonPressed(Button.B, function () {
    PLAYER.move(1)
})
let PLAYER: game.LedSprite = null
PLAYER = game.createSprite(0, 4)
for (let index = 0; index < 100; index++) {
    music.playMelody("A F E F D G E F ", 400)
}
basic.forever(function () {
    if (true) {
    	
    }
})
