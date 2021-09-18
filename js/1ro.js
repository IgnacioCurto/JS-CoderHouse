//Asegura que el documento está listo para interactuar con el DOM
$(document).ready(function(){

    const form = $('#user-form');
    const inputId = $('#user-form__input-id');
    const inputName = $('#user-form__input-name');
    const inputSurname = $('#user-form__input-surname');
    const inputGrade = $('#user-form__input-grade');

    function User(id, name, surname, grade) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.grade = grade;
    }

    let listUser = [];

    if (localStorage.getItem('alumnos1ro')) {
        listUser = JSON.parse(localStorage.getItem('alumnos1ro'));
    }

    //Function para guardar alumnos en el local storage
    function saveToStorage(key, user) {
        listUser.push(user);
        localStorage.setItem(key, JSON.stringify(listUser));
    }

    function getUserFromStorage(key) {
        if(localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key));
        }
    }

    form.submit(function(event) {
        event.preventDefault();
    
        const id = inputId.val();
        const name = inputName.val();
        const surname = inputSurname.val();
        const grade = inputGrade.val();

        const user = new User(id, name, surname, grade);


    if(!localStorage.getItem('alumnos1ro')){
        createTable('body', 'user-table');
        createTableHeader(['Id', 'Nombre', 'Apellido', 'Nota'], '#user-table');
    }
        saveToStorage('alumnos1ro', user);
        createRowUser(user, '#user-table');
    });

    if(localStorage.getItem('alumnos1ro')){
        createTable('body', 'user-table');
        createTableHeader(['Id', 'Nombre', 'Apellido', 'Nota'], '#user-table');
        populateRows(getUserFromStorage('alumnos1ro'), '#user-table');
    }


    function createTable(element, id) {
        const table = `<table id=${id} class='offset-2 col-8 w-40 mb-4'></table>`;
        $(element).append(table);
    }

    function createTableHeader(data, element) {
        const header = `<tr>${createDataHeader(data)}</tr>`;
        $(element).append(header);
    }

    function createDataHeader(data) {
        return data.map(headerData => `<th class='text-primary text-center'>${headerData}</th>`);
    }

    function createRowUser(user, element){
        const row = `<tr id=tr-${user.id}>
        ${populateTableData(user.id, user.name, user.surname, user.grade)}
        </tr>`;
        $(element).append(row);
    }

    

    function populateRows(data, element){
        data.map(user => {
        createRowUser(user, element);
        });
    }

    function populateTableData(id, name, surname, grade){
        if (grade>=6){
            return`
            <td class='aprobado border border1'>${id} </td>
            <td class='aprobado border border1'>${name} </td>
            <td class='aprobado border border1'> ${surname} </td>
            <td class='aprobado border border1'>${grade}</td>
            ` 
        }else{
            return`
            <td class='desaprobado border border1'>${id} </td>
            <td class='desaprobado border border1'>${name} </td>
            <td class='desaprobado border border1'> ${surname} </td>
            <td class='desaprobado border border1'>${grade}</td>
            ` 
        }  
    }
    $('#user-form input[type="text"]').blur(function(){
        if(!$(this).val()){
            $(this).addClass("error");
            $('.pushBtn').addClass('btn disabled')
        } else{
            $(this).removeClass("error");
            $('.pushBtn').removeClass('btn disabled')
        }
    });

    //Switch aprobados
    var checkbox = document.getElementById('test');

    checkbox.addEventListener( 'change', function() {
        if(this.checked) {
            $('.aprobado').addClass('border-success')
            $('.desaprobado').addClass('border-danger')
            $('.aprobado').css({backgroundColor:'rgb(241, 255, 234)'})
            $('.desaprobado').css({backgroundColor:'rgb(255, 234, 234)'})

        } else{
            $('.aprobado').removeClass('border-success')
            $('.desaprobado').removeClass('border-danger')
            $('.aprobado').css({backgroundColor:'rgb(244, 250, 255)'})
            $('.desaprobado').css({backgroundColor:'rgb(244, 250, 255)'})
        }
    });
    

    console.log(getUserFromStorage('alumnos1ro'))
    object1 = JSON.parse(localStorage.getItem("alumnos1ro"))[0]
    console.log(object1)
    console.log(object1.surname)


    
});

