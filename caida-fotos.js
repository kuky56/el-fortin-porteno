document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1, // Se activa cuando asoma un 10% de la foto
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("foto-activada");
        observer.unobserve(entry.target); // Para que solo lo haga una vez
      }
    });
  }, observerOptions);

  const fotos = document.querySelectorAll(".foto-historia");
  fotos.forEach((foto) => observer.observe(foto));
});
