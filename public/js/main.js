document.addEventListener('DOMContentLoaded', () => {
    console.log("VoleyGest iniciado correctamente.");

    // 1. Si estamos en usuarios.html, cargamos los datos automáticamente
    if (document.querySelector('.user-table')) {
        obtenerUsuarios();
    }

    // 2. Si estamos en registrar-usuario.html, vinculamos el formulario al evento submit
    const formRegistro = document.querySelector('.config-box-register form');
    if (formRegistro) {
        formRegistro.addEventListener('submit', registrarJugador);
    }
});