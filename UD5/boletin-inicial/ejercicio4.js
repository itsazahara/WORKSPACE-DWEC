document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("inner").addEventListener("click", (event) => {
        alert("Se ha realizado la propagación normal");
    }, true);
});