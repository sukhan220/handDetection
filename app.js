const modelParams = {
    flipHorizontal: true,   // flip e.g for video 
    imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.79,    // confidence threshold for predictions.
  }

navigator.getUserMedia = 
     navigator.getUserMedia || 
     navigator.webkitGetUserMedia ||
     navigator.mozGetUserMedia ||
     navigator.msGetUserMedia;

//select everything in my html 
const video = document.querySelector('#video');
const canvas = document.querySelector('#can');
const con=canvas.getContext('2d');
let model;

handTrack.startVideo(video).then(status =>{
    if (status){
        navigator.getUserMedia({video: {}}, Stream =>{
            video.srcObject= Stream;
            setInterval(Detect,1000);
        },
        err => console.log(err)
        );
    }
});

function Detect(){
    model.detect(video).then(predictions =>{
        console.log(predictions);
        model.renderPredictions(predictions,canvas,con,video);
    })
}


handTrack.load(modelParams).then(lmodel =>{
    model =lmodel;
})



