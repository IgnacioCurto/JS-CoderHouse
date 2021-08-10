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

    if (localStorage.getItem('users')) {
        listUser = JSON.parse(localStorage.getItem('users'));
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


    if(!localStorage.getItem('users')){
        createTable('body', 'user-table');
        createTableHeader(['Id', 'Nombre', 'Apellido', 'Nota'], '#user-table');
    }


        saveToStorage('users', user);


        createRowUser(user, '#user-table');

    });

    if(localStorage.getItem('users')){
        createTable('body', 'user-table');
        createTableHeader(['Id', 'Nombre', 'Apellido', 'Nota'], '#user-table');
        populateRows(getUserFromStorage('users'), '#user-table');
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
        return `
        <td class='border border1 border-light'>${id} </td>
        <td class='border border1 border-light'>${name} </td>
        <td class='border border1 border-light'> ${surname} </td>
        <td class='border border1 border-light'>${grade}</td>
        `
    }

    
    for(var i = 0; i< listUser.length; i++){
        
        if(listUser[i].grade > 6){
            $('tr').css({backgroundColor: '#F29595'})
        }
    }
});

