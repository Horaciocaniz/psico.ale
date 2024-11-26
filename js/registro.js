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

    if(!username || !email || !hora || !fecha || !servicio){
        alert("No llenaste todos los campos");
        return;
    }else{
        alert(" Consultando fecha: " + fecha+ ", "  +" En horario de: "+ hora);
    }

    // Enviamos el formulario
    form.submit();
    

});