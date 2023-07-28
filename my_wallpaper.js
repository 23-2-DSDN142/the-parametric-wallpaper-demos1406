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

let squareSize = 50

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
  pWallpaper.output_mode(DEVELOP_GLYPH); //GRID_WALLPAPER
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(background_col); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  fill(square_col)
  for (let x = 0; x <= 200; x += squareSize) {
    for (let y = 0; y < 200; y += squareSize) {
      if(x % random(5) == 1){
        fill(line_col)
      }else {
        fill(square_col)
      }
      
      beginShape();
      vertex(x, y);
      vertex(x + squareSize / 2, y + squareSize/2);
      vertex(x, y + squareSize)
      vertex(x - squareSize/2, y + squareSize / 2)

      // vertex(x + squareSize / 2, y);
      // vertex(x + squareSize, y + squareSize / 2);
      // vertex(x + squareSize / 2, y + squareSize);
      // vertex(x, y + squareSize / 2);
      endShape(CLOSE);
    }
  }
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
