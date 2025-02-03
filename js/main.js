(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    $(document).ready(function () {
        // Debugging: Check if the button exists
        if ($("#openPopupBtn").length) {
            console.log("Button found!");

            // Add click event
            $("#openPopupBtn").on("click", function () {
                console.log("Button clicked! Opening popup...");
                // window.open("popup.html", "PopupWindow", "width=600,height=500");
                fetch("popup.html")
                    .then(response => response.text())  // Get the content of popup.html
                    .then(data => {
                        popupContent.innerHTML = data;  // Insert the content into the modal
                        modal.style.display = "block";   // Show the modal
                    })
                    .catch(error => console.error("Error loading popup content:", error));
            });
        } else {
            console.log("Button NOT found!");
        }
    });


})(jQuery);


// document.addEventListener('DOMContentLoaded', function () {
//     const openBtn = document.getElementById('openPopupBtn');
//     const popup = document.getElementById('popup');
//     const closeBtn = popup.querySelector('.close');

//     openBtn.addEventListener('click', function () {
//         popup.style.display = 'flex';
//     });

//     closeBtn.addEventListener('click', function () {
//         popup.style.display = 'none';
//     });

//     // Close popup when clicking outside
//     window.addEventListener('click', function (event) {
//         if (event.target === popup) {
//             popup.style.display = 'none';
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.getElementById('openPopupBtn');
    const popup = document.getElementById('popup');
    const closeBtn = popup.querySelector('.close'); // Corrected selector

    if (!openBtn || !popup || !closeBtn) {
        console.error("Element missing: Make sure #openPopupBtn, #popup, and .close exist in your HTML.");
        return;
    }

    openBtn.addEventListener('click', function () {
        popup.style.display = 'flex'; // Ensure popup is shown
    });

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none'; // Hide popup
    });

    // Close popup when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});



// document.addEventListener('DOMContentLoaded', function () {
//     const openBtn = document.getElementById('openPopupBtn');
//     const popup = document.getElementById('popup');
//     const closeBtn = popup.querySelector('.close');

//     openBtn.addEventListener('click', function () {
//         popup.classList.add('show'); // Apply show class to animate
//     });

//     closeBtn.addEventListener('click', function () {
//         popup.classList.remove('show'); // Remove show class to animate out
//     });

//     // Close when clicking outside the popup content
//     window.addEventListener('click', function (event) {
//         if (event.target === popup) {
//             popup.classList.remove('show');
//         }
//     });
// });