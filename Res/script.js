function toggleDropdown() {
  const dropdownContent = document.getElementById("myDropdown");
  dropdownContent.classList.toggle("show");
}

function closeDropdown() {
  const dropdownContent = document.getElementById("myDropdown");
  dropdownContent.classList.remove("show");
}

function redirectToPage() {
  var selectedCar = document.getElementById("cars").value;
  if (selectedCar === "volvo") {
    window.location.href = "volvo.html"; // Replace with the URL of the page for Volvo
  } else if (selectedCar === "saab") {
    window.location.href = "saab.html"; // Replace with the URL of the page for Saab
  } else if (selectedCar === "mercedes") {
    window.location.href = "mercedes.html"; // Replace with the URL of the page for Mercedes
  } else if (selectedCar === "audi") {
    window.location.href = "audi.html"; // Replace with the URL of the page for Audi
  }
}