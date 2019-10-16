document.getElementById("red").onclick = function() {
    document.getElementById("output").style.color = '#f53b57';
    document.getElementById("output").style.backgroundColor = "#fffa65";
}
document.getElementById("grass").onclick = function() {
    document.getElementById("output").style.color = '#009432';
    document.getElementById("output").style.backgroundColor = "#f1c40f";
}
document.getElementById("blue").onclick = function() {
    document.getElementById("output").style.color = '#1B1464';
    document.getElementById("output").style.backgroundColor = "#ecf0f1";
}
document.getElementById("md-blue").onclick = function() {
    document.getElementById("output").style.color = '#2c3e50';
    document.getElementById("output").style.backgroundColor = "#7ed6df";
}
document.getElementById("yellow").onclick = function() {
    document.getElementById("output").style.color = '#f1c40f';
    document.getElementById("output").style.backgroundColor = "#ff3838";
}

function add() {
    var outputElement = document.getElementById("output");
    var computedFontSize = Number(window.getComputedStyle(document.getElementById("output")).getPropertyValue('font-size').match(/\d+/)[0]);

    computedFontSize = computedFontSize + 1;

    outputElement.style.fontSize = computedFontSize + "px";
}

function minus() {
    var outputElement = document.getElementById("output");
    var computedFontSize = Number(window.getComputedStyle(document.getElementById("output")).getPropertyValue('font-size').match(/\d+/)[0]);

    computedFontSize = computedFontSize - 1;

    outputElement.style.fontSize = computedFontSize + "px";
}

function uppercase() {
    var header = document.getElementById("output");
    header.innerHTML = header.innerHTML.toUpperCase();

}

function lowercase() {
    var header = document.getElementById("output");
    header.innerHTML = header.innerHTML.toLowerCase();
}
document.getElementById("grenze").onclick = function() {
    document.getElementById("output").style.fontFamily = 'Grenze';
}
document.getElementById("comic").onclick = function() {
    document.getElementById("output").style.fontFamily = 'Comic Sans MS';
}
document.getElementById("Indie Flower").onclick = function() {
    document.getElementById("output").style.fontFamily = 'Indie Flower';
}
document.getElementById("pacifico").onclick = function() {
    document.getElementById("output").style.fontFamily = 'Pacifico';
}
document.getElementById("Orbitron").onclick = function() {
    document.getElementById("output").style.fontFamily = "Orbitron";
}