//may not work on safari
// Declare a "SerialPort" object
var serial;

// fill in the name of your serial port here:
//copy this from the serial control app
var portName = "COM5";

//this array will hold transmitted data
var inMessage = 1;

let iceWall;

let tintAmount = 255;

function preload(){ 
  iceWall = loadImage('the-ice-wall.jpg')
  let easing = 0.05;

}

function setup() {
  createCanvas(400,400);
  background("#FFC107");
  // iceWall.position(0, 0);
  // iceWall.size(400,400);

  // make an instance of the SerialPort object
  serial = new p5.SerialPort();

  // Get a list the ports available
  // You should have a callback defined to see the results. See gotList, below:
  // serial.list();

  // Assuming our Arduino is connected,  open the connection to it
  serial.open(portName);

  // When you get a list of serial ports that are available
  // serial.on('list', gotList);

  // When you some data from the serial port
  serial.on('data', gotData);
}


// Got the list of ports
// function gotList(thelist) {
//   // theList is an array of their names
//   for (var i = 0; i < thelist.length; i++) {
//     // Display in the console
//     console.log(i + " " + thelist[i]);
//   }
// }

// Called when there is data available from the serial port
function gotData() {
  var currentString = serial.readLine();  // read the incoming data
  trim(currentString);                    // trim off trailing whitespace
  if (!currentString) return;             // if the incoming string is empty, do no more
  console.log(currentString);
      inMessage = currentString;   // save the currentString to use for the text
}
var word = "ENJOY YOUR SUMMER :)";
function draw() {

  textSize(20);
  textFont("Merriweather");
  text(word, 130, 130, 100, 100);
  fill(100,30,0);
  tint(255,tintAmount);
    image(iceWall,0,0,400,400);
  
  if(inMessage == 0 && tintAmount > 0){
    tintAmount -= 20;
  }
    }
  

// function mousePressed(){
//   serial.write("1");
// }
// function mouseReleased(){
//   serial.write("0");
// }