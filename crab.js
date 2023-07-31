

  

  noStroke()
  // legs
  beginShape()
  vertex(60, 130)
  vertex(35, 125)
  vertex(20, 128)
  vertex(10, 150)
  vertex(10, 160)
  vertex(22, 138)
  vertex(35, 132)
  vertex(60, 135)
  endShape(CLOSE)

  beginShape()
  vertex(60, 140)
  vertex(32, 142)
  vertex(15, 170)
  vertex(15, 180)
  vertex(32, 152)
  vertex(50, 145)
  vertex(65, 145)
  endShape(CLOSE)

    noStroke()
    fill("white")
    // body of crab
    beginShape()
    vertex(55, 125) // left
    vertex(75, 90)
    vertex(100, 90) // top
    vertex(130, 95)
    vertex(145, 115)
    vertex(150, 125) // right
    vertex(135, 145)
    vertex(100, 165) // bottom
    vertex(70, 155)
    vertex(60, 140)
    endShape(CLOSE)
  
    // left claw
    beginShape()
    vertex(55, 125)
    vertex(40, 110)
    vertex(15, 100)
    vertex(5, 80)
    vertex(5, 45)
    vertex(20, 30)
    vertex(30, 20)
    vertex(25, 35)
    vertex(25, 70)
    vertex(35, 90)
    vertex(40, 55)
    vertex(33, 30)
    vertex(50, 40)
    vertex(55, 55)
    vertex(55, 80)
    vertex(40, 85)
    vertex(50, 105)
    vertex(65, 115)
    endShape(CLOSE)
  
    // eyes
    rect(73, 70, 15, 10, 25)
    rect(110, 75, 15, 10, 20)
  
    beginShape()
    vertex(80, 80)
    vertex(80, 95)
    vertex(85, 95)
    vertex(83, 75)
    endShape(CLOSE)
  
    beginShape()
    vertex(115, 85)
    vertex(113, 92)
    vertex(117, 95)
    vertex(117, 85)
    endShape(CLOSE)
  
    // right claw
    beginShape()
    vertex(150,125)
    vertex(160, 115)
    vertex(175, 115)
    vertex(188, 105)
    vertex(195, 75)
    vertex(185, 45)
    vertex(165, 35)
    vertex(158, 40)
    vertex(170, 70)
    vertex(160, 100)
    vertex(150, 70)
    vertex(155, 45)
    vertex(140, 50)
    vertex(130, 70)
    vertex(155, 100)
    vertex(155, 105)
    vertex(140, 115)
    endShape(CLOSE)

    // legs

  
    fill("#90EE90")
    rect(73, 70, 13, 8, 25)
    rect(112, 75, 12, 7, 20)
}

function drawCrab(x, y){
  noStroke()
  beginShape()
  vertex(x+55, y+125) // left
  vertex(x+75, y+90)
  vertex(x+100, y+90) // top
  vertex(x+130, y+95)
  vertex(x+145, y+115)
  vertex(x+150, y+125) // right
  vertex(x+135, y+145)
  vertex(x+100, y+165) // bottom
  vertex(x+70, y+155)
  vertex(x+60, y+140)
  endShape(CLOSE)
}

function draw_strawberry(x, y, height, width, angle){
  point(50,50)
  point(60,43)
  point(90, 43)
  point(100,50)
  point(75, 100)
  strokeWeight(1)

  noFill()
  stroke("red")
  beginShape()
  
  endShape()
}
