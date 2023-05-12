var formulario = document.getElementById('SubirImagen');
var formulario2 = document.getElementById('ObtenerImagen');

 formulario.addEventListener('submit', async function(e){
    e.preventDefault();
    console.log('me diste un click')

    var datos = new FormData(SubirImagen);
    datos.append('numeroaleatorio',123456);
    datos.append('hash','43ad64c50a1c13836db424372343498ca6b35760f86a03274db4617709c5037b');
    console.log(datos.get('numerosaleatorio'));


    let res = await fetch("http://127.0.0.1:4000/upload",{
        method: 'POST',
        body: datos
    });

    let respuesta;
     if (res.ok) {  // si el HTTP-status es 200-299 // obtener cuerpo de la respuesta (método debajo)
        respuesta = await res.text();
        console.log(respuesta);
    } else {
        alert("Error-HTTP: " + res.status);
    }

    let respuestaJson = JSON.parse(respuesta);
    idImagen = respuestaJson.data.idpeticion;
    console.log(respuestaJson.data.idpeticion);
    document.getElementById("NumeroID").value = idImagen;

})

formulario2.addEventListener('submit', async function(e){
    e.preventDefault();
    console.log('hola')

    var datos = new FormData(ObtenerImagen);
    let res = await fetch("http://127.0.0.1:4000/obtenerimagenes",{
        method: 'POST',
        body: datos
    });

    let respuesta;
     if (res.ok) {  // si el HTTP-status es 200-299 // obtener cuerpo de la respuesta (método debajo)
        respuesta = await res.text();
        console.log(respuesta);
    } else {
        alert("Error-HTTP: " + res.status);
    }

    let respuestaJson = JSON.parse(respuesta);
    console.log(respuestaJson);
    console.log(respuestaJson.data.imageBuffer.data);

    // idImagen = respuestaJson.data;
    // console.log(respuestaJson.data.idpeticion);
    // document.getElementById("NumeroID").value = idImagen;


})