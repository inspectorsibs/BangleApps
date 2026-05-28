var counter = 30;
var counterInterval;

function countDown() {
  counter--;
  // Out of time
  if (counter<=0) {
    // stop the timer
    clearInterval(counterInterval);
    counterInterval = undefined;
    // display the 'out of time' message
    E.showMessage("Out of Time","My Timer");
    // Now buzz
    Bangle.buzz();
    // again, every 5 seconds
    counterInterval = setInterval(() => Bangle.buzz(), 5000);
    return;
  }

  g.clear(1); // clear screen and reset graphics state
  g.setFontAlign(0,0); // center font
  //g.setColor("#4AFF4A");
  g.setFont("Vector",80); // vector font, 80px
  // draw the current counter value
  g.drawString(counter, g.getWidth()/2, g.getHeight()/2);
  // optional - this keeps the watch LCD lit up
  Bangle.setLCDPower(1);
}

// call countDown every second
counterInterval = setInterval(countDown, 1000);
