x = 0;
y = 0;

var screen_width = 0;
var screen_height = 0;

var apple = "";

draw_apple = "";

var speak_data = "";

var to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    if(content == "true")
    {
    to_number = Number(content);
    if(Number.isInteger(to_number));
    document.getElementById("status").innerHTML = "Started drawing apple";
    draw_apple = "set";
    } else(content == "false")
    {
       document.getElementById("status").innerHTML = "The speech has not recognized a number. ";
    }
}
  
function setup() {
   screen_width = window.innerWidth;
   canvas = createCanvas(1278, 550);
   canvas.position();
 }

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for(var i = 1; i <= to_number; i++)
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
    var speak_data = document.getElementById("status").innerHTML = to_number + " Apples drawn";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    var speak_data = "";
}

function preload() {
  function loadImage() {
    var apple = document.getElementById("apple.png");
  }
}

