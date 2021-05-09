var clicks = 0;
var lastClick = [0, 0];
console.log('Hello world');
document.getElementById('canvas').addEventListener('touchstart', drawLine_touch, false);
document.getElementById('canvas').addEventListener('click', drawLine_click, false);

var x;
var y;

// This code is for touch events

function getCursorPosition(e) {


    if (e.pageX != undefined && e.pageY != undefined) {
        x = e.pageX;
        y = e.pageY;
    } else {
        x = e.targetTouches[0].pageX;
        y = e.targetTouches[0].pageY;
    }
    console.log(x, y);
    return [x, y];
}

function drawLine_touch(e) {
    context = this.getContext('2d');

    x = getCursorPosition(e)[0] - this.offsetLeft;
    y = getCursorPosition(e)[1] - this.offsetTop;

    if (clicks != 1) {
        clicks++;
    } else {
        context.beginPath();
        context.moveTo(lastClick[0], lastClick[1]);
        context.lineTo(x, y, 6);

        context.strokeStyle = '#000000';
        context.stroke();

        clicks = 0;
    }

    lastClick = [x, y];
}

// This code os for click events


function getCursorPosition1(e) {

    if (e.pageX != undefined && e.pageY != undefined) {
        x = e.pageX;
        y = e.pageY;
    } else {
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return [x, y];
}

function drawLine_click(e) {
    context = this.getContext('2d');

    x = getCursorPosition1(e)[0] - this.offsetLeft;
    y = getCursorPosition1(e)[1] - this.offsetTop;

    if (clicks != 1) {
        clicks++;
    } else {
        context.beginPath();
        context.moveTo(lastClick[0], lastClick[1]);
        context.lineTo(x, y, 6);

        context.strokeStyle = '#000000';
        context.stroke();

        clicks = 0;
    }

    lastClick = [x, y];
}



