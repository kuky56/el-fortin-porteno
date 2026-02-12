function abrirReserva() {
  const modal = document.getElementById("modalReserva");
  if (modal) {
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("show");
      document.body.classList.add("no-scroll");
    }, 10);
  }
}

function cerrarReserva() {
  const modal = document.getElementById("modalReserva");
  if (modal) {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
      document.body.classList.remove("no-scroll");
    }, 400);
  }
}

function enviarReserva(metodo) {
  const n = document.getElementById("nombre").value;
  const t = document.getElementById("telefono").value;
  const f = document.getElementById("fecha").value;
  const h = document.getElementById("hora").value;
  const p = document.getElementById("personas").value;
  const s = document.getElementById("sucursal").value; // <--- Importante
  const nts = document.getElementById("notas").value || "Sin notas";

  if (!n || !f || !h || !t) return alert("Por favor, completá los campos.");

  const msg = `RESERVA EN: ${s}\n--------------------\nNombre: ${n}\nWhatsApp: ${t}\nFecha: ${f}\nHora: ${h}\nPersonas: ${p}\nNotas: ${nts}`;

  if (metodo === "wa") {
    window.open(
      `https://wa.me/5491170360708?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  } else {
    window.location.href = `mailto:elfortinporteno@gmail.com?subject=Reserva ${s}&body=${encodeURIComponent(msg)}`;
  }
  cerrarReserva();
}