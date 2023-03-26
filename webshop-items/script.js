const root = document.querySelector(":root");
const body = document.querySelector(".wrapper");
//~ scroll animation
body.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  //when scrolled 50px
  if (body.scrollTop > 50) {
    root.style.setProperty("--headerColor", "#3d5a8075");
    root.style.setProperty("--headerBlur", "10px");
    root.style.setProperty("--headerShadowClr", "#00000042");
  }
  //when top
  else {
    root.style.setProperty("--headerColor", "#3d5a8000");
    root.style.setProperty("--headerBlur", "0px");
    root.style.setProperty("--headerShadowClr", "rgba(0, 0, 0, 0)");
  }
}

console.log("tesing");

let images = document.querySelectorAll(".image");
let displayImage = document.querySelector(".mainimage");
displayImage.src = images[0].getAttribute("image");

for (let i = 0; i < images.length; i++) {
  images[i].style.backgroundImage = `url(${images[i].getAttribute("image")})`;
}

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", () => {
    console.log("clicked");
    displayImage.src = `${images[i].getAttribute(
      "image"
    )}`;
  });
}
