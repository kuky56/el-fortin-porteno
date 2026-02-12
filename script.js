const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // Cambiar icono
  if (navLinks.classList.contains("show")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuBtn.textContent = "☰";
  });
});

// Hacer que elementos .tag con role=button respondan a teclado (Enter/Space)
document.querySelectorAll('.tag[role="button"]').forEach((tag) => {
  tag.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      const parentLink = tag.closest("a");
      if (parentLink) parentLink.click();
    }
  });
  // click en el tag dentro de una tarjeta también activará el enlace padre
  tag.addEventListener("click", (e) => {
    const parentLink = tag.closest("a");
    if (parentLink) parentLink.click();
  });
});

// Ajustar top de la navbar según la altura del header (evita pequeños gaps)
function adjustNavbarTop() {
  const header = document.querySelector(".main-header");
  const navbar = document.querySelector(".navbar");
  if (!header || !navbar) return;
  const headerStyle = getComputedStyle(header).position;
  if (headerStyle === "fixed") {
    const h = header.getBoundingClientRect().height;
    navbar.style.top = h + "px";
  } else {
    navbar.style.top = "";
  }
}

window.addEventListener("load", adjustNavbarTop);
window.addEventListener("resize", adjustNavbarTop);

// Manejar clase "active" para enlaces del menú
(() => {
  const links = document.querySelectorAll(".nav-menu a");

  // Al cargar la página, marcar el link cuyo pathname coincide
  links.forEach((link) => {
    try {
      const linkPath = new URL(link.href, location.origin).pathname.replace(
        /\/index\.html$/,
        "/"
      );
      const currentPath = location.pathname.replace(/\/index\.html$/, "/");
      if (linkPath === currentPath) {
        link.classList.add("active");
      }
    } catch (e) {
      // si href no es válido, ignorar
    }
  });

  // Al hacer clic, actualizar el active (útil para single-page o enlaces '#')
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((l) => l.classList.remove("active"));
      e.currentTarget.classList.add("active");
    });
  });
})();
