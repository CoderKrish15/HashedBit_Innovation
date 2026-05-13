function createDiv(width, height, text) {
    let container = document.getElementById("container");

    let newDiv = document.createElement("div");

    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    newDiv.textContent = text;
    newDiv.style.border = "1px solid black";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.alignItems = "center";
    newDiv.style.justifyContent = "center";
    container.appendChild(newDiv);
}

createDiv(200, 100, "Hello World");

window.createDiv = createDiv;