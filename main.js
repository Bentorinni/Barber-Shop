document.addEventListener("DOMContentLoaded", function () {
    // SLIDER OPINII
    const reviews = document.querySelectorAll(".review");
    let currentReview = 0;

    function showReview(index) {
        reviews.forEach((review, i) => {
            review.classList.remove("active");
            review.style.opacity = "0";
            review.style.transform = "translateX(-50%)";
        });

        reviews[index].classList.add("active");
        reviews[index].style.opacity = "1";
        reviews[index].style.transform = "translateX(0)";
    }

    document.getElementById("prev").addEventListener("click", function () {
        currentReview = (currentReview - 1 + reviews.length) % reviews.length;
        showReview(currentReview);
    });

    document.getElementById("next").addEventListener("click", function () {
        currentReview = (currentReview + 1) % reviews.length;
        showReview(currentReview);
    });

    // Automatyczne przewijanie opinii co 5 sekund
    setInterval(() => {
        currentReview = (currentReview + 1) % reviews.length;
        showReview(currentReview);
    }, 7000);

    // Burger menu

    document.querySelector('.burger').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.nav-links').classList.remove('active');
        });
    });

    // PŁYNNE POJAWIANIE SIĘ SEKCJI PRZY SCROLLU
    const sections = document.querySelectorAll(".section");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.classList.add("visible");
            }
        });
    }

    revealSections();
    window.addEventListener("scroll", revealSections);
});

