document.addEventListener("DOMContentLoaded", function () {
    let count = 0;
    document.getElementById("clickSpan").addEventListener("click", () => {
        count++;
        document.getElementById("clickCount").textContent = count;
    });
});