// Your code here
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
        console.log("left");
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
        console.log("right");
    }
});


function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);


    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

