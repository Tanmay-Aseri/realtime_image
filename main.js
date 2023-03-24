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
}

function preload(){
    
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}