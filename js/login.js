$(document).ready(function(){

    //Declaramos la url que vamos a usar para el GET
    const URLGET   = "https://jsonplaceholder.typicode.com/posts"
    //Declaramos la información a enviar
    const infoPost =  { nombre: "Ana Díaz", profesion: "Profesora en Ciencias Sociales" }
    //Escuchamos el evento click del botón agregado
    $("#btn1").click(() => { 
        $.post(URLGET, infoPost ,(respuesta, estado) => {
            if(estado === "success"){
                $(".modal-body").prepend(`
                <h5 class="mt-1 mb-2">${respuesta.nombre}</h5>
                <h6 class="text-secondary mt-1 mb-2">${respuesta.profesion}</h6>
                `);
                $(".loginBtn").hide();
                $('.teacher').hide()
                $('.modal-header').append(`<img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg" alt="avatar" class="rounded-circle img-responsive"></img> `)
                $('.header').append(`<button class="btn btn-dark btn-rounded align-self-end">Log out</button>`)
            }  
        });
    });
});