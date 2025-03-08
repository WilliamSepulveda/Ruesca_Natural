document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector("#modal");
    const modalImg = document.querySelector("#modal-img");
    const modalTitle = document.querySelector("#modal-title");
    const modalPrice = document.querySelector("#modal-price");
    const modalDescription = document.querySelector("#modal-description");
    const closeModal = document.querySelector(".close");

    // Seleccionar todos los botones de abrir modal
    document.querySelectorAll(".open-modal").forEach(button => {
        button.addEventListener("click", (event) => {
            // Obtener datos del producto
            const title = button.getAttribute("data-title");
            const price = button.getAttribute("data-price");
            const imgSrc = button.getAttribute("data-img");

            // Asignar los valores al modal
            modalTitle.textContent = title;
            modalPrice.textContent = price;
            modalImg.src = imgSrc;

            // Mostrar el modal
            modal.classList.add("show");
        });
    });

    // Cerrar el modal al hacer clic en la "x"
    closeModal.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Cerrar el modal al hacer clic fuera de él
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
});




    document.addEventListener("DOMContentLoaded", function() {
        const menuPagos = document.getElementById("menu-pagos");

        function checkScroll() {
            const rect = menuPagos.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                menuPagos.classList.add("visible");
            }
        }

        window.addEventListener("scroll", checkScroll);
        checkScroll(); // Verifica por si ya está visible al cargar la página
    });

