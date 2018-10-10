// DrawTriangle.js (c) 2012 matsuda
function main() {  
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  // Draw a purple rectangle
  ctx.fillStyle = 'rgba(210, 0, 210, 1.0)'; // Set color to blue
  ctx.fillRect(120, 10, 225, 225);        // Fill a rectangle with the color



  // Draw a red rectangle
  ctx.fillStyle = 'rgba(255, 0, 0, 1.0)'; // Set color to blue
  ctx.fillRect(350, 55, 40, 300);        // Fill a rectangle with the color


  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
	var g = 255 - (i*55);
	var b = (j*55) + 20;
  	ctx.fillStyle = 'rgba(0, ' + g  + ', ' + b +', 1.0)'; // Set color
  	ctx.fillRect((30*i)+40, (30*j)+50, 30, 30);        // Fill a rectangle with the color
    }
  }
}
