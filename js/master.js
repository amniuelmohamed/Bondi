// Animate the feature section
let toAnimate = Array.from(document.querySelectorAll(".animate"));
window.addEventListener("scroll", () => {
    toAnimate.forEach((el, idx) => {
        if (
            window.innerHeight + window.scrollY >= el.offsetTop &&
            !el.classList.contains("showed")
        ) {
            // Add showed class to begin animation
            el.classList.add("showed");
            // Remove this element from the array because we dont need it anymore
            toAnimate.splice(idx, 1);
        }
    });
});
