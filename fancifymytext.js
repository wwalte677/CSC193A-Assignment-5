// Function to increase font size
function makeBigger() {
    alert("Hello, world!");
    var textArea = document.getElementById("mainText");
    textArea.style.fontSize = "24pt";
}

// Function to handle the radio button styles
function applyStyles() {
    var textArea = document.getElementById("mainText");
    var fancyRadio = document.getElementById("fancy");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        // Revert
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to uppercase text and add suffix to sentences
function mooify() {
    var textArea = document.getElementById("mainText");
    var text = textArea.value;
    text = text.toUpperCase();
    var parts = text.split(".");
    textArea.value = parts.join("-MOO.");
}
