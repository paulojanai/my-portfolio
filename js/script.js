//Link navbar smooth transition
const linksSection = document.querySelectorAll('.js-nav li a.link');

function scrollToSection (event) {
  event.preventDefault();

  const href = event.currentTarget.getAttribute('href');

  const section = document.querySelector(href);

  const initPosition = section.offsetTop;

window.scrollTo({
  top: initPosition,
  behavior:'smooth'
})  

  // console.log(initPosition);
}

linksSection.forEach(link => {
  link.addEventListener('click', scrollToSection);
})

// Scroll up show header
let oldValue = 0;
var element = document.getElementById("header");

// element.classList.add("header-fixed");
window.addEventListener('scroll', function (e) {

  // Get the new Value
  newValue = window.scrollY;
  // console.log(newValue);

  // Subtract the two and conclude
  if (oldValue - newValue < 0) {
    // console.log("Up");
    element.classList.add("show-header");
  } else if (oldValue - newValue > 0) {
    element.classList.remove("show-header");
    // console.log("Down");
  }

  if (newValue == 0) {
    return element.classList.remove("show-header");
  }

  // Update the old value
  oldValue = newValue;
})

//Menu mobile
function openMenu() {
  document.getElementById("menu-mobile").style.width = "100%";
}

function closeMenu() {
  document.getElementById("menu-mobile").style.width = "0%";
}