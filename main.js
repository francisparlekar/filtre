moustachex=0;
moustachey=0;

function preload() {
   moustache = loadImage('https://i.postimg.cc/MK6prMp8/download.png');
}

function setup() {
   canvas = createCanvas(300, 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();
   
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
    }
   
    function modelLoaded() {
      console.log('PoseNet is Initialized');
    }
   
    function gotPoses(results)
   {
      if(results.length > 0)
      {
         console.log(results);
         moustachex = results[0].pose.moustache.x;
         moustachey = results[0].pose.moustache.y;
         console.log("moustache x = " + results[0].pose.moustache.x);
         console.log("moustache y = " + results[0].pose.moustache.y);
      }
   }

 function draw() {
   image(video, 0, 0, 300, 300);
   image(moustache, moustachex, moustachey, 30, 30);
   
 }

 function take_snapshot() {
    save('myFilterImage.png');
 }