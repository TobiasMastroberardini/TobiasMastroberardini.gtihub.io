// Obtener el encabezado, el nav y la sección de contacto
const header = document.getElementById('main-header');
const navLinks = document.querySelectorAll('nav ul li a');
const contactoSection = document.getElementById('contacto');

// Calcular la posición de la sección de contacto
const contactoOffsetTop = contactoSection.offsetTop - 200; // Ajusta según sea necesario

// Cambiar el color del encabezado y el texto del menú al acercarse a la sección de contacto
window.addEventListener('scroll', function () {
    if (window.scrollY >= contactoOffsetTop) {
        header.classList.add('scrolled'); // Agrega una clase al encabezado
        navLinks.forEach(link => {
            link.classList.add('scrolled'); // Agrega una clase a cada enlace del menú
        });
    } else {
        header.classList.remove('scrolled'); // Elimina la clase del encabezado
        navLinks.forEach(link => {
            link.classList.remove('scrolled'); // Elimina la clase de cada enlace del menú
        });
    }
});



function toggleForm() {
    var form = document.getElementById("contacto-formulario");
    var button = document.getElementById("toggle-form");

    if (form.style.display === "none" || form.style.display === '') {
        form.style.display = "block";
        button.textContent = "Ocultar formulario de contacto";
    } else {
        form.style.display = "none";
        button.textContent = "Mostrar formulario de contacto";
    }
}



/// Función para mostrar el mensaje
function mostrarMensaje(enviado) {
    var mensajeDiv = document.getElementById('mensaje');
    if (enviado) {
        mensajeDiv.innerHTML = "<p>¡El formulario se envió correctamente!</p>";
        mensajeDiv.style.color = "green"; // Estilo para el mensaje de éxito
    } else {
        mensajeDiv.innerHTML = "<p>Hubo un problema al enviar el formulario. Inténtalo de nuevo más tarde.</p>";
        mensajeDiv.style.color = "red"; // Estilo para el mensaje de error
    }
}

// Función para enviar el formulario
document.getElementById('enviarFormulario').addEventListener('click', function () {
    var formData = new FormData(document.getElementById('miFormulario'));

    // Aquí podrías realizar validaciones u otras acciones antes de enviar el formulario

    // Simulación de envío exitoso del formulario (comentado para uso real)
    // mostrarMensaje(true);

    // Simulación de envío con XMLHttpRequest (descomentar para uso real)
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'procesar_formulario.php');
    xhr.onload = function () {
        if (xhr.status === 200) {
            mostrarMensaje(true); // Mostrar mensaje de éxito si el servidor responde correctamente
        } else {
            mostrarMensaje(false); // Mostrar mensaje de error si hay un problema en el servidor
        }
    };
    xhr.send(formData);
});
