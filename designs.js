// select elements
const btnSubmit = document.querySelector('#button_submit');
const inputWidth = document.querySelector('#input_width');
const inputHeight = document.querySelector('#input_height');
const inputColor = document.querySelector('#colorPicker');
const canvas = document.querySelector('#pixel_canvas');

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
	for (let row=0; row < height; row++) {
		var node = document.createElement('tr');
		canvas.appendChild(node);

		for (let col=0; col < width; col++)  {
			var cell = document.createElement('td');
			cell.className = 'cell';
			canvas.querySelector('tr:last-child').appendChild(cell);
		}
	}
}

// When size is submitted by the user, call makeGrid()
btnSubmit.addEventListener('click', function(e){
	e.preventDefault();
	makeGrid(inputWidth.value, inputHeight.value);
});

//paint cell with selected color when clicked
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