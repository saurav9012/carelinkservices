document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.querySelector(".close-btn");
    const modal = document.getElementById("popupModal");

    // Close the modal when the close button (×) is clicked
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Optional: Handle form submission (e.g., validate and send data to server)
    document.getElementById("serviceForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        console.log("Form submitted with data:", {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            service: document.getElementById("service").value
        });
        modal.style.display = "none";  // Close modal after submission
    });
});
