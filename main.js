x = 0;
y = 0;
draw_circle = "";
draw_rectangle = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function preload() {

}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
if (draw_circle == "set") {
radius=Math.floor(Math.random()*100);
circle(x, y, radius);
document.getElementById("status").innerHTML = "circle is done!";
draw_circle="";
}
if (draw_rectangle == "set") {
    rect(x, y, 10, 20);
    document.getElementById("status").innerHTML = "rectangle is done!";
    draw_rectangle="";
    }
}

function start() {
    document.getElementById("status").innerHTML = "system is listening... SPEAK OUT";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "speech has been recognized as: " + content;
    if (content == "Circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "started drawing the circle";
        draw_circle = "set";
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "started drawing the rectangle";
        draw_rectangle = "set";
    }
}