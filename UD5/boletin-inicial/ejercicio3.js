document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", (event) => {
        document.getElementById("mousePosition").textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
    });
});