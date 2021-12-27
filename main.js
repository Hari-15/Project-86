
 canvas = document.getElementById("MyCanvas")
 ctx = canvas.getContext("2d");
 canvas_image = "BirthdayImage.jpg";
 audio = document.getElementById("audio");
 

function NewImage() {
    canvas_imageTag = new Image();
    canvas_imageTag.onload = UploadImage;
    canvas_imageTag.src = canvas_image;
}
 function UploadImage() {
     ctx.drawImage(canvas_imageTag, 0, 0, canvas.width, canvas.height);
 }

function playSound() {
    audio.play();
}