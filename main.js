var formulario = document.getElementById('SubirImagen');

 formulario = addEventListener('submit', async function(e){
    e.preventDefault();
    console.log('me diste un click')

    var datos = new FormData(SubirImagen);
    datos.append('numeroaleatorio',123456);
    datos.append('hash','98ed7105be7351f7ca847b4628a28b72bcf5e2d2d016a14154fd9ae7a5501b6e');
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

var ObtenerImagen = document.getElementById('ObtenerImagen');
ObtenerImagen = addEventListener('submit', async function(e){
    e.preventDefault();
    console.log('me diste un click')

    var datos = new FormData(SubirImagen);


})