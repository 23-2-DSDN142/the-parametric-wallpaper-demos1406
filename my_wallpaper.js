// your parameter variables go here!

// shapes
let toggle_ellipse = false;
let toggle_square = true;
let toggle_shape = false;

// circles
let ellipseSize = 85; // 85

// squares
let squareSize1 = 140;
let squareSize1_width = 140;
let squareSize2 = squareSize1 - squareSize1 / 3;
let squareSize3 = squareSize1 - squareSize1 / 1.5;

// checkerboard
let checkerSize = 50;

// flower
let numPetals = 9;
let centerFlowerSize = 45;
let toggle_flowers = false;
let flower_col1 = "#f3e4c3";
let flower_col2 = "#e0615f";

// palette 1
let background_col = "#f3e4c3";

// ellipse colours
let ellipse_col1 = "#9cd5d2";
let ellipse_col2 = "#4fada8";

// square colours
let square_col1 = "#f78270";
let square_col2 = "#e0615f";
let square_col3 = "#52b9b1";

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 0;
}

function wallpaper_background() {
  background(background_col);
}

function my_symbol() {
  // do not rename this function. Treat this similarly to a Draw function
  noStroke();
  // background circles
  fill(ellipse_col1);
  ellipse(30 + 140 / 6, 30 + 140 / 6, ellipseSize);
  ellipse(200 - (30 + 140 / 6), 200 - (30 + 140 / 6), ellipseSize);

  fill(ellipse_col2);
  ellipse(200 - (30 + 140 / 6), 30 + 140 / 6, ellipseSize);
  ellipse(30 + 140 / 6, 200 - (30 + 140 / 6), ellipseSize);

  // squares or circles or weird shape
  if (toggle_ellipse == true) {
    ellipseMode(CORNER);
    fill(square_col1);
    ellipse(30, 30, squareSize1);

    fill(square_col2);
    ellipse(
      30 + squareSize1 / 6,
      30 + squareSize1 / 6,
      squareSize1 - squareSize1 / 3
    );

    fill(square_col3);
    ellipse(
      30 + squareSize1 / 3,
      30 + squareSize1 / 3,
      squareSize1 - squareSize1 / 1.5
    );
  } else if (toggle_square == true) {
    fill(square_col1); // outer
    // rect(0, 100-squareSize1/2, squareSize1_width, squareSize1);
    rect(
      100 - squareSize1 / 2,
      100 - squareSize1 / 2,
      squareSize1_width,
      squareSize1
    );

    fill(square_col2); // middle
    rect(100 - squareSize2 / 2, 100 - squareSize2 / 2, squareSize2);

    fill(square_col3); // center
    rect(100 - squareSize3 / 2, 100 - squareSize3 / 2, squareSize3);
  } else if (toggle_shape == true) {
    fill(square_col1);
    beginShape();
    vertex(35, 60);
    vertex(30, 30);
    vertex(60, 35);
    vertex(100, 25);
    vertex(140, 35);
    vertex(170, 30);
    vertex(165, 60);
    vertex(175, 100);
    vertex(165, 140);
    vertex(170, 170);
    vertex(140, 165);
    vertex(100, 175);
    vertex(60, 165);
    vertex(30, 170);
    vertex(35, 140);
    vertex(25, 100);
    endShape(CLOSE);

    fill(square_col2);
    beginShape();
    vertex(35 + 140 / 8, 60 + 140 / 8);
    vertex(30 + 140 / 8, 30 + 140 / 8);
    vertex(60 + 140 / 8, 35 + 140 / 8);
    vertex(100, 25 + 140 / 8);
    vertex(140 - 140 / 8, 35 + 140 / 8);
    vertex(170 - 140 / 8, 30 + 140 / 8);
    vertex(165 - 140 / 8, 60 + 140 / 8);
    vertex(175 - 140 / 8, 100);
    vertex(165 - 140 / 8, 140 - 140 / 8);
    vertex(170 - 140 / 8, 170 - 140 / 8);
    vertex(140 - 140 / 8, 165 - 140 / 8);
    vertex(100, 175 - 140 / 8);
    vertex(60 + 140 / 8, 165 - 140 / 8);
    vertex(30 + 140 / 8, 170 - 140 / 8);
    vertex(35 + 140 / 8, 140 - 140 / 8);
    vertex(25 + 140 / 8, 100);
    endShape(CLOSE);

    fill(square_col3);
    beginShape();
    vertex(35 + 140 / 4, 60 + 140 / 5);
    vertex(30 + 140 / 4, 30 + 140 / 4);
    vertex(60 + 140 / 5, 35 + 140 / 4);
    vertex(100, 25 + 140 / 4);
    vertex(140 - 140 / 5, 35 + 140 / 4);
    vertex(170 - 140 / 4, 30 + 140 / 4);
    vertex(165 - 140 / 4, 60 + 140 / 5);
    vertex(175 - 140 / 4, 100);
    vertex(165 - 140 / 4, 140 - 140 / 5);
    vertex(170 - 140 / 4, 170 - 140 / 4);
    vertex(140 - 140 / 5, 165 - 140 / 4);
    vertex(100, 175 - 140 / 4);
    vertex(60 + 140 / 5, 165 - 140 / 4);
    vertex(30 + 140 / 4, 170 - 140 / 4);
    vertex(35 + 140 / 4, 140 - 140 / 5);
    vertex(25 + 140 / 4, 100);
    endShape(CLOSE);
  }
  ellipseMode(CENTER);

  // corner squares
  fill(square_col2);
  rect(0, 0, 30);
  rect(200 - 30, 0, 30);
  rect(0, 200 - 30, 30);
  rect(200 - 30, 200 - 30, 30);

  drawFlower(100, 100, centerFlowerSize, flower_col1);

  drawFlower(0, 0, 70, flower_col1);
  drawFlower(200, 0, 70, flower_col1);
  drawFlower(0, 200, 70, flower_col1);
  drawFlower(200, 200, 70, flower_col1);

  if (toggle_flowers == true) {
    drawFlower(75, 0, 45, flower_col2);
    drawFlower(125, 0, 45, flower_col2);

    drawFlower(200, 75, 45, flower_col2);
    drawFlower(200, 125, 45, flower_col2);

    drawFlower(125, 200, 45, flower_col2);
    drawFlower(75, 200, 45, flower_col2);

    drawFlower(0, 75, 45, flower_col2);
    drawFlower(0, 125, 45, flower_col2);
  } else {
    drawFlower(100, 0, 45, flower_col2);
    drawFlower(200, 100, 45, flower_col2);
    drawFlower(100, 200, 45, flower_col2);
    drawFlower(0, 100, 45, flower_col2);
  }
}

function drawFlower(x, y, size, colour) {
  push();
  // petals
  fill(colour);
  translate(x, y);
  for (let i = 0; i < numPetals; i++) {
    rotate(360 / numPetals);
    ellipse(0, -10, 7, (size - 10) / 2);
  }
  pop();
  // yellow centre of flower
  fill("#dfb20d");
  ellipse(x, y, size / 5);
}

// adjustable checkerboard
function drawGrid(size, col, distance, offset = 0, xOffset = 0) {
  noStroke();
  fill(col);
  if (xOffset != 0) {
    for (let x = 0; x < 200; x += distance) {
      for (let y = 0; y < 200; y += distance) {
        beginShape();
        vertex(x + xOffset, y + offset);
        vertex(x + xOffset + size / 2, y + offset + size / 2);
        vertex(x + xOffset, y + offset + size);
        vertex(x + xOffset - size / 2, y + offset + size / 2);
        endShape(CLOSE);
      }
    }
  } else {
    for (let x = 0; x < 200; x += distance) {
      for (let y = 0; y < 200; y += distance) {
        beginShape();
        vertex(x + size / 2, y);
        vertex(x + size, y + size / 2);
        vertex(x + size / 2, y + size);
        vertex(x, y + size / 2);
        endShape(CLOSE);
      }
    }
  }
}
