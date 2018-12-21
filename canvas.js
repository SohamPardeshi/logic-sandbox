//let dpi = window.devicePixelRatio;
//let canvas = document.getElementById("canvas");
//let ctx = canvas.getContext('2d');

var premises = [];
premises[0] = new Step(1, tmp, "Premise");
premises[1] = new Step(2, "A \\lor B", "Premise");
    
var goals = [];


// Fixes the pixels to make Canvas less blurry
function fixDPI() {
    let style = getComputedStyle(canvas);
    let height = style.getPropertyValue("height").slice(0, -2);
    let width = style.getPropertyValue("width").slice(0, -2);
    canvas.setAttribute('height', height * dpi);
    canvas.setAttribute('width', width * dpi);
}


// Render the proof on the Canvas
function draw() {
    let area = document.getElementById("proof");
    for(var i = 0; i < premises.length; i++) {
        let row = premises[i];
        area.appendChild(row.getNode());
    }
}

// Returns if the last thing in the premises is the same as the first in the goals
function isDone() {
    let lastPremise = premises[premises.length - 1];
    let firstGoal = goals[0];
    return lastPremise.equals(firstGoal);
}


//fixDPI();
draw();