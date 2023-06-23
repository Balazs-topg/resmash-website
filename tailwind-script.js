//* IMPORT MODULES
//! NOT IN USE
const contentImport = document.querySelectorAll("[content-import]");

async function loadModules() {
  contentImport.forEach(async (element) => {
    let file = element.getAttribute("content-import");
    const resp = await fetch(file);
    const html = await resp.text();
    const DOMparser = new DOMParser();
    const htmlDoc = DOMparser.parseFromString(html, "text/html").body;
    element.appendChild(htmlDoc);
  });
}
loadModules();

//* SCROLL ANIMATIONS
window.addEventListener("scroll", function () {
  let parallaxElements = document.querySelectorAll("[scroll-speed]");
  for (let element of parallaxElements) {
    let speed = parseFloat(element.getAttribute("scroll-speed"));
    let yOffset = window.pageYOffset * speed;
    element.style.transform = "translateY(" + yOffset + "px)";
  }
});
window.addEventListener("scroll", function () {
  let parallaxElements = document.querySelectorAll("nav");
  for (let element of parallaxElements) {
    let yOffset = window.pageYOffset * 0.03;
    if (yOffset < 20) {
      element.style.borderRadius = `${yOffset * 0.07}rem`;
    } else {
      element.style.borderRadius = "1.4rem";
    }
  }
});
window.addEventListener("scroll", function () {
  let parallaxElements = document.querySelectorAll(".nav-wrapper");
  for (let element of parallaxElements) {
    let yOffset = window.pageYOffset * 0.04;
    if (yOffset < 20) {
      element.style.padding = `${(yOffset * 0.5) / 16}rem`;
    } else {
      element.style.padding = "0.62375rem";
    }
  }
});

//* MOBILE MENUE
let navBackground = document.querySelector(".nav-background");
let menueCheckbox = document.querySelector(".menue-checkbox");
let navMobile = document.querySelector(".nav-mobile");
function closeMenue() {
  menueCheckbox.checked = false;

  document.body.classList.remove("overflow-hidden");
  navMobile.classList.add("animate-close-menue");
  navBackground.classList.add("animate-fade-out");
  setTimeout(() => {
    navMobile.classList.remove("animate-close-menue");
    navMobile.classList.add("hidden");
    navBackground.classList.add("hidden");
    navBackground.classList.remove("animate-fade-out");
  }, 400);
}
function openMenue() {
  menueCheckbox.checked = true;

  document.body.classList.add("overflow-hidden");
  navMobile.classList.remove("hidden");
  navMobile.classList.add("animate-open-menue");

  navBackground.classList.remove("hidden");
  navBackground.classList.add("animate-fade-in");

  setTimeout(() => {
    navMobile.classList.remove("animate-open-menue");
    navBackground.classList.remove("animate-fade-in");
  }, 400);
}

navMobile.addEventListener("click", () => {
  closeMenue();
});

navBackground.addEventListener("click", () => {
  closeMenue();
});

menueCheckbox.addEventListener("input", () => {
  if (menueCheckbox.checked == true) {
    openMenue();
  }
  if (menueCheckbox.checked == false) {
    closeMenue();
  }
});

//* NAVIGATION

const learnMoreSection = document.querySelector("[page-section=learn-more]");
const contactSection = document.querySelector("[page-section=contact]");
const form = document.querySelector("form");
const formMenue = document.querySelector(".form-menue");
const menueformBg = document.querySelector(".menueform-bg");

const formBtn = document.querySelectorAll("[btn-action=open-form]");
const learnMoreBtn = document.querySelectorAll("[btn-action=learn-more]");
const contactBtn = document.querySelectorAll("[btn-action=contact]");

formBtn.forEach((element) => {
  element.addEventListener("click", () => {
    if (formIsOpened) {
      closeForm();
    } else {
      openForm();
    }
  });
});

learnMoreBtn.forEach((element) => {
  element.addEventListener("click", () => {
    learnMoreSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
contactBtn.forEach((element) => {
  element.addEventListener("click", () => {
    contactSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

let formIsOpened = false;

function openForm() {
  formIsOpened = true;
  document.body.classList.remove("md:overflow-auto");
  setTimeout(() => {
    document.body.classList.add("overflow-hidden");
  }, 0.0000000000001);
  form.classList.remove("hidden");
  formMenue.classList.add("animate-open-form");

  menueformBg.classList.add("animate-fade-in");

  setTimeout(() => {
    formMenue.classList.remove("animate-open-form");
    menueformBg.classList.remove("animate-fade-in");
  }, 400);
}
function closeForm() {
  formIsOpened = false;

  document.body.classList.remove("overflow-hidden");
  formMenue.classList.add("animate-close-form");
  menueformBg.classList.add("animate-fade-out");
  setTimeout(() => {
    formMenue.classList.remove("animate-close-form");
    //  navMobile.classList.add("hidden");
    form.classList.add("hidden");
    menueformBg.classList.remove("animate-fade-out");
  }, 400);
}

menueformBg.addEventListener("click", () => {
  let input = confirm("are you sure you want to discard your changes?");
  if (input === true) {
    closeForm();
  }
});
spinBoxxx = document.querySelector(".spin-boxxx");
rangeCounterrr = document.querySelector(".range-counterrr");
console.log(rangeCounterrr);
rangeCounterrr.addEventListener("input", () => {
  spinBoxxx.value = rangeCounterrr.value;
});
spinBoxxx.addEventListener("input", () => {
  rangeCounterrr.value = spinBoxxx.value;
});

//* TERMS

const termsBtn = document.querySelectorAll("[btn-action=termsBtn]");
termsBtn.addEventListener("click",()=>{
  
})