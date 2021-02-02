let canvas = undefined;
let context = undefined;
let assets = Array.from({ length: 19 }, (x, i) => i)
                  .map(i => makeFileName('robowalk/robowalk', 'png', i));
let frames = [];
let numberOfLoadedImages = 0;
let frameRate = 1000 / 30;
let frame = 0;

function onImageLoad() {
  console.log('one image loaded');
  // Call onContentLoaded() when the images have finished loading
  // YOU CODE HERE
}

function onContentLoaded() {
  console.log('all images loaded');
  // YOUR CODE HERE
}


function setup() {
  canvas = document.getElementById("my_canvas");
  context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log("assets array", assets); // you can see generated assets array in console

  // Load each image URL from the assets array into the frames array
  // in the correct order.
  // Afterwards, call setInterval to run at a framerate of 30 frames
  // per second, calling the animate function each time.
  
  // YOUR CODE HERE
}

function animate() {
  // Draw each frame in order, looping back around to the
  // beginning of the animation once you reach the end.
  // Hint: Use mod operation `%` to set currentFrame back to 0.
  
  // Reset background (you can see ghosting effect if you comment this)
  context.clearRect(0, 0, canvas.width, canvas.height);

  // YOUR CODE HERE
}

setup();

// Utilities for constructing assets array of filenames
function toStringPadding(i, len, ch = '0') {
  let s = i.toString();
  while (s.length < len) { s = ch + s }
  return s;
}

function makeFileName(path, ext, i) {
  return `${path}${toStringPadding(i, 2, '0')}.${ext}`;
}