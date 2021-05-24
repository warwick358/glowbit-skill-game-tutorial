input.onButtonPressed(Button.B, function () {
    if (active == 6) {
        score += 25
    } else {
        control.reset()
    }
})
let score = 0
let active = 0
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
active = 0
let direction = 1
let red = randint(30, 127)
let green = randint(30, 127)
let blue = randint(30, 127)
active = 0
strip.clear()
basic.forever(function () {
    strip.clear()
    if (active >= 12) {
        direction = -1
    } else if (active <= 0) {
        direction = 1
    } else {
    	
    }
    strip.setPixelColor(active, neopixel.rgb(red, green, blue))
    strip.show()
    basic.pause(400 - score)
    while (input.buttonIsPressed(Button.B)) {
        basic.pause(100)
    }
    active += direction
})
