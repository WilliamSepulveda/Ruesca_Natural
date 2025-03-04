document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".dadcontainer");
    let scrollAmount = 0;
    const scrollStep = 520; // Tamaño del desplazamiento
    const scrollInterval = 3000; // Tiempo entre desplazamientos (2s)

    function autoScroll() {
        if (scrollAmount < scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollAmount += scrollStep;
        } else {
            scrollAmount = 0; // Reiniciar al principio
        }
        scrollContainer.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    }

    setInterval(autoScroll, scrollInterval);

    // Animación de desvanecimiento al entrar en pantalla
    const containers = document.querySelectorAll(".container");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    entry.target.style.transitionDelay = `${index * 0.4}s`; // Retraso dinámico
                } else {
                    entry.target.classList.remove("visible"); // Hace que desaparezca si deja de estar visible
                }
            });
        },
        { threshold: 0.4 } // Se activará cuando el 40% del elemento sea visible
    );

    containers.forEach((container) => observer.observe(container));

});

