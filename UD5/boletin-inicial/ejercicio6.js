document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("extraFields").addEventListener("change", (event) => {
        document.getElementById("hiddenFields").style.display = event.target.checked ? "block" : "none";
    });
});