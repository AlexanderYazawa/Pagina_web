var MiModulo = MiModulo || {};

MiModulo.mostrarOcultarSeccion = function (seccionId) {
    var seccion = document.getElementById(seccionId);

    if (!seccion) {
        console.error("La sección con el ID '" + seccionId + "' no existe.");
        return;
    }

    if (window.getComputedStyle(seccion).display === "none") {
        seccion.style.display = "block";
    } else {
        seccion.style.display = "none";
    }
};
