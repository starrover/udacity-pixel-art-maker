// select elements
const btnSubmit = document.querySelector('#button_submit');
const inputWidth = document.querySelector('#input_width');
const inputHeight = document.querySelector('#input_height');
const inputColor = document.querySelector('#colorPicker');
const canvas = document.querySelector('#pixel_canvas');
const maxWidth = 30, maxHeight = 30;

// Function to convert rgb color to hex format
// code credit to
// https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value
function rgb2hex(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }

    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

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
	for (let i = 0; i < height; i++) {
	    // Inserts 10 rows into the table
	    const row = canvas.insertRow(i);
	    for (let j = 0; j < width; j++) {
	        // Inserts 10 cells into each of the rows
	        const cell = row.insertCell(j);
	        cell.className = 'cell';
	        cell.style.backgroundColor = '#fff';
	        cell.addEventListener('click', paintCell);
	    }
	}
}

function paintCell(e) {
	var cell = e.target;

	if (rgb2hex(cell.style.backgroundColor) != inputColor.value) {
		cell.style.backgroundColor = inputColor.value;
	} else {
		cell.style.backgroundColor = '#fff';
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

// When size is submitted by the user, call makeGrid()
btnSubmit.addEventListener('click', function(e){
	e.preventDefault();
	makeGrid(inputWidth.value, inputHeight.value);
});