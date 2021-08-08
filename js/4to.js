$(document).ready(function(){

    //Selecciono los elementos del dom

    const form = $('#user-form');
    const inputId = $('#user-form__input-id');
    const inputName = $('#user-form__input-name');
    const inputSurname = $('#user-form__input-surname');
    const inputGrade = $('#user-form__input-grade');

    //Separo los datos que voy a necesitar
    function User(id, name, surname, grade) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.grade = grade;
    }

    let listUser = [];

    //Valido si en el storage hay users si hay asigno mi listUser a los datos del storage
    if (localStorage.getItem('users')) {
        listUser = JSON.parse(localStorage.getItem('users'));
    }

    //Agrego a la lista y guardo en el storage un usuario
    function saveToStorage(key, user) {
        listUser.push(user);
        localStorage.setItem(key, JSON.stringify(listUser));
    }

    //Obtengo los datos del storage
    function getUserFromStorage(key) {
        if(localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key));
        }
    }

    //Escucho el evento submit del formulario
    form.submit(function(event) {
        event.preventDefault();

      //Obtengo los valores ingresados por el usuario
        const id = inputId.val();
        const name = inputName.val();
        const surname = inputSurname.val();
        const grade = inputGrade.val();

        const user = new User(id, name, surname, grade);

      //Si no existen usuarios en el storage creo la tabla y creo el header
    if(!localStorage.getItem('users')){
        createTable('body', 'user-table');
        createTableHeader(['Id', 'Nombre', 'Apellido', 'Nota'], '#user-table');
    }

      //guardo el usuario en localstorage
        saveToStorage('users', user);

      //creo la nueva fila y la asocio a la tabla creada anteriormente
        createRowUser(user, '#user-table');

    });

    //Si hay datos en el storage populo la tabla con esos datos.
    if(localStorage.getItem('users')){
        createTable('body', 'user-table');
        createTableHeader(['Id', 'Nombre', 'Apellido', 'Nota'], '#user-table');
        populateRows(getUserFromStorage('users'), '#user-table');
    }


    //Crea una tabla en el elemento recibido por parametro y con el id recibido.
    function createTable(element, id) {
        const table = `<table id=${id} class='offset-2 col-8 w-40 mb-4'></table>`;
        $(element).append(table);
    }

    //Crea el header de una tabla recibiendo un array de columnas con sus valores y el elemento donde colocarlo
    function createTableHeader(data, element) { //['Id', 'Nombre', 'Apellido', 'Edad']
        const header = `<tr>${createDataHeader(data)}</tr>`;
        $(element).append(header);
    }

    function createDataHeader(data) {
        return data.map(headerData => `<th class='text-primary text-center'>${headerData}</th>`);
    }

    //Crea una row y la llena con los datos del usuario
    function createRowUser(user, element){
        const row = `<tr id=tr-${user.id}>
        ${populateTableData(user.id, user.name, user.surname, user.grade)}
        </tr>`;
        $(element).append(row);
    }

    
    //Recorre un array de objetos users y crea las rows necesarias segun la cantidad de users.

    function populateRows(data, element){
        data.map(user => {
        createRowUser(user, element);
        });
    }

    //Crea la data de cada row.

    function populateTableData(id, name, surname, grade){ //[domicilio, ]
        return `
        <td class='border border1 border-light'>${id} </td>
        <td class='border border1 border-light'>${name} </td>
        <td class='border border1 border-light'> ${surname} </td>
        <td class='border border1 border-light'>${grade}</td>
        `
    }
});

