# skillgame

## Step 1 setup
We will start with setting up the microbit to use the neopixal LED's
in the blocks section click the "advanced" then click "extention" 
in this section you will need to select the neopixal extention.
This has been done in the tutorial for you.

## step 2
Next we will create a variable calles "strip" click the "variable" tab
in the blocks then make a variable call it "strip". 
Go to the "neopixal" tab and get the  "set strip" block and place it in the "on start" block. 

```blocks
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)

```

## step 3
make sure that the pin = "0" this is where we connect the wire on the microbit.
Then change the number of LED's to "13" this is how many lights we have on the GlowBit.
alos make sure the LED'd are set as "RGB" this is the tupe of light we have.

```blocks

let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)

```

## Step 4
In this step we will set the brightness. LED's use a scale from 0 - 255 for brighness.
We will go to the "more" tab
under the "neopixal" tab and select the "setBrightness" block place it under the "set strip" block.
Change the number to 50.

```blocks 
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.setBrightness(50)
```
## step 5 making all the variables
We will use 6 variables in this program so we will male them all now.
Go to the "variables" tab and make the following variables
"active", "blue", "direction", "green", "red", "score"

## step 6
Now we will set the rest of the start block.
under set brightness place the following blocks they will be all in the "variables" tab.
set "active to 0, set "direction" to 1, set "red" to 0, set "blue" to 0, set "green" to 0.
In the "math" tab find the "pick random" block and place it in the "0" on the red, blue, and green blocks.
We will then change the numbers to be "30 to 127" in each of the new blocks.
Under the "neopixal" tab find the "strip clear" block and place it as the last block for this section.

```block

let score = 0
let active = 0
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.setBrightness(50)
active = 0
let direction = 1
let red = randint(30, 127)
let green = randint(30, 127)
let blue = randint(30, 127)
strip.clear()
```



