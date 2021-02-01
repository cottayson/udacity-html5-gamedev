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







