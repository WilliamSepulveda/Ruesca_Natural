



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

// seccion de nuevo estilo
document.addEventListener("DOMContentLoaded", () => {
    console.log("JS con GSAP cargado");

    const buttons = document.querySelectorAll("[data-tabs='button']");
    const contents = document.querySelectorAll("[data-tabs='content-item']");
    const visuals = document.querySelectorAll("[data-tabs='visual-item']");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));
            visuals.forEach(visual => visual.classList.remove("active"));

            button.classList.add("active");
            contents[index].classList.add("active");
            visuals[index].classList.add("active");

            // Animación con GSAP
            gsap.fromTo(contents[index], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
            gsap.fromTo(visuals[index], { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5 });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".gallery-container");
    const items = Array.from(container.children);

    // 🔄 Clonamos los elementos para hacer el efecto de loop
    items.forEach(item => {
        let clone = item.cloneNode(true);
        container.appendChild(clone);
    });
});
