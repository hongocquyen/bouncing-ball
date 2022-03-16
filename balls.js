
function Ball() {
    var x = random(0,1470);
    var y = random(0,700);
    var dx = random(3,10);
    var dy = random(3,10);
    var maxheight = 0;
    var maxwidth = 0;

    this.show = function () {
        stroke(255);
        strokeWeight(2);
        fill(102);
        ellipse(x, y, 40, 40);
    };
    this.bounc = function () {
        y = y + dy;
        x = x + dx;
        if (y > height || y < maxheight) {
          dy = -dy;
          counter++;
        }
        if (x > width || x < maxwidth) {
          dx = -dx;
          counter++;
        }
    };
    
}