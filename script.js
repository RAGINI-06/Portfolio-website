// Toggle Dark Mode functionality
const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;

themeToggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    themeToggleButton.textContent = "Toggle Light Mode";
  } else {
    themeToggleButton.textContent = "Toggle Dark Mode";
  }
});

// Smooth hover animation for skills
const skillCards = document.querySelectorAll('.skill');

skillCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = "scale(1)";
  });
});



  