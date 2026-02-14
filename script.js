function comprar(nombre) {
    alert("Has comprado: " + nombre);
}

//login
function abrirLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function cerrarLogin() {
    document.getElementById("loginModal").style.display = "none";
}

function iniciarSesion(event) {
    event.preventDefault();
    alert("Inicio de sesión exitoso");
    cerrarLogin();
}

window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target === modal) {
        cerrarLogin();
    }
};
