Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90

});

camera = document.getElementById("camera");
Webcam.attach("#camera")

function take_snapshot(){
    webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="image_captured" src="'+data_uri+'"/>'
    });
};

console.log("ml5 version ", ml5.version );
classified = ml5.imageClassified('https://teachablemachine.withgoogle.com/models/IIF9XwgQK/',modalLoaded);