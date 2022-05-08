let grid = document.querySelector('.grid');
let square = document.createElement('div');
    square.className = 'square';
let sizeButton = document.createElement('button');
    sizeButton.textContent = 'Choose Grid Size';
    document.body.appendChild(sizeButton);

function removeChildren() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    };
};

















sizeButton.addEventListener('click', function () {
    let value = +prompt('Enter a number < 100', 16);
    if (value % 2 === 0 && value <= 100) {
        removeChildren();
        function cloneSquare() {
            for (i = 1; i <= value; ++i) {
                let clone;
                clone = square.cloneNode();
                clone.classList.add(i);
                grid.appendChild(clone);
            };
        };
        cloneSquare();
    };
});
/* cloneSquare() CALL THIS FUNCTION IN A CLICK EVENT ON THE BUTTON USING PROMPT VALUE FOR LOOP*/
