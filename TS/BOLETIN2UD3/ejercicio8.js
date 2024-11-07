window.onload = function crear_lista() {
    var list = document.createElement('ol');
    var numElements = prompt("Introduce el numero de elementos que tendrá la lista");
    if (numElements != null) {
        for (var i = 1; i <= parseInt(numElements); i++) {
            var element = document.createElement('li');
            element.textContent = "Elemento " + i;
            list.appendChild(element);
        }
    }
    else {
        console.error("Introduce un número válido");
    }
    document.getElementsByTagName("body")[0].appendChild(list);
};
