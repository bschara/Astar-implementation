var canvas = document.getElementById("myASTAR");
var ctx = this.canvas.getContext("2d");

class Cell {

  constructor(x, y) {
    this.iswall = false;
    this.x = x;
    this.y = y;
    this.g = 0;
    this.f = 0;
    this.h = 0;
    this.parent = null;
    this.neighbours = [];
  }

  isWall() {
    return this.iswall;
  }

  setIsWall(w) {
    this.iswall = w;
  }

getNeighbors(){
    var arrOfNeighbors = [];
  if (this.x != 0 && this.y != 0 &&  this.x != 30 - 1 && this.y != 20 - 1) {
  if (!arrayOfCells[this.x + 1][this.y].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x + 1][this.y]);
  if (!arrayOfCells[this.x - 1][this.y].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x - 1][this.y]);
  if (!arrayOfCells[this.x][this.y + 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x][this.y + 1]);
  if (!arrayOfCells[this.x][this.y - 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x][this.y - 1]);
  if (!arrayOfCells[this.x + 1][this.y + 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x + 1][this.y + 1]);
  if (!arrayOfCells[this.x + 1][this.y - 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x + 1][this.y - 1]);
  if (!arrayOfCells[this.x - 1][this.y + 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x - 1][this.y + 1]);
  if (!arrayOfCells[this.x - 1][this.y - 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x - 1][this.y - 1]);
    }
  
  else if (this.x == 0 && this.y != 0 && this.y != 20 - 1) {
    if (!arrayOfCells[this.x][this.y - 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x][this.y - 1]);
    if (!arrayOfCells[this.x][this.y + 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x][this.y + 1]);
    if (!arrayOfCells[this.x + 1][this.y].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x + 1][this.y]);
    if (!arrayOfCells[this.x + 1][this.y + 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x + 1][this.y + 1]);
    if (!arrayOfCells[this.x + 1][this.y - 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x + 1][this.y - 1]);
  
  
  }
  else if (this.x == 30 - 1 && this.y != 0 && this.y != 20 - 1) {
    if (!arrayOfCells[this.x][this.y - 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x][this.y - 1]);
    if (!arrayOfCells[this.x][this.y + 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x][this.y + 1]);
    if (!arrayOfCells[this.x - 1][this.y].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x - 1][this.y]);
    if (!arrayOfCells[this.x - 1][this.y + 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x - 1][this.y + 1]);
    if (!arrayOfCells[this.x - 1][this.y - 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x - 1][this.y - 1]);
  
  
  }
  else if (this.y == 0 && this.x != 0 && this.x != 30 - 1) {
    if (!arrayOfCells[this.x + 1][this.y].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x + 1][this.y]);
    if (!arrayOfCells[this.x][this.y + 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x][this.y + 1]);
    if (!arrayOfCells[this.x - 1][this.y].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x - 1][this.y]);
    if (!arrayOfCells[this.x - 1][this.y + 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x - 1][this.y + 1]);
    if (!arrayOfCells[this.x + 1][this.y + 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x + 1][this.y + 1]);
  
  
  }
  else if (this.y == 20 - 1 && this.x != 0 && this.x != 30 - 1) {
    if (!arrayOfCells[this.x + 1][this.y].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x + 1][this.y]);
    if (!arrayOfCells[this.x][this.y - 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x][this.y - 1]);
    if (!arrayOfCells[this.x - 1][this.y].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x - 1][this.y]);
    if (!arrayOfCells[this.x - 1][this.y - 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x - 1][this.y - 1]);
    if (!arrayOfCells[this.x + 1][this.y - 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x + 1][this.y - 1]);
  
  
  }
  else if (this.x == 0 && this.y == 0) {
    if (!arrayOfCells[this.x + 1][this.y].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x + 1][this.y]);
    if (!arrayOfCells[this.x + 1][this.y + 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x + 1][this.y + 1]);
    if (!arrayOfCells[this.x][this.y + 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x][this.y + 1]);
  }
  
  
  else if (this.x == 0 && this.y == 20 - 1) {
    if (!arrayOfCells[this.x + 1][this.y].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x + 1][this.y]);
    if (!arrayOfCells[this.x + 1][this.y - 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x + 1][this.y - 1]);
    if (!arrayOfCells[this.x][this.y - 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x][this.y - 1]);
  
  
  }
  else if (this.x == 30 - 1 && this.y == 0) {
    if (!arrayOfCells[this.x][this.y + 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x][this.y + 1]);
    if (!arrayOfCells[this.x - 1][this.y].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x - 1][this.y]);
    if (!arrayOfCells[this.x - 1][this.y + 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x - 1][this.y + 1]);
  
  
  }
  else if (this.x == 30 - 1 && this.y == 20 - 1) {
    if (!arrayOfCells[this.x][this.y - 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x][this.y - 1]);
    if (!arrayOfCells[this.x - 1][this.y].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x - 1][this.y]);
    if (!arrayOfCells[this.x - 1][this.y - 1].isWall())
      arrOfNeighbors.push(arrayOfCells[this.x - 1][this.y - 1]);
  
  
  }
  for(let i = 0; i < arrOfNeighbors.length; i++){
    this.neighbours.push(arrOfNeighbors[i]);
  }
  return arrOfNeighbors;
  };


Astar(point2x, point2y){
  var startPosition = this;
  var endPosition = arrayOfCells[point2x][point2y];
  var openList = []
  openList.push(startPosition)
  let closedList = []
  while (openList.length > 0){
    var lowPos = 0;
    for(let i = 0; i < openList.length; i++){
      if(openList[i].f < openList[lowPos].f){
        lowPos = i;
      }
    }
    let currentPosition = openList[lowPos];
    if(currentPosition === endPosition){
      let curr = currentPosition;
      let path = [];
      while(curr.parent != null){
        path.push(curr);
        curr = curr.parent;
      }
      for(let i = 0; i < path.length; i++){
        drawRect(ctx, path[i].x * 20, path[i].y * 20, 20 ,20, "yellow");
        drawRect(ctx, endPosition.x * 20, endPosition.y * 20, 20 ,20, "red");
      }
      return path.reverse();
      
    }
    openList.splice(lowPos, 1);
    closedList.push(currentPosition);
    let neighbours = currentPosition.getNeighbors();
    for(let i = 0; i < neighbours.length; i++){
      let neighbour = neighbours[i];
      if(neighbour.x == currentPosition.x + 1 && neighbour.y == currentPosition.y + 1 
        || neighbour.x == currentPosition.x - 1 && neighbour.y == currentPosition.y - 1 ||
        neighbour.x == currentPosition.x + 1 && neighbour.y == currentPosition.y - 1||
        neighbour.x == currentPosition.x - 1 && neighbour.y == currentPosition.y + 1){
        currentPosition.g += 0.4;
     }
      if(closedList.includes(neighbour)){
        continue;
      }
      let costSoFar = currentPosition.g + 1;
     
      
      let lowestCost = false;
      if(openList.includes(neighbour) == false){
        lowestCost = true;
        neighbour.h = ManhattanDistance(neighbour.x, neighbour.y, point2x, point2y);
        openList.push(neighbour);
      }
      else if(costSoFar < neighbour.g){
        lowestCost = true;
      }
      if(lowestCost == true){
        neighbour.parent = currentPosition;
        neighbour.g = costSoFar;
        neighbour.f = neighbour.g + neighbour.h;
       }
     }
   }
 }
} 


var arrayOfCells = [[]];


for (var i = 0; i <= 30 - 1; i++) {
  arrayOfCells[i] = [];
  for (var j = 0; j <= 20 - 1; j++) {
    arrayOfCells[i][j] = new Cell(i, j);
  }
};

//initialize the grid and generate walls randomly

function drawRectangle(context, x, y, width, height) {
  context.beginPath();
  context.rect(x, y, width, height);
  context.lineWidth = 1;
  context.strokeStyle = '#FF0000';
  context.stroke();
};


function drawRect(context, x, y, width, height, color) {
  context.beginPath();
  context.rect(x, y, width, height);
  context.fillStyle = color;
  context.lineWidth = 1;
  context.strokeStyle = '#FF0000';
  context.fill();
  context.stroke();
};

var z = 0;
while (z < 20) {
var i = Math.floor(Math.random() * 30);
var j = Math.floor(Math.random() * 20);
arrayOfCells[i][j].setIsWall(true);
z++
}

//drawRectangle(ctx);
for (var i = 0; i < 30; i++) {
  for (var j = 0; j < 20; j++) {
    drawRectangle(ctx, i * 20, j * 20, 20, 20);
    if (arrayOfCells[i][j].isWall() == true) {
      drawRect(ctx, i * 20, j * 20, 20, 20, "black")
    }
  }
};

function ManhattanDistance(positionStarx, positionStary, positionGoalx, positionGoaly){
  return Math.abs((positionStarx - positionGoalx) + (positionStary - positionGoaly)); 
 };


canvas.addEventListener("click", canvasClick, false);
var count = 0;
var point1x = 0; 
var point2x = 0; 
var point1y = 0; 
var point2y = 0;

//get starting and end position on mouse click
function canvasClick(e) {

  
  var x;
  var y;
  // grab html page coords
  if (e.pageX != undefined && e.pageY != undefined) {
    x = e.pageX;
    y = e.pageY;
  } else {
    x = e.clientX + document.body.scrollLeft +
      document.documentElement.scrollLeft;
      
    y = e.clientY + document.body.scrollTop +
      document.documentElement.scrollTop;
    }
  // make them relative to the canvas only
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  

  console.log("x " + x);
  console.log("y " + y);

  console.log("gridx " + Math.floor(x / 20));
  console.log("gridy " + Math.floor(y / 20));
  x = Math.floor(x / 20);
  y = Math.floor(y / 20);
  count++;
  //starting position
  
  if(count == 1){
     point1x = x;
     point1y = y;
     console.log("start node");
     drawRect(ctx, x * 20, y * 20, 20 ,20, "green");
  }
    
     
//end position
   if(count == 2){
   point2x = x;
   point2y = y;
   console.log("target node");
   drawRect(ctx, x * 20, y * 20, 20 ,20, "red");  
   var startCell  = new Cell(point1x, point1y);
   startCell.Astar(point2x, point2y);
  
}


}





