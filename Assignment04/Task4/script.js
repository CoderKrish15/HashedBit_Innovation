// Select elements
let textContainer = document.getElementById("text-container");

let colorBox = document.getElementById("colorbox");
let colorButton = document.getElementById("colorchange");

let fontSizeSlider = document.getElementById("fontsize");

let italicButton = document.getElementById("italic");
let underlineButton = document.getElementById("underline");
let boldButton = document.getElementById("bold");

let fontList = document.getElementById("list");

let getStyleButton = document.getElementById("getstyle");

let cssProps = document.getElementById("css-props");

// Change Text Color
colorButton.addEventListener("click", function () {

    let color = colorBox.value;

    textContainer.style.color = color;
});

// Change Font Size
fontSizeSlider.addEventListener("input", function () {

    textContainer.style.fontSize = fontSizeSlider.value + "px";
});

// Toggle Italic
italicButton.addEventListener("click", function () {

    if (textContainer.style.fontStyle === "italic") {

        textContainer.style.fontStyle = "normal";

    } else {

        textContainer.style.fontStyle = "italic";
    }
});

// Toggle Underline
underlineButton.addEventListener("click", function () {

    if (textContainer.style.textDecoration === "underline") {

        textContainer.style.textDecoration = "none";

    } else {

        textContainer.style.textDecoration = "underline";
    }
});

// Toggle Bold
boldButton.addEventListener("click", function () {

    if (textContainer.style.fontWeight === "bold") {

        textContainer.style.fontWeight = "normal";

    } else {

        textContainer.style.fontWeight = "bold";
    }
});

// Change Font Family
fontList.addEventListener("change", function () {

    textContainer.style.fontFamily = fontList.value;
});

// Show CSS Properties
getStyleButton.addEventListener("click", function () {

    let styles = `
color: ${textContainer.style.color};
font-size: ${textContainer.style.fontSize};
font-family: ${textContainer.style.fontFamily};
font-style: ${textContainer.style.fontStyle};
font-weight: ${textContainer.style.fontWeight};
text-decoration: ${textContainer.style.textDecoration};
`;

    cssProps.textContent = styles;
});