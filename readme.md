# Udacity cource
* [link to playlist](https://www.youtube.com/playlist?list=PLAwxTw4SYaPlUUkh6txMRXE-w-6N1Z225)

# Steps
## What is canvas?
*canvas* is a html5 element that exposes APIs allowing you to draw graphs,
images, and text to portions of the page.

Attributes of *canvas*:
`canvas.width` and `canvas.height`  specify size in pixel units

## Hello world html
* Create `src` directory
* Create `index.html` file inside it
* If you using vscode type `!` and hit enter to make basic html template
or copy that
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <p>Hello html5 ❤️!</p>
</body>
</html>
```
* If you using vscode install `Live Server 5.6.1` extension and you don't need to reload page manually
  + otherwise you can install python and run `python -m http.server --dir src` in project directory (but live reloading will not be enabled)
  + also you can use `node.js` for making static server using `express` library (but live reloading will not be enabled)

## Your first canvas
1. Declare canvas element in `index.html`
`<canvas id="my_canvas"></canvas>`
1. Create a canvas element using `document.getElementById`
1. Set `width` and `height` attributes

### Using chrome dev tools
* On Document page you can invoke **chrome developer console* by pressing `F12` or `cmd + shift + I`
* Than type `canvas` in console and hit enter, you get something like this:
  `canvas id="mycanvas" width="1200" height="720"`
* You can create, modify any javascript objects, variables and other stuff in console like in script tag in html file

### canvas 2d context
The interesting thing that we haven't yet covered is grabbing the *context*
of the canvas. Think of the canvas object that we fetched from the *DOM*
as a *DOM element*.

The *context* is a handle to the drawing APIs that we'll able to use
to modify the canvas visuals later.

In this simple example we set the width and height to 1200 by 720 respectively

#### Note:
* Any time that user would resize the screen, the canvas will remain this size.
* To make the canvas fit to the screen, we set width to `window.innerWidth` and
  height to `window.innerHeight`

## Working with images
### Loading an image:
1. Declare a `new Image()` object.
1. Declare it's `onload` method.
1. Set `Image.src = "url"`

### Draw image on canvas
1. [drawImage docs](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)
1. Use `context.drawImage(image, sx, sy)` to draw image on canvas

### Coordinate system
* The origin of convas coordinate system, i.e. location of `(0, 0)`
  Is in the top left corner.
* `x` increases **from left to right** of canvas element
* `y` increases **from top to bottom**
* `drawImage(image, sx, sy)` method place the top left corner of the image at
  point `(sx, sy)`

### Image formats
* png = Portable Network Graphics
* jpeg = Joint Photohraphic Experts Group
* WebP is an image format employing both lossy and lossless compression
* [Comparison of all formats](https://en.wikipedia.org/wiki/Comparison_of_graphics_file_formats)
* `png` have tranparency (alpha)
* `jpeg` doesn't have tranparency but have better compression
* `webp` have tranparency and compression

### Move code to javascript file main.js
* Copy code from `src/index.html` that inside `<script>` tag to `src/main.js`
* Create link to `main.js`
```html
<script src="main.js"></script>
```

### Your first animation
Now we going to write this flip book animation style in code.
We've given you a list of image assets to use for "Evil Devices".

What you need to do is load all of this image assest and place them
in the frame array.

After your images are loaded, you should go through and fill out
the rest of the animation function here, which will actually draw
the flip book animation images to the screen as we described before.

#### Important:
Make sure that when your animation is finished you loop back to the
beginning.

Now before this you need to have some logic that checks whether or not
the images are loaded, and once **all of the frames have been loaded**,
actually does a call to `setInterval`.

Now `setInterval(someFunction, delayInMilliseconds)` takes as input
a pointer to a function you'd like to call as well a millisecond count
on how often you want it to be called (delay between ticks).

* 1 second = 1000 milliseconds

So, for instance, if I made a function and wanted it to be called once
every 30 milliseconds, those would be parameters that I pass into it.

Make sure that your `setInterval` call, actually calls the `animate`
function, **once every 30 milliseconds**.

### Comments to solution
* Firstly, at the top of our file `main.js` we declare two new variables:
`frameRate` and `frame`.
* `frameRate` represents how often we'd like to actually call the 
  animate function.
* `Frame` is a variable that we're going to use to represent that the
  current frame in our flip book is.
* Since we already have our frames array available, the next step is 
  actually loop through our predefined assets, and load each of the
  defined images into the frames array.

  This follow the same 3 step process we saw before:
  + Create a new image 
    `let image = new Image()`
  + Set its on load result
    `image.onload = onLoadImage`
  + Set its source
    `image.src = assets[i]`
* Once this is done we can actually call this `setInterval` function,
  which will call the `animate` function at the `frameRate` that we
  provided before.

* `animate` function has a little bit of tricky logic inside of it.
  First off, we have our framecounter `frame` that we've defined.
  We use this to define what image out of the `frames` array we have
  to draw the canvas, and of course, at our lovely position of 192 by 192.

* Once we've drawn the current frame we actually have to increment it,
  and that's where this little nice piece of math comes along
  `frame = (frame + 1) % frames.length`

  What we do is increment frame counter and then modulo it by the frame's
  length.

  What will occur here is that if `frame` ever becomes longer than 
  `frames.length`, the modulo function will have it loop around back to 0
  without us having to have all the other `if` statements invoved.

* We also used `context.clearRect(0, 0, canvas.width, canvas.height)` to
  clear canvas on each frame (call of `animate` function).












