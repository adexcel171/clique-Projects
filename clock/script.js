// script.js

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Use jQuery to update the text content of the clock
  $("#clock").text(`${hours}:${minutes}:${seconds}`);
}

// Update the clock every second using jQuery
$(document).ready(function () {
  updateClock(); // Initial call to display clock immediately
  setInterval(updateClock, 1000); // Update every second
});
