peterpan = 0;
harrypotter = 0;
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
scoreleft = 0;
song = "    ";
function preload()
{
song=loadSound("music.mp3");
song=loadSound("music2.mp3");
}

function setup()
{
canvas = createCanvas(450, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model is Initialised");
}

function draw()
{
    //setting color//
    image(video, 0, 0, 450, 500);
    fill("#000000");
    stroke("#000000");
    //play song based on wrist //
   
    if(scoreleft >0.2)
    {
        isPlaying1 = song_harrypotter.isPlaying();
        circle(leftwristx, leftwristy,30);
        stop2 = song_peterpan.stop();

    }
    if(isPlaying1 == false)
    {
        isPlaying1 = song_harrypotter.isPlaying(true);
        document.getElementById("song").innerHTML = "Harry Potter";
    }
}
function gotPoses(results)
{
    if(results.length > 0 )
    {
        scoreleft = results[0].pose.keypoints[9].score;
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
    console.log(leftwristx, leftwristy);
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log(rightwristx, rightwristy);
    }
}



