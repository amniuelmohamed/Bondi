// Animate the feature section
const observerForHidden = new IntersectionObserver((entries) => {
    entries.forEach((el) => {
        if (el.isIntersecting) {
            el.target.classList.add("showed");
        }
    });
});

let toAnimate = document.querySelectorAll(".hidden");
toAnimate.forEach((el) => observerForHidden.observe(el));

// Change the active menu link on scroll
let sections = document.querySelectorAll("section");
let menuItems = Array.from(
    document.querySelectorAll(".navbar .navbar-nav .nav-link")
);
window.addEventListener("scroll", () => {
    sections.forEach((sec, idx) => {
        // check if it is the last section
        if (
            sec.offsetTop + sec.offsetHeight ===
            window.scrollY + window.innerHeight
        ) {
            menuItems
                .filter((el) => el.classList.contains("active"))
                .map((el) => el.classList.remove("active"));
            menuItems[sections.length - 1].classList.add("active");
        } else if (sec.offsetTop <= document.documentElement.scrollTop + 300) {
            menuItems
                .filter((el) => el.classList.contains("active"))
                .map((el) => el.classList.remove("active"));
            menuItems[idx].classList.add("active");
        }
    });
});

// Swiper Slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});
