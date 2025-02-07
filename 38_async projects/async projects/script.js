// generating random colors
const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];

    }
    return color
}
let colorinterval;
colorchanger = function () {
    if (!colorinterval) { colorinterval = setInterval(changecolor, 100);

     }
    function changecolor() {
        document.body.style.backgroundColor = randomColor()

    }
}

stopcolor = function () {
    clearInterval(colorinterval)
    colorinterval = null;
}
document.getElementById('start').addEventListener('click', colorchanger)
document.getElementById('stop').addEventListener('click', stopcolor)