document.addEventListener("DOMContentLoaded", function () {
    // Get the button by its ID
    let popupButton = document.getElementById("openPopupBtn");

    // Add click event listener
    if (popupButton) {
        popupButton.addEventListener("click", function () {
            window.open("popup.html", "PopupWindow", "width=600,height=500");
        });
    }
});