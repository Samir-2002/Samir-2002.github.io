// Seleccionar el modal y los elementos de contenido
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");
const closeBtn = document.querySelector(".close-btn");

// Botón que activará el modal
const learnMoreButton = document.getElementById("learnMoreButton");

// Función para mostrar el modal con el contenido deseado
learnMoreButton.addEventListener("click", () => {
    const title = learnMoreButton.getAttribute("data-title");
    const message = learnMoreButton.getAttribute("data-message");

    modalTitle.textContent = title;
    modalMessage.textContent = message;

    modal.style.display = "block";
});

// Cerrar el modal al hacer clic en el botón de cierre
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de la caja de contenido
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
//funcion del modo oscuro
document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => {
            element.style.opacity = 1;
        }, 100);
    });

    // Adiciona efeito 3D aos botões
    const buttons3D = document.querySelectorAll('.button-3d');
    buttons3D.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-5px)';
            button.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.3)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
        });
    });

    // Alternar modo escuro
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});      
// Función para navegar a la página especificada
function navigateTo(page) {
    window.location.href = page;
  }