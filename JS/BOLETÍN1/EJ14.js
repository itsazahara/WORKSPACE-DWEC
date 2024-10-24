function confirmar() {
    let confirmacion = confirm("¿Estás seguro de que deseas eliminar?");
    
    if (confirmacion) {
        alert("Ha sido eliminado.");
    } else {
        alert("La eliminación ha sido denegada.");
    }
}