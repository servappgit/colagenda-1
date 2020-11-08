
const db = firebase.firestore();
const formularioc = document.getElementById('formularioc');
formularioc.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = formularioc['inputName'].value;
    const apellido = formularioc['inputLastname'].value;
    const correo = formularioc['inputEmail'].value;
    const telefono = formularioc['inputPhone'].value;
    const ciudad = formularioc['inputCity'].value;
    const pais = formularioc['inputCountry'].value;
    const servicio = formularioc['inputService'].value;
    const otro = formularioc['inputOtherService'].value;
    const horas = formularioc['inputHours'].value;
    const frecuencia = formularioc['inputFrequency'].value;
    const mensaje = formularioc['inputMessage'].value;
 

   await db.collection('cotizaciones-home-colombia').doc().set({
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        telefono: telefono,
        ciudad: ciudad,
        pais: pais,
        servicio: servicio,
        otro: otro,
        horas: horas,
        frecuencia: frecuencia,
        mensaje: mensaje,
       

    })
    
    console.log("enviado a firestore")
})