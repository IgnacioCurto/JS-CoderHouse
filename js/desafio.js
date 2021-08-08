
let classroom = document.getElementById('classroom')









const alumnos = [
    {nombre: 'Juan Ignacio Pérez', nota: '5', promedio: '9'},
    {nombre: 'Matías Balti', nota: '5', promedio: '9'},
    {nombre: 'Lucía Martinez', nota: '5', promedio: '9'},
    {nombre: 'Tomás Gomez', nota: '5', promedio: '9'},
    {nombre: 'Camila Rodriguez', nota: '5', promedio: '9'},
    {nombre: 'Lucas Torres', nota: '5', promedio: '9'},
    {nombre: 'Julio Aguilarre', nota: '5', promedio: '9'},
    {nombre: 'Ignacio Curto', nota: '5', promedio: '9'},
    {nombre: 'Santiago Guardia', nota: '5', promedio: '9'},
    {nombre: 'Milagros Ibarra', nota: '5', promedio: '9'},
]


function push(){
    alumnos.push({nombre: prompt('Ingresa un nombre'), nota: prompt('Ingresa la nota'), promedio: prompt('Ingresa el promedio')})
    classroom.innerHTML = alumnos.map(alumno => `
    <div class="row">
        <div class="col-4">
            <p> ${alumno.nombre} </p>
        </div>
        <div class="col-4">
            <p> ${alumno.nota} </p>
        </div>
        <div class="col-4">
            <p> ${alumno.promedio} </p>
        </div>
    </div>
    `).join('')

    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

    for (const alumno of alumnos) {
        guardarLocal(alumno.nombre, JSON.stringify(alumno.nombre));
    }

}

classroom.innerHTML = alumnos.map(alumno => `
<div class="row">
<div class="col">
    <p> ${alumno.nombre} </p>
</div>
<div class="col">
    <p> ${alumno.nota} </p>
</div>
<div class="col">
    <p> ${alumno.promedio} </p>
</div>
`).join('')


