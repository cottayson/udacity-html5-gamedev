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