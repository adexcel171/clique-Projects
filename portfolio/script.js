function toggleMenu() {
  const menu = document.getElementById("menu");

  // Toggle menu display only on mobile screens
  if (window.innerWidth <= 768) {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  }
}

// Reset menu display when resizing to desktop view
window.addEventListener("resize", () => {
  const menu = document.getElementById("menu");

  if (window.innerWidth > 768) {
    menu.style.display = "flex"; // Ensure menu is visible on desktop
  } else {
    menu.style.display = "none"; // Hide menu by default on mobile
  }
});

// Initialize AOS
AOS.init({
  duration: 1200, // Animation duration
});
