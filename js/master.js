// Animate the feature section
const observer = new IntersectionObserver((entries) => {
    entries.forEach((el) => {
        if (el.isIntersecting) {
            el.target.classList.add("showed");
        }
    });
});

let toAnimate = document.querySelectorAll(".hidden");

toAnimate.forEach((el) => observer.observe(el));
