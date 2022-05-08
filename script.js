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
    let s = 100 / value;
    let fr = '1fr ';
    if (value <= 100) {
        p = 1;
        i = 1;
        removeChildren();
        function cloneSquare() {
            for (i = 1; i <= value * value; ++i) {
                let clone;
                clone = square.cloneNode();
                clone.style.aspectRatio = '1/1';
               /*  clone.style.width = `${s}%`;
                clone.style.height = `${s}%`; */
                clone.style.border = '.5px solid #000000';
                grid.appendChild(clone);
            };
            for (p = 1; p < value; p++)
            fr += '1fr ';
            grid.style.gridTemplateColumns = fr;
            console.log(fr)
        }; 
        cloneSquare();
    };
});
