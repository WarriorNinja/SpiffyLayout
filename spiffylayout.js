// <summary>
// This class defines a grid where each square cell is made of two right triangles by dividing the square cell diagonally from top left to bottom right. 
// Each triangle is a column. Rows are defined as capital letters increasing downward. Columns are defined as nuumbers increasing from left to right. 
// The X and Y coodinates of each right triangle verticy is defined in pixels. Verticy coordinates: V1 = right angle vertex, V2 = top vertex, V3 = bottom vertex
// </summary>
// <param name="numRows">Number of rows</param>
// <param name="numCols">Number of columns</param>
// <param name="size">The length and height of the trianle sides in pixels</param>
class SpiffyLayout{
   constructor(numRows, numCols, size) { 
      this.numCols = numRows; 
      this.numCols = numCols;
	  this.size = size;
   }
   //sets the x and y coordinates in pixels for each verticy of a particular triangle given the row and column e.g., A1, A2, A3...B1, B2, B3 etc...
   setCoordinatesFromRowColumn(row, col) { 
		var colNum = (col % 2 + col) / 2;
		var rowNum = row.charCodeAt()-65;
		this.V2x = (colNum - 1) * this.size;
		this.V2y = rowNum * this.size;
		this.V3x = colNum * this.size;
		this.V3y = (rowNum + 1) * this.size;
		if (col % 2){
			this.V1x = this.V2x;
			this.V1y = this.V3y;
		}else{
			this.V1x = this.V3x;
			this.V1y = this.V2y;
		}
   }
   getCoordinatesFromRowColumn(row, col) {
	   //TODO test if coordinates are in correct format and range
	   this.setCoordinatesFromRowColumn(row, col);
	   console.log("The coordinates of triangle %s%s are (%s,%s),(%s,%s),(%s,%s)", row, col, this.V1x, this.V1y, this.V2x, this.V2y, this.V3x, this.V3y);  
   }
   setRowColumnFromCoordinates(V1x, V1y, V2x, V2y, V3x, V3y){
		//TODO check coordinates order and rearrang if needed. Currently assumed order: V1 = right angle, V2 = top vertex, V3 = bottom vertex
		var colNum = V3x / this.size;
		var rowNum = V2y / this.size;
		this.row = String.fromCharCode(rowNum+65);
		if(V1x == V2x){
		   this.column = colNum * 2 - 1;
		} else {
		   this.column = colNum * 2;
		}
   }
   //The output of this function has been rearragnged for easy visual comparison
   getRowColumnFromFromCoordinates(V1x, V1y, V2x, V2y, V3x, V3y){
	   //TODO test if coordinates are in correct format, range and are adjacent
	   this.setRowColumnFromCoordinates(V1x, V1y, V2x, V2y, V3x, V3y);
	   console.log("The coordinates of triangle %s%s are (%s,%s),(%s,%s),(%s,%s)", this.row, this.column, V1x, V1y, V2x, V2y, V3x, V3y);  
   }
}

function test(){
	spiffyLayout = new SpiffyLayout(6,12,10);
	//Test get both functions
	var rows = "ABCDEF";
	for (rowIndex = 0; rowIndex < rows.length; rowIndex++) {
		for (columnIndex = 0; columnIndex < spiffyLayout.numCols; columnIndex++) {
			spiffyLayout.getCoordinatesFromRowColumn(rows[rowIndex], columnIndex + 1);
			spiffyLayout.getRowColumnFromFromCoordinates(spiffyLayout.V1x, spiffyLayout.V1y, spiffyLayout.V2x, spiffyLayout.V2y,
				spiffyLayout.V3x, spiffyLayout.V3y);
		}
	}
}

window.onload = function(e){ 
	test();
};