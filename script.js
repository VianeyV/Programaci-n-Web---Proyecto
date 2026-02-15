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

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

function comprar(nombre) {
    Swal.fire({
        title: '¡Excelente elección!',
        text: `Has añadido ${nombre} a tu carrito inteligente.`,
        icon: 'success',
        confirmButtonColor: '#0077B6'
    });
}


let carritoCount = 0;

// Abrir y cerrar carrito
function toggleCart() {
    const cart = document.getElementById("cart-modal");
    if (cart.style.display === "none" || cart.style.display === "") {
        cart.style.display = "flex";
    } else {
        cart.style.display = "none";
    }
}

// Cerrar carrito con la X
document.getElementById("close-cart-btn")?.addEventListener("click", toggleCart);

// Función de compra 
function comprar(nombre) {
    carritoCount++;
    document.getElementById("cart-count").innerText = carritoCount;
    Swal.fire({
        title: '¡Añadido!',
        text: `${nombre} ya está en tu carrito.`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
    });
}
