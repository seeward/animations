let mySprite: Sprite = null
scene.setBackgroundColor(9)
forever(function () {
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
    animation.runImageAnimation(
    mySprite,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . 1 1 1 1 1 1 1 . . . . . 
. . . 1 1 1 1 1 1 1 1 1 . . . . 
. . . 1 1 1 1 1 1 1 1 1 . . . . 
. . . 1 1 1 1 1 1 1 1 1 . . . . 
. . . . 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
f f f . . . . . f f . . . . . . 
f . . . . . . . f . . . . . . . 
f . . . . . . . f . . . . . f . 
. . . . . . . . . . 5 2 . . . f 
. . . . 2 . . . . . f 1 2 . . f 
. . . 2 5 . . . . . . . . . . f 
. . . . . . . . . . . . . . . . 
f f . . . . . . . . . . . . . . 
. . . . . . . . . . 5 2 . . . . 
. . . . . 2 1 . . . 2 . . . . . 
. . . . . . 2 5 . f . . . . . f 
. . . . . . . . . . . . . . . f 
. . . . . . . . . f . . . . . . 
f f . . . . . . . f . . . . . . 
. f f . . . . . . . . . . . . f 
. f . . . . . . . . . . . . . f 
`,img`
. . . . . . . . c c . . . . . . 
. c c c . . . . c . . . . . . . 
. c 5 5 . . . . c . . . . 5 c . 
c c 5 5 . . . . . . . 5 5 5 5 c 
c 5 5 . . . . . . . . . . . 5 c 
. 5 . . . . 2 5 2 . . . . . 5 c 
. . . . . 2 5 c 1 2 . . . 5 5 c 
. . . . . 2 1 c 5 2 . . . . . . 
. . . . . . 2 5 2 . . . . c . . 
. . . . . . . . . . . . . c c . 
. c c . . . . . . . . . . . c . 
. . c c . . . . . . . . . . . . 
. . c . . . c 5 . . . . . . . . 
. . . . . . c c . . . 5 c . . . 
. . . . . . c c 5 5 5 5 c . . . 
. . . . . . . c c c c c c . . . 
`,img`
. . . . . . . . f f . . . . . . 
f . . . . . . . f . . . . . . . 
f . . . . . . . . . . . . . f . 
. . . . . . . . . . 5 2 . . . f 
. . . . . . . . . . f 1 2 . . . 
. . . . . . . . . . . . . . . f 
. . . . . . . . . . . . . . . . 
f f . . . . . . . . . . . . . . 
. . . . . . . . . . 5 2 . . . . 
. . . . . 2 1 . . . 2 . . . . . 
. . . . . . 2 5 . f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . f . . . . . . 
. f . . . . . . . . . . . . . . 
. f . . . . . . . . . . . . . f 
. . . . . . . . . . . . . . . f 
`,img`
5 . . . . . . . . . . . . . . 5 
5 5 . . . . . . . . . . . 5 5 . 
5 5 5 . . . . . . . . . 5 5 . . 
. 5 5 5 . . . . . . 5 5 5 . . . 
. 5 1 5 5 . 5 5 5 5 5 5 . . . . 
. 5 1 1 5 5 5 5 5 1 5 . . . . . 
. . 5 1 1 1 5 1 1 1 5 . . . . . 
. . 5 5 5 1 1 1 1 1 5 5 . . . . 
. . . . 5 5 1 1 1 1 5 5 . . . . 
. . . . . 5 1 1 1 1 1 5 . . . . 
. . . . 5 5 1 5 5 5 5 5 . . . . 
. . . . 5 1 1 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 . . 5 5 5 . . 
. . 5 5 5 5 . . . . . . . . . . 
. 5 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
5 . . . . . 5 5 . . . . . 5 5 5 
5 5 . . . . 5 5 . . . 5 5 5 5 . 
5 5 5 . . . 5 5 5 . 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
. 5 5 5 5 5 5 1 5 5 5 5 5 . . . 
. 5 5 5 1 1 1 1 1 1 1 5 5 5 . . 
. 5 5 5 5 1 1 1 1 5 5 5 5 5 . . 
. . 5 5 5 1 1 1 1 1 5 5 5 5 . . 
. 5 5 5 1 1 1 1 1 1 5 5 5 5 5 5 
. 5 5 5 1 1 1 1 1 1 5 5 5 . . . 
5 5 5 5 1 5 1 1 1 1 5 5 5 . . . 
5 5 5 5 5 5 5 5 5 1 1 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 . 5 5 5 5 5 5 5 . . 
. 5 5 5 . . . 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
`,img`
5 5 . . . . . . . . . . . . 5 5 
5 5 5 . . . . . . . . . . 5 5 5 
. 5 5 . . . . . . . . . . 5 . . 
. . 5 . c c c . . . . c c c . . 
. . . c c 4 c c . . c c 4 c . . 
. . c c 4 5 . . . . 5 5 4 4 c . 
. . c 4 5 5 5 . 1 . . 5 5 4 c . 
. . c 4 5 . . 1 1 1 . . 5 4 c . 
. . c c . . . 1 1 1 . c 5 4 c . 
. . . . c . . . 1 . . c c c c . 
. . . . c 5 5 5 . c c . . . . . 
. . 5 . c 4 4 5 5 4 c . . . . . 
. 5 5 . c c 4 4 5 4 c . . 5 . . 
. 5 . . . c c 4 4 4 c . . 5 5 . 
5 . . . . . c c c c c . . . 5 5 
5 . . . . . . . . . . . . . 5 5 
`,img`
. . . . . . . . . . . . . . . . 
f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f . 
. . . . . . . . . . 5 . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . 2 5 . . . . . . . . . . f 
. . . . . . . . . . . . . . . . 
f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . . . 5 . f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . . . . . . . f 
. f . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . f . . . . . . 
. . . . . . . . . . . . . . . f 
. f . . . . . . . . . . . . . . 
`,img`
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
`],
    75,
    false
    )
    pause(1500)
    mySprite.destroy()
})
