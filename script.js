// Sample data for initial testing
const initialDonations = [
    { name: "Prashant patil", quantity: 5 },
    { name: "sakshi ", quantity: 10 },
    // Add more sample donations here if needed
  ];
  
  // Function to display the list of donations
  function displayDonations(donations) {
      const donationList = document.getElementById("donation-items");
      donationList.innerHTML = "";
  
      donations.forEach((donation) => {
          const listItem = document.createElement("li");
          listItem.textContent = `${donation.name} donated ${donation.quantity} kg of dog food`;
          donationList.appendChild(listItem);
      });
  }
  
  // Handle form submission
  document.getElementById("donate-btn").addEventListener("click", function (event) {
      event.preventDefault();
  
      const donorName = document.getElementById("donor-name").value;
      const dogFoodQuantity = parseInt(document.getElementById("dog-food-quantity").value, 10);
  
      // Perform validation if needed
  
      // Sample donation object
      const donation = {
          name: donorName,
          quantity: dogFoodQuantity,
      };
  
      // Add the new donation to the list of donations
      initialDonations.push(donation);
  
      // Display the updated list of donations
      displayDonations(initialDonations);
  
      // Reset the form
      document.getElementById("donation-form").reset();
  });
  
  // Initial display of donations on page load
  window.addEventListener("load", function () {
      displayDonations(initialDonations);
  });
  