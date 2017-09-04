// select elements
const btnSubmit = document.querySelector('#button_submit');
const inputWidth = document.querySelector('#input_width');
const inputHeight = document.querySelector('#input_height');
const inputColor = document.querySelector('#colorPicker');
const canvas = document.querySelector('#pixel_canvas');
const maxWidth = 30, maxHeight = 30;

// remove all child nodes from grid
function emptyGrid() {
	while(canvas.hasChildNodes()) {
		canvas.removeChild(canvas.firstChild);
	}
}

// make a grid with size of with x height
function makeGrid(width, height) {
	// clear previous grid
	emptyGrid();

	// draw new grid
	for (let i = 0; i < 10; i++) {
	    // Inserts 10 rows into the table
	    const row = canvas.insertRow(i);
	    for (let j = 0; j < 10; j++) {
	        // Inserts 10 cells into each of the rows
	        const cell = row.insertCell(j);
	        cell.className = 'cell';
	    }
	}
}

// validate grid size when user manually types a number
function validateMaxSize(max) {
	if (this.value > max) {
		this.value = max;
		this.focus();

		return false;
	}

	return true;
}

inputWidth.addEventListener('blur', function(e){
	if (!validateMaxSize.call(this, maxWidth)) {
		alert("Maximum width is " + maxWidth);
	}
});

inputHeight.addEventListener('blur', function(e){
	if (!validateMaxSize.call(this, maxWidth)) {
		alert("Maximum height is " + maxWidth);
	}
});

canvas.addEventListener('click', function(e){
	var cell = e.target;

	if (cell.classList.contains('painted')) { // erase color if the cell is already painted
		cell.style.backgroundColor = '#fff';
		cell.className = '';
	} else { // paint color
		cell.style.backgroundColor = inputColor.value;
		cell.className = 'painted';
	}
});

// When size is submitted by the user, call makeGrid()
btnSubmit.addEventListener('click', function(e){
	e.preventDefault();
	makeGrid(inputWidth.value, inputHeight.value);
});