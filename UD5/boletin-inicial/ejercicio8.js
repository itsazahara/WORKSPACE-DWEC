document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".infoField").forEach(input => {
        input.addEventListener("focus", () => {
            document.getElementById("infoMessage").textContent = `Rellenando: ${input.placeholder}`;
        });
        input.addEventListener("blur", () => {
            document.getElementById("infoMessage").textContent = "";
        });
    });
});