controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1 + 0)
})
info.onScore(2, function () {
    tiles.setCurrentTilemap(tilemap`level2`)
})
info.onScore(1, function () {
    tiles.setCurrentTilemap(tilemap`level6`)
})
info.onScore(3, function () {
    info.setScore(0)
})
let mySprite: Sprite = null
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
