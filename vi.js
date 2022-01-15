var canvas = document.getElementById("canvas-bubble-sort");
var ctx = canvas.getContext("2d");
var stickWidth = 5;
var stickBaseLength = 50;
var stickPadding = 2;

var orderedNumbers = [];
for (var i = 1; i <= 100; i++) {
    orderedNumbers.push(i);
}

var randomizedNumbers = orderedNumbers.slice(); 


function shuffle(randomizedNumbers) {
    var currentIndex = randomizedNumbers.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        
        temporaryValue = randomizedNumbers[currentIndex];
        randomizedNumbers[currentIndex] = randomizedNumbers[randomIndex];
        randomizedNumbers[randomIndex] = temporaryValue;
    }

    return randomizedNumbers;
}

randomizedNumbers = shuffle(randomizedNumbers);



function drawSticks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var c = 0; c < orderedNumbers.length; c++) {
        var stickX = (c * (stickWidth + stickPadding));
        var lengthExtender = randomizedNumbers[c] * 2;
        var stickLength = (stickBaseLength + lengthExtender)
        ctx.beginPath();
        ctx.rect((stickX + stickPadding), (298 - stickLength), stickWidth, stickLength);
        ctx.fillStyle = "#808080";
        ctx.fill();
        ctx.closePath();
    }
}


function bubbleSort() { 

    function bubbleSortPass(p) {

        if (randomizedNumbers[p] > randomizedNumbers[p + 1]) {
            var tempPos = randomizedNumbers[p];
            randomizedNumbers[p] = randomizedNumbers[p + 1];
            randomizedNumbers[p + 1] = tempPos;
            drawSticks();
        }

        if (p < randomizedNumbers.length) {
            setTimeout(function () {
                bubbleSortPass(p + 1);
            }, 5);
        } else {
            if (p >= randomizedNumbers.length) {
                setTimeout(function () {
                    bubbleSort();
                }, 5);
            }
        }
    }
    bubbleSortPass(0);
}



drawSticks();

document.getElementById("btnBubbleSort").onclick = function () {
}