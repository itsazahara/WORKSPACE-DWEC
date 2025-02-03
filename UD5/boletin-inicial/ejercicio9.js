document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".hoverEffect").forEach(el => {
        el.addEventListener("mouseover", () => el.style.backgroundColor = "lightpink");
        el.addEventListener("mouseout", () => el.style.backgroundColor = "");
    });
});