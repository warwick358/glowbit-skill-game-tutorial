# skillgame

## step 1 
Setup

We will start by create a variable calles "strip" click the "variable" tab
in the blocks then make a variable call it "strip". 
Go to the "neopixal" tab and get the  "set strip" block and place it in the "on start" block. 

```blocks
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)

```

## step 2 
Setup continued

Make sure that the pin = "0" this is where we connect the wire on the microbit.
Then change the number of LED's to "13" this is how many lights we have on the GlowBit.
alos make sure the LED'd are set as "RGB" this is the tupe of light we have.

```blocks

let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)

```

## Step 3 
Set the brightness

In this step we will set the brightness. LED's use a scale from 0 - 255 for brighness.
We will go to the "more" tab
under the "neopixal" tab and select the "setBrightness" block place it under the "set strip" block.
Change the number to 50.

```blocks 
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.setBrightness(50)
```
## step 4 
Making all the variables

We will use 6 variables in this program so we will male them all now.
Go to the "variables" tab and make the following variables
"active", "blue", "direction", "green", "red", "score"

## step 5 
Adding the variables

Now we will set the rest of the start block.
Under set brightness place the following blocks they will be all in the "variables" tab.
Set "active to 0",      Set "direction" to 1,       Set "red" to 0,     Set "blue" to 0,    Set "green" to 0.
```block
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.setBrightness(50)
let active = 0
let direction = 1
let red = 0
let green = 0
let blue = 0
strip.clear()

```
## Step 6 
Editing the variables

In the "math" tab find the "pick random" block and place it in the "0" on the red, blue, and green blocks.
We will then change the numbers to be "30 to 127" in each of the new blocks.
Under the "neopixal" tab find the "strip clear" block and place it as the last block for this section.

```block

let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.setBrightness(50)
let active = 0
let direction = 1
let red = randint(30, 127)
let green = randint(30, 127)
let blue = randint(30, 127)
strip.clear()

```

## step 7
Here we will make a new block.

Open the "input" tab and find the "on button press" block and plce it in the workspace.
Next open the "logic"tab and find the "if then else" block and plce it in the "button press" block.
Open the "logic" tab and find the "0=0"block and replace "true" with the block.
Open the "variable" tab and chose the variable "active" and plce it in the first "0" in the "0=0" block.
Change the second "0" to 6

```block
input.onButtonPressed(Button.B, function () {
    let active = 0
    if (active == 6) {
    	
    } else {
    	
    }
})
```
## step 8
Here we will finish the button press block.

Open the "variable" tab and find the "change by" block. Place this block after "then" and before "else" in the if then statement.
Use the drop down to change the variable to "score" and the number to 25.
Then go to the "advanced" tab then the "control" tab and find the "rest" block and place it after "else".


```block
let score = 0
input.onButtonPressed(Button.B, function () {
    let active = 0
    if (active == 6) {
        score += 25
    } else {
        control.reset()
    }
})
```

## step 9
Now we can start the forever section of the code.

Start with the "neopixal" tab and the "strip clear" block. 
Place it in the forever loop.
Next we will go the the "logic" tab and get a "if then else" block and plce it under the "strip clear" tab.
In the "variable" tab we need a "set to" block  we will place this block after "then"
Using the drop down change the variable to "direction" and the number to "-1".
At the bottom of the "if then else" block is a "+" symbol, click this to add a "else if" section.
In this section place a "set to" block from the "variable" tab. 
Using the drop down change the variable to "direction" and the number to "1".
```block
let direction = 0
basic.forever(function () {
    let strip: neopixel.Strip = null
    strip.clear()
    if (true) {
        direction = -1
    } else if (true) {
        direction = 1
    } else {
    	
    }
})
```

## step 10
Go to the "logic tab and find the "0 < 0" block and replace the first "true" in the "if then else" block.
Change the first "0" to the "variable" "active" and the second "0" to "12".
use the dropdown tab to set the symbol to "greater than or equal to".

Go to the "logic tab and find the "0 < 0" block and replace the secont "true" in the "if then else" block.
Change the first "0" to the "variable" "active".
Use the dropdown tab to set the symbol to "les than or equal to".

```block
let direction = 0
basic.forever(function () {
    let active = 0
    let strip: neopixel.Strip = null
    strip.clear()
    if (active >= 12) {
        direction = -1
    } else if (active <= 0) {
        direction = 1
    } else {
    	
    }
})

```
## step 11
Go to the "neopixal" tab "more" tab and get the "set pixal coulor at 0" block and place it under the if then else we just made.
Go to the "neopixal" tab "more" tab and get the "red 255 green 255 blue 255" block and place it in the "red" dropdown box. Replace "255" with the corresponding variable eg. red "red".
Go to the "variable" tab and select ""active" and replace the "0".
Go to the "neopixal" tab get the "strip show" block and place it under the "set pixal coulor at 0" block

```block
let direction = 0
basic.forever(function () {
    let blue = 0
    let green = 0
    let red = 0
    let active = 0
    let strip: neopixel.Strip = null
    strip.clear()
    if (active >= 12) {
        direction = -1
    } else if (active <= 0) {
        direction = 1
    } else {
    	
    }
    strip.setPixelColor(active, neopixel.rgb(red, green, blue))
    strip.show()
})
```

## step 12
Open the "basic" tab and get the "pause" block and place it under the "strip show" block.
open the "math" tab and get the "0 - 0" block and place it in the "pause" block.
replace the first "0" with "400" and the second "0" with the variable "score"

```block
let active = 0
let direction = 0
basic.forever(function () {
    let score = 0
    let blue = 0
    let green = 0
    let red = 0
    let strip: neopixel.Strip = null
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
```

## step 13
In the "loops" tab select a "while do" block and place it under the "pause block.
Go to the "input" tab and get a "buttonIsPressed" block replace the "true" in the "while do" block.
Change the button in the dropdown tab to button "B".
In the "do" section place a "pause" block from the "basic" tab.
Change to pause number to "100"
Go to the "variable" tab and select the "change by" block and place it under the "pause" block from the "basic" tab.
Then use the dropdown to change to "active" and  insert the variable "direction" in the last box replacing the "0".

```block

let active = 0
let direction = 0
basic.forever(function () {
    let score = 0
    let blue = 0
    let green = 0
    let red = 0
    let strip: neopixel.Strip = null
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
```
## step 14
Please check all the code and the download the game to the microbit.


```block 
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
strip.setBrightness(50)
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
```


