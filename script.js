document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
  
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  });

  // Selección de elementos del DOM
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');
const galleryItems = document.querySelectorAll('.gallery-item');

// Mostrar imagen en el modal
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImage.src = item.src;
  });
});

// Cerrar el modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
