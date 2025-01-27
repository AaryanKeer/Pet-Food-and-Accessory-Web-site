document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? "block" : "none";
        });
        dots.forEach((dot, index) => {
            dot.className = dot.className.replace(" active", "");
            if (index === slideIndex) {
                dot.className += " active";
            }
        });
        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }

    function changeSlide(n) {
        slideIndex += n;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        showSlides();
    }

    function currentSlide(n) {
        slideIndex = n - 1;
        showSlides();
    }

    // Initialize the slider
    showSlides();

    // Attach event listeners
    document.querySelectorAll(".prev").forEach(button => {
        button.addEventListener("click", () => changeSlide(-1));
    });

    document.querySelectorAll(".next").forEach(button => {
        button.addEventListener("click", () => changeSlide(1));
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => currentSlide(index + 1));
    });
});
