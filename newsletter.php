<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

  if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

    $destinatario = "elfortinporteno@gmail.com";
    $asunto = "Nueva suscripción - El Fortín Porteño";
    $mensaje = "Nuevo email suscripto:\n\n" . $email;
    $headers = "From: no-reply@elfortinporteno.com.ar";

    if (mail($destinatario, $asunto, $mensaje, $headers)) {
      echo "<script>
                alert('¡Gracias por suscribirte!');
                window.location.href='index.html';
            </script>";
    } else {
      echo "Error al enviar el email.";
    }
  } else {
    echo "Email inválido.";
  }
}
