function setup() {
 createCanvas(500, 500)
 angleMode(DEGREES)
 background(0)
 frameRate(15)
}

function draw() {

 translate(width / 2, height / 2)

 //stroke(200)
 //translate(250)
 //rotate(frameCount*4)
 //stroke('#FF9966');
 rotate(0)
 stroke('#cc0033')
 noFill()

 //dividere 360 per il numero per cio ho moltiplicato frameCount
 line(0, 100, sin(frameCount * 4) * 100, cos(frameCount * 4) * 100)
 if (frameCount == 90) {
  noLoop()
 }
 line(0, -100, sin(frameCount * 4) * 100, cos(frameCount * 4) * 100)
 if (frameCount == 90) {
  noLoop()
 }

 translate(250)
 rotate(frameCount * 8)

 stroke('#FF9966')
 ellipse(0, -150, sin(frameCount * 10) * 15, cos(frameCount * 10) * 15)

 rotate(frameCount * 20.7)

 stroke(lerpColor(color('#FF9966'), color('#cc0033'), frameCount / 120));
 line(250, 250, sin(frameCount) * 200, cos(frameCount) * 200)



 //line(0,100,sin(frameCount)*50,cos(frameCount)*200)


}