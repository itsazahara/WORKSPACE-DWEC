window.onload = function crear_lista() {
    let list = document.createElement('ol');
    let numElements = prompt("Introduce el numero de elementos que tendrá la lista");

    if (numElements != null) {
        for (let i = 1; i <= parseInt(numElements); i++) {
            let element = document.createElement('li');
            element.textContent = "Elemento " + i;
            list.appendChild(element);
        }
    } else {
        console.error("Introduce un número válido");
    }

    document.getElementsByTagName("body")[0].appendChild(list);
}