const form = document.querySelector('form');


// Agregamos un evento al formulario para que se ejecute cuando se envíe
form.addEventListener('submit', (event) => {
    // Prevenimos que el formulario se envíe de manera predeterminada
    event.preventDefault();
  
    // Obtenemos los valores de los campos del formulario
    const username = form.Nombre.value;
    const email = form.Email.value;
    const hora = form.Hora.value;
    const fecha = form.Fecha.value;
    const servicio = form.Servicio.value;
    const mensaje = username+" Consulta disponibilidad para la fecha: " + fecha+ ", "  +" En horario de: "+ hora;


     // Objeto que contiene los datos del mensaje
     const mensajeWhatsApp = {
        numero: "50247266960", // Número de teléfono con código de país
        texto: "Hola, mi nombre es: "+username+" consulta disponibilidad para la fecha: " + fecha+ ", "  +" en horario de: "+ hora + " para el servicio de: " +servicio
      };

       // Función para generar el enlace de WhatsApp
    function generarEnlaceWhatsApp(mensaje) {
        const baseUrl = "https://wa.me/";
        const numero = mensaje.numero;
        const texto = encodeURIComponent(mensaje.texto);
        return `${baseUrl}${numero}?text=${texto}`;
      }
  


    if(!username || !email || !hora || !fecha || !servicio){
        alert("No llenaste todos los campos");
        return;
    }else{
        alert(username+" Consulta disponibilidad para la fecha: " + fecha+ ", "  +" En horario de: "+ hora);
        const enlace = generarEnlaceWhatsApp(mensajeWhatsApp);
        window.open(enlace, "_blank"); // Abre el enlace en una nueva pestaña
    }

    // Enviamos el formulario
    form.submit();
    

});

