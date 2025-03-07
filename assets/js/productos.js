document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalPrice = document.getElementById("modal-price");
    const closeModal = document.querySelector(".close");
    const productos = document.querySelectorAll(".producto");

    productos.forEach(producto => {
        producto.addEventListener("click", () => {
            // Obtener datos del producto
            const imgSrc = producto.querySelector("img").src;
            const title = producto.querySelector("p:nth-of-type(1)").textContent;
            const price = producto.querySelector("p:nth-of-type(2)").textContent;

            // Asignar valores al modal
            modalImg.src = imgSrc;
            modalTitle.textContent = title;
            modalPrice.textContent = price;

            // Mostrar el modal con animación
            modal.classList.add("show");
        });
    });

    closeModal.addEventListener("click", () => {
        modal.classList.remove("show");

        // Esperar a que termine la animación antes de ocultarlo completamente
        setTimeout(() => {
            modal.style.visibility = "hidden"; // Solo ocultamos sin bloquear
        }, 400);
    });

    // Cerrar el modal si se hace clic fuera del contenido
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal.click();
        }
    });

    // Al abrir el modal, asegurarnos de que sea visible
    modal.addEventListener("transitionend", () => {
        if (modal.classList.contains("show")) {
            modal.style.visibility = "visible";
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

