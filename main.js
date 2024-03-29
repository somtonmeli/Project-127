var song = "";
leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model is Loaded")
}

function gotPoses(results)
{
    if(results.legnth > 0)
    {
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("Left wrist X = " + leftWristX + "Left wrist Y = " + leftWristY);
        console.log("Right wrist X = " + rightWristX + "Right wrist Y = " +rightWristY);
    }

}

function draw()
{
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("FF0000");
    circle(leftWristX, leftWristY,20);
}

function Play()
{
    song.play();
}