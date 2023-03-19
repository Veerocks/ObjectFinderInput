status="";
function preload(){
}
function setup(){
canvas=createCanvas(480,360);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,0,0,480,360);
}
function start(){
    objectDetection=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!!");
    status=true;
}