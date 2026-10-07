document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation
    const navLinks = document.querySelector(".nav-links");

    const menuButton = document.createElement("button");
    menuButton.classList.add("menu-button");
    menuButton.innerHTML = "☰";

    document.querySelector(".navbar").appendChild(menuButton);

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close mobile menu after clicking a link
    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });


    // Scroll reveal animation
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show-section");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });

});