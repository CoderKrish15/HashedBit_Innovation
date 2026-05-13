function swapTheme() {

    let app = document.getElementById("app");
    let button = document.getElementById("swap");

    // If current theme is day
    if (app.className === "day") {

        app.className = "night";
        button.className = "button_night";

    } 
    
    // If current theme is night
    else {

        app.className = "day";
        button.className = "button_day";
    }
}