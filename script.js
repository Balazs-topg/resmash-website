const root = document.querySelector(":root");
const body = document.querySelector(".wrapper");
body.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (body.scrollTop > 50) {
        root.style.setProperty('--headerColor', "#3d5a8075");
        root.style.setProperty('--headerBlur', "10px");
        root.style.setProperty("--headerShadowClr", "#00000042")
    }
    else {
        root.style.setProperty('--headerColor', "#3d5a8000");
        root.style.setProperty('--headerBlur', "0px");
        root.style.setProperty("--headerShadowClr", "rgba(0, 0, 0, 0)")
    }
}

const burgirButton = document.querySelector(".burgir");
const burgirContent = document.querySelector(".burgir-content")
burgirButton.addEventListener("click", function() {burgirFunc()});
function burgirFunc(){
    console.log("burgir was pressed")
    burgirContent.classList.toggle("hidden")
}

