$(document).ready(function(){

    //Declaramos la url que vamos a usar para el GET
    const URLGET   = "https://jsonplaceholder.typicode.com/posts"

    //Controlador para evitar múltiples login
    var counter=0;
    function a(){
        if(counter > 1){
            document.getElementById('btn1').innerHTML += "<input type='radio'>";
            counter++;
        }
        else{
            document.getElementById("btn1").disabled=true;
        }
    }
    //Declaramos la información a enviar
    const infoPost =  { nombre: "Ana Díaz", profesion: "Profesora en Ciencias Sociales" }

    var result = infoPost.profesion.substr(infoPost.profesion.indexOf(" ") + 4);
    //Escuchamos el evento click del botón agregado
    $("#btn1").click(() => { 
        $.post(URLGET, infoPost ,(respuesta, estado) => {
            if(estado === "success"){
                a()
                $(".modal-body").prepend(`
                <h5 class="mt-1 mb-2">${respuesta.nombre}</h5>
                <h6 class="text-secondary mt-1 mb-2">${respuesta.profesion}</h6>
                `);
                $(".loginBtn").hide();
                $('.teacher').hide()
                $('.modal-header').append(`<img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg" alt="avatar" class="rounded-circle img-responsive"></img> `)
                $('.btndiv').append(`<button class="btn bg-transparent btn-rounded border border-white text-white" id="btn2">Log out</button>`)
                $('.main').prepend(`<h4 class='text-secondary mb-4'>${result}</h4>`)
                $('.classHeader').append(`<h4 class='text-secondary'>${result}</h4>`)
            }  
        });
    });
});