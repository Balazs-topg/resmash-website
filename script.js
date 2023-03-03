//* Header animations and edits
const root = document.querySelector(":root");
const body = document.querySelector(".wrapper");
//~ scroll animation
body.onscroll = function() {scrollFunction()};
function scrollFunction() {
    //when scrolled 50px
    if (body.scrollTop > 50) {
        root.style.setProperty('--headerColor', "#3d5a8075");
        root.style.setProperty('--headerBlur', "10px");
        root.style.setProperty("--headerShadowClr", "#00000042")
    }
    //when top
    else {
        root.style.setProperty('--headerColor', "#3d5a8000");
        root.style.setProperty('--headerBlur', "0px");
        root.style.setProperty("--headerShadowClr", "rgba(0, 0, 0, 0)")
    }
}
//~ burgir
const burgirButtonMenu = document.querySelector(".burgir-menue")
const burgirButton = document.querySelector(".burgir");
const burgirContent = document.querySelector(".burgir-content")
burgirButtonMenu.addEventListener("click", function() {burgirFunc()});
burgirButton.addEventListener("click", function() {burgirFunc()});
function burgirFunc(){
    console.log("burgir was pressed")
    burgirContent.classList.toggle("hidden")
    body.classList.toggle("hidden")
}


const bookCallBtn = document.querySelector(".book-call")
bookCallBtn.addEventListener("click", () => {
    body.scrollTo({
        top: 2000,
        behavior: 'smooth'
      });
})
const learnMore = document.querySelector(".learn-more")
learnMore.addEventListener("click", () => {
    body.scrollTo({
        top: 1200,
        behavior: 'smooth'
      });
})


body.addEventListener("scroll", () => {
    console.log(body.scrollTop)
})
// This is how we operate: 1200
