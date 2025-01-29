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


    // Facts counter
    // $('[data-toggle="counter-up"]').counterUp({
    //     delay: 10,
    //     time: 2000
    // });


    // // Date and time picker
    // $('.date').datetimepicker({
    //     format: 'L'
    // });
    // $('.time').datetimepicker({
    //     format: 'LT'
    // });


    // // Testimonials carousel
    // $(".testimonial-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     center: true,
    //     margin: 25,
    //     dots: true,
    //     loop: true,
    //     nav: false,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         768: {
    //             items: 2
    //         },
    //         992: {
    //             items: 3
    //         }
    //     }
    // });

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

$(document).ready(function () {
    const modal = document.getElementById('popupModal');
    const popupContent = document.getElementById('popupContent');
    const closeBtn = document.querySelector('.close-btn');

    // Close modal when clicking the close button
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    // Close modal when clicking outside
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Check if button exists and add click handler
    if ($("#openPopupBtn").length) {
        console.log("Button found!");

        $("#openPopupBtn").on("click", function () {
            console.log("Button clicked! Loading popup content...");

            fetch("popup.html")
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    popupContent.innerHTML = data;
                    modal.style.display = "block";
                })
                .catch(error => {
                    console.error("Error loading popup content:", error);
                    popupContent.innerHTML = "Error loading content. Please try again.";
                    modal.style.display = "block";
                });
        });
    } else {
        console.error("Button not found!");
    }
});

