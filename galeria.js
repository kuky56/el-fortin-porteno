/* --- Lista de Imágenes (Asegúrate de que los nombres coincidan) --- */
const images = [
  { url: "galeria/imagen1.jpg", title: "imagen1" },
  { url: "galeria/imagen2.jpg", title: "imagen2" },
  { url: "galeria/imagen3.jpg", title: "imagen3" },
  { url: "galeria/imagen4.jpg", title: "imagen4" },
  { url: "galeria/imagen5.jpg", title: "imagen5" },
  { url: "galeria/imagen6.jpg", title: "imagen6" },
  { url: "galeria/imagen7.jpg", title: "imagen7" },
  { url: "galeria/imagen8.jpg", title: "imagen8" },
  { url: "galeria/imagen9.jpg", title: "imagen9" },
  { url: "galeria/imagen10.jpg", title: "imagen10" },
  { url: "galeria/imagen11.jpg", title: "imagen11" },
  { url: "galeria/imagen12.jpg", title: "imagen12" },
  { url: "galeria/imagen13.jpg", title: "imagen13" },
  { url: "galeria/imagen14.jpg", title: "imagen14" },
  { url: "galeria/imagen15.jpg", title: "imagen15" },
  { url: "galeria/imagen16.jpg", title: "imagen16" },
  { url: "galeria/imagen17.jpg", title: "imagen17" },
  { url: "galeria/imagen18.jpg", title: "imagen18" },
  { url: "galeria/imagen19.jpg", title: "imagen19" },
  { url: "galeria/imagen20.jpg", title: "imagen20" },
  { url: "galeria/imagen21.jpg", title: "imagen21" },
  { url: "galeria/imagen22.jpg", title: "imagen22" },
  { url: "galeria/imagen23.jpg", title: "imagen23" },
  { url: "galeria/imagen24.jpg", title: "imagen24" },
  { url: "galeria/imagen25.jpg", title: "imagen25" },
  { url: "galeria/imagen26.jpg", title: "imagen26" },
  { url: "galeria/imagen27.jpg", title: "imagen27" },
  { url: "galeria/imagen28.jpg", title: "imagen28" },
  { url: "galeria/imagen29.jpg", title: "imagen29" },
  { url: "galeria/imagen30.jpg", title: "imagen30" },
  { url: "galeria/imagen31.jpg", title: "imagen31" },
  { url: "galeria/milanesa-gigante4.jpg", title: "Milanesas gigantes a caballo" },
  { url: "galeria/milanesa-napo.jpg", title: "Milanesa Napolitana" },
  { url: "galeria/milanesas.jpg", title: "Milanesa gigantes" },
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