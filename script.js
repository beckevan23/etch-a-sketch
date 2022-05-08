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

function changeColor() {
    clone.addEventListener('mouseover', function () {
        clone.style.background = `#${Math.floor(Math.random() * 999999)}`;
    })
}

sizeButton.addEventListener('click', function () {
    let value = +prompt('Enter a number < 150', 16);
    let s = 100 / value;
    let fr = '1fr ';
    if (value <= 150) {
        p = 1;
        i = 1;
        removeChildren();
        function cloneSquare() {
            for (i = 1; i <= value * value; ++i) {
                let clone;
                clone = square.cloneNode();
                clone.style.aspectRatio = '1/1';
                grid.appendChild(clone);
                clone.addEventListener('mouseover', function () {
                    clone.style.background = `#${Math.floor(Math.random() * 999999)}`;
                })
            };
            for (p = 1; p < value; p++)
            fr += '1fr ';
            grid.style.gridTemplateColumns = fr;
            console.log(fr)
        }; 
        cloneSquare();
    };
});

