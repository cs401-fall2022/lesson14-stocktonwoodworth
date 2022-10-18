/**
 * This returns the string hello
 * @returns the String hello
 */
function hello() {
    return "Hello World";
}
;
/**
 * turns demo red
 */
function turnRed() {
    if (document != null) {
        var c = document.getElementById("demo").style.color;
        if (c === 'red') {
            document.getElementById("demo").style.color = "black";
        }
        else {
            document.getElementById("demo").style.color = "red";
        }
    }
}

let click = 0;

function spinClicked() {
    return click > 0;
}
/**
 * Spin object 360 degrees
 */
function spin() {
    if (document != null) {
        setInterval(function () {
            //object.style.transform += "rotate(3deg)";
            document.getElementById("demo").style.transform += "rotate(3deg)";
            click++;
        }, 1);
    }
}
export { hello, turnRed, spin, spinClicked };
//# sourceMappingURL=app.js.map
