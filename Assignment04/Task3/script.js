// your js code goes here

function toggleVisibility() {

    let paragraph = document.getElementById("useless-paragraph");
    if (paragraph.style.display === "none") {

        // Show paragraph
        paragraph.style.display = "block";

    } else {

        // Hide paragraph
        paragraph.style.display = "none";
    }
}