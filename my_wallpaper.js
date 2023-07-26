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
let square_col = "#C19A7A" // light brown

let blue_col = "#021F59"

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
  // adjustable checkerboard
  noStroke()
  fill(square_col)
  for (let x = 0; x <= 200; x += squareSize) {
    for (let y = 0; y <= 200; y += squareSize) {
      // if ((x + y) / squareSize % 2 === 0) {
      //   fill('#fae');
      // } else {
      //   fill(0);
      // }
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
  
  
  
  fill(circle_col)
  for(let x = 0; x<=50; x++) {
    for(let y = 0; y<=50; y++){
      if(x % 2 == 1){
        ellipse(25*x, 50*y, ellipse_height, ellipse_width)
      }
      
    }
  }
  stroke(280)
  strokeWeight(1)
  noFill()
  for(let x = 0; x<=50; x++) {
    for(let y = 0; y<=50; y++){
      if(x % 2 == 1){
        ellipse(25*x, 50*y, ellipse2_height, ellipse2_width)
      }
      
    }
  }

  // stroke(290)
  // for (var x = 0; x<=200; x += 50) {
  //   for (var y = 0; y <= 200; y += 50) {
  //     line(x, y, x+50, y-50);
  //     line(x, y, x-50, y-50);
  //   }
  // }
  
  // fill(blue_col)
  // for (let x = 0; x <= 50; x++) {
  //   for (let y = 0; y <= 50; y++) {
  //     if (x % 2 == 1) {
  //       ellipse(25*x, 50*y, 30, 30);
  //     }
  //   }
  // }


}
