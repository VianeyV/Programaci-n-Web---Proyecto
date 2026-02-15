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


// 1. Lógica para el botón de Finalizar Compra
document.getElementById("btn-go-checkout")?.addEventListener("click", function(e) {
    const btn = this;
    
    //Crear el icono
    const flyingCart = document.createElement('i');
    flyingCart.className = 'fa-solid fa-cart-shopping cart-animation-icon';
    
    // posición exacta en la pantalla
    const rect = btn.getBoundingClientRect();
    
    // Por si acaso 
    Object.assign(flyingCart.style, {
        position: 'fixed',
        top: rect.top + 'px',
        left: rect.left + 'px',
        color: '#0077B6',
        fontSize: '2rem',
        zIndex: '999999'
    });
    
    // Pa que no tape el modal
    document.body.appendChild(flyingCart);

    // Feedback en el botón
    const originalText = btn.innerText;
    btn.innerText = "¡Enviando!";
    btn.style.opacity = "0.7";

    // Finalizar proceso
    setTimeout(() => {
        flyingCart.remove();
        
        // Cerrar el carrito ANTES de la alerta para que no estorbe
        if (typeof toggleCart === 'function') toggleCart();

        Swal.fire({
            title: 'Pedido Despachado',
            text: 'Tu carrito ha salido volando hacia tu dirección.',
            icon: 'success',
            confirmButtonColor: '#0077B6'
        });

        // Resetear valores
        if (document.getElementById("cart-count")) {
            carritoCount = 0;
            document.getElementById("cart-count").innerText = "0";
        }
        btn.innerText = originalText;
        btn.style.opacity = "1";
    }, 1200);
});

function comprar(nombre) {
    carritoCount++;
    document.getElementById("cart-count").innerText = carritoCount;

    const btnEvent = event.currentTarget;
    if (btnEvent && btnEvent.classList.contains('add-to-cart')) {
        btnEvent.style.setProperty('--background-scale', '1.1');
        setTimeout(() => btnEvent.style.setProperty('--background-scale', '1'), 200);
    }

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

// Asegurar que el boton de cerrar funcione correctamente
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("close-cart-btn")?.addEventListener("click", toggleCart);
});