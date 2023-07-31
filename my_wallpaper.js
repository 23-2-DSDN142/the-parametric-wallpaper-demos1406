//your parameter variables go here!

// ellipses
let ellipse_width  = 30;
let ellipse_height = 30;
// larger ellipses
let ellipse2_width = 20
let ellipse2_height = 20

// checkerboard vars
let triangleX = 25
let triangleY = 50

let squareSize = 100

// colours
let background_col = "#EDDFD4" // cream colour
let circle_col = "#03A696" // teal
let line_col = "#8C4303" //dark brown
let square_col = "#8C4303" // light brown

let blue_col = "#021F59"

// random colours
colR = random(0,255);
colG = random(0,255);
colB = random(0,255);

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER); //GRID_WALLPAPER or DEVELOP_GLYPH
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background("#fae"); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  drawGrid(50, square_col, 75, 0, 75)
  // drawGrid(35, blue_col, 50, 7.5)
}

function drawGrid(size, col, distance, offset = 0, xOffset = 0){
  // adjustable checkerboard
  noStroke()
  fill(col)
  if(xOffset != 0){
    for (let x = 0; x < 200; x += distance) {
      for (let y = 0; y < 200; y += distance) {
        beginShape()
        vertex(x+xOffset, y+offset)
        vertex(x+xOffset + size / 2, y+offset + size/2)
        vertex(x+xOffset, y+offset + size)
        vertex(x+xOffset - size/2, y+offset + size / 2)
        endShape(CLOSE)
      }
    }
  }else{
    for (let x = 0; x < 200; x += distance) {
      for (let y = 0; y < 200; y += distance) {
        // if ((x + y) / squareSize % 2 === 0) {
        //   fill('#fae');
        // } else {
        //   fill(0);
        // }
        
        beginShape()
        vertex(x + size / 2, y);
        vertex(x + size, y + size / 2);
        vertex(x + size / 2, y + size);
        vertex(x, y + size / 2);
        endShape(CLOSE)
      }
    }
  }
}