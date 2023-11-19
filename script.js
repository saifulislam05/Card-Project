document.addEventListener("DOMContentLoaded", function () {

  const resetBtn = document.getElementById("resetBtn");

  // Check for previously stored data in local storage
  const storedUserData = JSON.parse(localStorage.getItem("userData")) || {};

  if (Object.keys(storedUserData).length > 0) {
    updateUI(storedUserData);
  } else {
    getUserInput();
  }


  resetBtn.addEventListener("click", function () {
    // Clear stored data from local storage
    localStorage.removeItem("userData");

    // Reset UI
    document.getElementById("firstName").textContent = "N/A";
    document.getElementById("lastName").textContent = "N/A";
    document.getElementById("country").textContent = "N/A";
    document.getElementById("phone").textContent = "N/A";
    document.getElementById("state").textContent = "N/A";
    document.getElementById("city").textContent = "N/A";
    document.getElementById("village").textContent = "N/A";

    // Get user input again
    getUserInput();
  });

  function getUserInput() {
    const userData = {
      firstName: prompt("Enter your First Name"),
      lastName: prompt("Enter your Last Name"),
      country: prompt("Enter your Country Name"),
      phone: prompt("Enter your Phone Number"),
      state: prompt("Enter your State"),
      city: prompt("Enter your City"),
      village: prompt("Enter your Village"),
    };

    // Store user data in local storage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Update UI with the entered data
    updateUI(userData);
  }

  function updateUI(userData) {
    document.getElementById("firstName").textContent =
      userData.firstName || "N/A";
    document.getElementById("lastName").textContent =
      userData.lastName || "N/A";
    document.getElementById("country").textContent = userData.country || "N/A";
    document.getElementById("phone").textContent = userData.phone || "N/A";
    document.getElementById("state").textContent = userData.state || "N/A";
    document.getElementById("city").textContent = userData.city || "N/A";
    document.getElementById("village").textContent = userData.village || "N/A";
  }
});
