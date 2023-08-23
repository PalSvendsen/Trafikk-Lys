var redButton = document.getElementById("redButton");
var yellowButton = document.getElementById("yellowButton");
var greenButton = document.getElementById("greenButton");
var allLightsButton = document.getElementById("allLightsButton");
var clearLightsButton = document.getElementById("clearLightsButton");
var autoCycleButton = document.getElementById("autoCycleButton");
var stopAutoCycleButton = document.getElementById("stopAutoCycleButton");
var blinkYellowButton = document.getElementById("blinkYellowButton");

var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");

var autoCycleInterval;
var blinkYellowInterval;

function startAutoCycle() {
    clearInterval(autoCycleInterval);
    clearInterval(blinkYellowInterval);
    autoCycleInterval = setInterval(function() {
        circle1.style.backgroundColor = "red";
        circle2.style.backgroundColor = "gray";
        circle3.style.backgroundColor = "gray";
        setTimeout(function() {
            circle1.style.backgroundColor = "gray";
            circle2.style.backgroundColor = "yellow";
            circle3.style.backgroundColor = "gray";
        }, 500); // 0.5 second delay
        setTimeout(function() {
            circle1.style.backgroundColor = "gray";
            circle2.style.backgroundColor = "gray";
            circle3.style.backgroundColor = "green";
        }, 1000); // 1 second delay
    }, 1500); // 1.5-second cycle (1s + 0.5s)
}

autoCycleButton.addEventListener("click", startAutoCycle);

stopAutoCycleButton.addEventListener("click", function() {
    clearInterval(autoCycleInterval);
    clearInterval(blinkYellowInterval);
    circle1.style.backgroundColor = "gray";
    circle2.style.backgroundColor = "gray";
    circle3.style.backgroundColor = "gray";
});

redButton.addEventListener("click", function() {
    circle1.style.backgroundColor = "red";
    circle2.style.backgroundColor = "gray";
    circle3.style.backgroundColor = "gray";
});

yellowButton.addEventListener("click", function() {
    circle1.style.backgroundColor = "gray";
    circle2.style.backgroundColor = "yellow";
    circle3.style.backgroundColor = "gray";
});

greenButton.addEventListener("click", function() {
    circle1.style.backgroundColor = "gray";
    circle2.style.backgroundColor = "gray";
    circle3.style.backgroundColor = "green";
});

allLightsButton.addEventListener("click", function() {
    circle1.style.backgroundColor = "red";
    circle2.style.backgroundColor = "yellow";
    circle3.style.backgroundColor = "green";
});

clearLightsButton.addEventListener("click", function() {
    circle1.style.backgroundColor = "gray";
    circle2.style.backgroundColor = "gray";
    circle3.style.backgroundColor = "gray";
});

blinkYellowButton.addEventListener("click", function() {
    clearInterval(autoCycleInterval);
    if (blinkYellowInterval) {
        clearInterval(blinkYellowInterval);
        blinkYellowInterval = null;
        circle2.style.backgroundColor = "gray";
    } else {
        circle2.style.backgroundColor = "yellow";
        blinkYellowInterval = setInterval(function() {
            circle2.style.backgroundColor =
                circle2.style.backgroundColor === "gray" ? "yellow" : "gray";
        }, 500);
    }
});