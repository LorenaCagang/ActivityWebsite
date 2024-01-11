function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Get the elements you want to apply the transition to
const profileSection = document.getElementById("profile");
const titleElements = document.querySelectorAll(".Title h1, .Title h2, .section__text__p2");

// Add a class to enable the transition
profileSection.classList.add("transition-enabled");
titleElements.forEach(element => element.classList.add("transition-enabled"));

// Now, when you want to show the elements (for example, on some user interaction)
profileSection.classList.add("show");
titleElements.forEach(element => element.classList.add("show"));

// Get the form elements
const formInputs = document.querySelectorAll('.contact-form input[type="text"], .contact-form input[type="email"], .contact-form textarea');
const formButton = document.querySelector('.contact-form button');

// Add event listeners for hover effect
formInputs.forEach(input => {
  input.addEventListener('mouseenter', handleHover);
  input.addEventListener('mouseleave', handleHover);
});

formButton.addEventListener('mouseenter', handleHover);
formButton.addEventListener('mouseleave', handleHover);

// Function to toggle hover class
function handleHover() {
  this.classList.toggle('hover-effect');
}
