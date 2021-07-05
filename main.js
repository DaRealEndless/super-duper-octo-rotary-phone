function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('Mobilenet',modelloaded)
}
function draw() {
  image(video,0, 0, 500, 500)
  classifier.classify(video, gotResult)
}

function modelloaded(){
  console.log('MODEL HAS LOADED');
} 

function gotResult(error, result){
  if (error){
    console.log(error);
  }
  else{
    console.log(result)
    document.getElementById('result_object_name').innerHTML=result[0].label
    document.getElementById('result_object_accuracy').innerHTML=result[0].confidence.toFixed(3)
  }
}