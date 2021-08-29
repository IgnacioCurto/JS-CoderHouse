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

    if (localStorage.getItem('alumnos4to')) {
        listUser = JSON.parse(localStorage.getItem('alumnos4to'));
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


    if(!localStorage.getItem('alumnos4to')){
        createTable('body', 'user-table');
        createTableHeader(['Id', 'Nombre', 'Apellido', 'Nota'], '#user-table');
    }
        saveToStorage('alumnos4to', user);
        createRowUser(user, '#user-table');
    });

    if(localStorage.getItem('alumnos4to')){
        createTable('body', 'user-table');
        createTableHeader(['Id', 'Nombre', 'Apellido', 'Nota'], '#user-table');
        populateRows(getUserFromStorage('alumnos4to'), '#user-table');
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
            <td class='aprobado border border1 border-success'>${id} </td>
            <td class='aprobado border border1 border-success'>${name} </td>
            <td class='aprobado border border1 border-success'> ${surname} </td>
            <td class='aprobado border border1 border-success'>${grade}</td>
            ` 
        }else{
            return`
            <td class='desaprobado border border1 border-danger'>${id} </td>
            <td class='desaprobado border border1 border-danger'>${name} </td>
            <td class='desaprobado border border1 border-danger'> ${surname} </td>
            <td class='desaprobado border border1 border-danger'>${grade}</td>
            ` 
        }  
    }
    $(document).ready(function(){
        $('#user-form input[type="text"]').blur(function(){
            if(!$(this).val()){
                $(this).addClass("error");
                $('.pushBtn').addClass(' btn disabled')
            } else{
                $(this).removeClass("error");
                $('.pushBtn').removeClass(' btn disabled')
            }
        });
    });
});

