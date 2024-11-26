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

    if(!username || !email || !hora || !fecha){
        alert("No llenaste todos los campos");
        return;
    }else{
        alert("Tus datos son: " + username+email+fecha+hora)
    }

    // Enviamos el formulario
    form.submit();
    

});