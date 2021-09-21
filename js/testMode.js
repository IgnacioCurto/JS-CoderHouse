$(document).ready(function(){

    //Activar Modo de prueba: Se limpia el Local Sorage y se completa con datos placeholder

    document.getElementById('TestMode')

    let listUser1 = [];
    let listUser2 = [];
    let listUser3 = [];
    let listUser4 = [];
    let listUser5 = [];
    let listUser6 = [];
    let listUser7 = [];
    function saveToStorage1(key, user) {
        listUser1.push(user);
        localStorage.setItem(key, JSON.stringify(listUser1));
    }
    function saveToStorage2(key, user) {
        listUser2.push(user);
        localStorage.setItem(key, JSON.stringify(listUser2));
    }
    function saveToStorage3(key, user) {
        listUser3.push(user);
        localStorage.setItem(key, JSON.stringify(listUser3));
    }
    function saveToStorage4(key, user) {
        listUser4.push(user);
        localStorage.setItem(key, JSON.stringify(listUser4));
    }
    function saveToStorage5(key, user) {
        listUser5.push(user);
        localStorage.setItem(key, JSON.stringify(listUser5));
    }
    function saveToStorage6(key, user) {
        listUser6.push(user);
        localStorage.setItem(key, JSON.stringify(listUser6));
    }
    function saveToStorage7(key, user) {
        listUser7.push(user);
        localStorage.setItem(key, JSON.stringify(listUser7));
    }



    $("#TestMode").click(() => {
        document.getElementById("TestMode").disabled=true;
        localStorage.clear()
        saveToStorage1('alumnos1ro', {
            "id": "1",
            "name": "Ignacio",
            "surname": "Curto",
            "grade": "6"
        });
        saveToStorage1('alumnos1ro',{
            "id": "2",
            "name": "Matías",
            "surname": "Martinez",
            "grade": "9"
        });
        saveToStorage1('alumnos1ro',{
            "id": "3",
            "name": "Franco",
            "surname": "Lanzi",
            "grade": "2"
        });
        saveToStorage1('alumnos1ro',{
            "id": "4",
            "name": "Lucia",
            "surname": "Scazii",
            "grade": "4"
        });
        saveToStorage1('alumnos1ro',{
            "id": "5",
            "name": "Camila",
            "surname": "Doraemon",
            "grade": "8"
        });
        saveToStorage1('alumnos1ro',{
            "id": "6",
            "name": "María",
            "surname": "Yisu",
            "grade": "3"
        });




        saveToStorage2('alumnos2do', {
            "id": "1",
            "name": "Francisco",
            "surname": "Bonino",
            "grade": "2"
        });  
        saveToStorage2('alumnos2do',{
            "id": "2",
            "name": "Tuvie",
            "surname": "Etan",
            "grade": "7"
        });
        saveToStorage2('alumnos2do',{
            "id": "3",
            "name": "Olga",
            "surname": "Piacentini",
            "grade": "6"
        });
        saveToStorage2('alumnos2do',{
            "id": "4",
            "name": "Nicolino",
            "surname": "Ramirez",
            "grade": "10"
        });
        saveToStorage2('alumnos2do',{
            "id": "5",
            "name": "Eloisa",
            "surname": "Vasco",
            "grade": "4"
        });
        saveToStorage2('alumnos2do',{
            "id": "6",
            "name": "Meke",
            "surname": "Sinnom",
            "grade": "1"
        });
        



        saveToStorage3('alumnos3ro',{
            "id": "1",
            "name": "Lucas",
            "surname": "Maldiva",
            "grade": "1"
        });
        saveToStorage3('alumnos3ro',{
            "id": "2",
            "name": "Elme",
            "surname": "Sías",
            "grade": "2"
        });
        saveToStorage3('alumnos3ro',{
            "id": "3",
            "name": "Losta",
            "surname": "Bales",
            "grade": "7"
        });
        saveToStorage3('alumnos3ro',{
            "id": "4",
            "name": "Tito",
            "surname": "Lindo",
            "grade": "3"
        });
        saveToStorage3('alumnos3ro',{
            "id": "5",
            "name": "Zaara",
            "surname": "Pizas",
            "grade": "10"
        });
        saveToStorage3('alumnos3ro',{
            "id": "6",
            "name": "Oneor",
            "surname": "Tai",
            "grade": "4"
        });



        saveToStorage4('alumnos4to',{
            "id": "1",
            "name": "Elmo",
            "surname": "Rapuer",
            "grade": "10"
        });
        saveToStorage4('alumnos4to',{
            "id": "2",
            "name": "Julian",
            "surname": "Monaco",
            "grade": "9"
        });
        saveToStorage4('alumnos4to',{
            "id": "3",
            "name": "Tunim",
            "surname": "Jakhir",
            "grade": "5"
        });
        saveToStorage4('alumnos4to',{
            "id": "4",
            "name": "Susana",
            "surname": "Sicuv",
            "grade": "6"
        });
        saveToStorage4('alumnos4to',{
            "id": "5",
            "name": "Roberto",
            "surname": "Ojeal",
            "grade": "6"
        });
        saveToStorage4('alumnos4to',{
            "id": "6",
            "name": "Ulises",
            "surname": "Din",
            "grade": "7"
        });



        saveToStorage5('alumnos5to',{
            "id": "1",
            "name": "Estéban",
            "surname": "Lumen",
            "grade": "8"
        });
        saveToStorage5('alumnos5to',{
            "id": "2",
            "name": "Juan Manuel",
            "surname": "Melas",
            "grade": "5"
        });
        saveToStorage5('alumnos5to',{
            "id": "3",
            "name": "Elías",
            "surname": "Pérez",
            "grade": "9"
        });
        saveToStorage5('alumnos5to',{
            "id": "4",
            "name": "Micaela",
            "surname": "Abate",
            "grade": "3"
        });
        saveToStorage5('alumnos5to',{
            "id": "5",
            "name": "Nicolás",
            "surname": "Pinolini",
            "grade": "4"
        });
        saveToStorage5('alumnos5to',{
            "id": "6",
            "name": "Marta",
            "surname": "Lemon",
            "grade": "7"
        });



        saveToStorage6('alumnos6to',{
            "id": "1",
            "name": "Marcos",
            "surname": "Toller",
            "grade": "4"
        });
        saveToStorage6('alumnos6to',{
            "id": "2",
            "name": "Stefanía",
            "surname": "Vazquez",
            "grade": "2"
        });
        saveToStorage6('alumnos6to',{
            "id": "3",
            "name": "Federico",
            "surname": "Fita",
            "grade": "6"
        });
        saveToStorage6('alumnos6to',{
            "id": "4",
            "name": "Horacio",
            "surname": "Jablin",
            "grade": "2"
        });
        saveToStorage6('alumnos6to',{
            "id": "5",
            "name": "Tomás",
            "surname": "Carro",
            "grade": "5"
        });
        saveToStorage6('alumnos6to',{
            "id": "6",
            "name": "Valentin",
            "surname": "Formia",
            "grade": "1"
        });



        saveToStorage7('alumnos7mo',{
            "id": "1",
            "name": "Luisina",
            "surname": "Paz",
            "grade": "9"
        });
        saveToStorage7('alumnos7mo',{
            "id": "2",
            "name": "Walter",
            "surname": "Velie",
            "grade": "7"
        });
        saveToStorage7('alumnos7mo',{
            "id": "3",
            "name": "Ana",
            "surname": "Díaz",
            "grade": "8"
        });
        saveToStorage7('alumnos7mo',{
            "id": "4",
            "name": "Lucía",
            "surname": "Petry",
            "grade": "4"
        });
        saveToStorage7('alumnos7mo',{
            "id": "5",
            "name": "Juan Andrés",
            "surname": "Cuenca",
            "grade": "3"
        });
        saveToStorage7('alumnos7mo',{
            "id": "6",
            "name": "Nicolás",
            "surname": "Fitolin",
            "grade": "6"
        });

        location.reload();
    })


})