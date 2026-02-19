/* --- Lista de Imágenes (Asegúrate de que los nombres coincidan) --- */
const images = [
  { url: "galeria/Rabas-a-la-romana.webp", title: "Rabas a la romana" },
  { url: "galeria/Rabas-y-Heineken-1L.webp", title: "Rabas y Heineken 1L" },
  {
    url: "galeria/Pizza-rucula-y-prosciutto.webp",
    title: "Pizza rúcula y prosciutto",
  },
  { url: "galeria/Asado-con-fritas.webp", title: "Asado con fritas" },
  {
    url: "galeria/Milanesa-suiza-p2-con-fritas.webp",
    title: "Milanesa suiza para 2 con fritas",
  },
  {
    url: "galeria/Pizza-jamón-y-morroneds.webp",
    title: "Pizza jamón y morrones",
  },
  {
    url: "galeria/Milanesas-bomba-p2-con-fritas.webp",
    title: "Milanesa bomba para 2 con fritas",
  },

  { url: "galeria/Empanadas-fritas.webp", title: "Empanadas fritas" },
  {
    url: "galeria/Vacio-con-ensalada-mixta.webp",
    title: "Vacio con ensalada mixta",
  },
  { url: "galeria/ensalada-del-chef.webp", title: "Ensalada del Chef" },
  { url: "galeria/Arroz-con-pollo.webp", title: "Arroz con pollo" },
  {
    url: "galeria/Medialunas-jamón-queson-con-exprimido.webp",
    title: "Medialunas jamón y queso con exprimido",
  },
  { url: "galeria/flan.webp", title: "Flan" },
  { url: "galeria/Tequeños.webp", title: "Tequeños" },
  {
    url: "galeria/Sandwich-milanesa-completo2.webp",
    title: "Sandwich milanesa completo",
  },
  { url: "galeria/Pastel-de-papas.webp", title: "Pastel de papas" },

  { url: "galeria/Pernil-Matambre.webp", title: "Pernil-Matambre-Tortilla" },
  {
    url: "galeria/Canelones-verdura-con-fileto.webp",
    title: "Canelones de verdura con salsa fileto",
  },
  {
    url: "galeria/Pizza-rucula-y-prosciutto2.webp",
    title: "Pizza rúcula y prosciutto",
  },
  {
    url: "galeria/Sandwich-milanesa-completo.webp",
    title: "Sandwich milanesa completo",
  },
  {
    url: "galeria/Canelones-verdura-con-fileto.webp",
    title: "Canelones de verdura con salsa fileto",
  },
  {
    url: "galeria/Lentejas-a-la-española.webp",
    title: "Lentejas a la española",
  },
  { url: "galeria/Hamburguesa-completa.webp", title: "Hamburguesa completa" },
  {
    url: "galeria/Carne-al-horno.webp",
    title: "Carne al horno(menú del dia con bebida y postre)",
  },
  {
    url: "galeria/Sorrentinos-con-estofado.webp",
    title: "Sorrentinos con salsa/ estofado de carne",
  },
  {
    url: "galeria/Tostado-mixto-con-licuado.webp",
    title: "Tostado mixto con licuado",
  },
  { url: "galeria/Tira-asado-con-fritas.webp", title: "Asado con fritas" },
  {
    url: "galeria/Milanesa-riojana.webp",
    title: "Milanesa riojana para 2 con fritas",
  },
  {
    url: "galeria/Milanesas-bomba-p2-con-fritas.webp",
    title: "Milanesa bomba para 2 con fritas",
  },
  {
    url: "galeria/Parrillada-para-2.webp",
    title: "Parrillada para 2 personas",
  },
  { url: "galeria/Postres.webp", title: "Postres" },
  {
    url: "galeria/milanesa-bomba-para-2.webp",
    title: "Milanesas bomba para 2",
  },
  {
    url: "galeria/milanesas-napolitanas-p2.webp",
    title: "Milanesa Napolitana para 2 con fritas",
  },
  {
    url: "galeria/Suprema-rellena.webp",
    title: " Suprema rellena con fritas",
  },
];

let currentImageIndex = 0;

function generateGallery() {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;
  gallery.innerHTML = images
    .map(
      (img, index) => `
        <div class="gallery-item" onclick="openLightbox(${index})">
            <img src="${img.url}" alt="${img.title}" loading="lazy">
            <div class="gallery-item-title">${img.title}</div>
        </div>
    `
    )
    .join("");
}

function scrollGallery(dir) {
  const gallery = document.getElementById("gallery");
  gallery.scrollBy({ left: dir * 300, behavior: "smooth" });
}

function openLightbox(index) {
  currentImageIndex = index;
  updateLightbox();
  document.getElementById("lightbox").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.body.style.overflow = "auto";
}

function changeImage(dir) {
  currentImageIndex = (currentImageIndex + dir + images.length) % images.length;
  updateLightbox();
}

function updateLightbox() {
  const img = document.getElementById("lightboxImg");
  const loader = document.getElementById("loader");

  img.classList.remove("loaded");
  loader.style.display = "block";

  img.src = images[currentImageIndex].url;
  document.getElementById("lightboxTitle").textContent =
    images[currentImageIndex].title;
  document.getElementById("counter").textContent =
    `${currentImageIndex + 1} / ${images.length}`;

  img.onload = () => {
    loader.style.display = "none";
    img.classList.add("loaded");
  };
}

// Inicializar
document.addEventListener("DOMContentLoaded", generateGallery);

// Cerrar al hacer clic en el fondo oscuro (pero NO en la imagen o botones)
document.getElementById("lightbox").addEventListener("click", function (e) {
  if (e.target.id === "lightbox") {
    closeLightbox();
  }
});

// Teclado
document.addEventListener("keydown", (e) => {
  if (!document.getElementById("lightbox").classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") changeImage(1);
  if (e.key === "ArrowLeft") changeImage(-1);
});
