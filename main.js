noseX = 0;
noseY = 0;
diffrence = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){

    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(0 , 100)

    canvas = createCanvas(500, 450);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function draw(){
    background("#21d8fc");

    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be "+diffrence+"px";
     fill("#6bf26d");
     stroke("#6bf26d");
     square(noseX, noseY, diffrence);
}

function preload(){
    
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = "+noseX+"Nose y = "+noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+leftWristX+"rightWristX"+rightWristX+"difference = "+diffrence);

    }
}