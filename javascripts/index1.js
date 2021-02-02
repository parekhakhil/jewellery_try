const queryString = new URLSearchParams(window.location.search);

var data = queryString.get("imageurl");
if (data == null) {
  data = "images/jewellery/earring01.png";
}
const JEWELLERY_IMAGE_URL = data;

var data = queryString.get("imagetype");
if (data == null) {
  data = "EARRING";
}
const IMAGE_TYPE = data;
const _webcam = document.getElementById("_webcam");
const _imageData = document.getElementById("_imageData");
const BRFv5ModelPath = "./models/";
document.getElementById("JewelleryToTry").src = JEWELLERY_IMAGE_URL;
function cameraFailedCallback(err) {
  console.error("Camera failed: ", err);
}

function modelLoadingFailedCallback(err) {
  console.error("BRFv5 failed: ", err);
}

function modelLoadingProgress(progress) {
  console.log("PROGRESS: " + progress);
}

function modelLoadingCompleted() {
  console.log("Model Loading Completed!....");
}

function processLandmarksCallback(ctx, array, color, radius) {
  const nose_point = array[30];
  // const left_ear_point = array[2];
  // console.log("nose pt", left_ear_point.x, left_ear_point.y);
  // const right_ear_point = array[14];
  //   const point_above_nose_point = array[29];

  // Initializing the Drawing Colors
  ctx.strokeStyle = null;
  ctx.fillStyle = getColor(color, 1.0);
  let _radius = radius || 2.0;
}
