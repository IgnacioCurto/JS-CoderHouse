

function CreateAlumno1(){
    let getAlumnos1 = JSON.parse(localStorage.getItem("alumnos1ro"))
    for (var i = 0; i < getAlumnos1.length; i++){
        this["alumno1_"+i] = getAlumnos1[i];
        if (typeof ["alumno1_"+i] !== 'undefined'){
            console.log('nipple')
        } else{
            console.log('nepis')
        }
    }
}

function CreateAlumno2(){
    let getAlumnos2 = JSON.parse(localStorage.getItem("alumnos2do"))
    for (var i = 0; i < getAlumnos2.length; i++){
        this["alumno2_"+i] = getAlumnos2[i];
    }
}

function CreateAlumno3(){
    let getAlumnos3 = JSON.parse(localStorage.getItem("alumnos3ro"))
    for (var i = 0; i < getAlumnos3.length; i++){
        this["alumno3_"+i] = getAlumnos3[i];
    }
}

function CreateAlumno4(){
    let getAlumnos4 = JSON.parse(localStorage.getItem("alumnos4to"))
    for (var i = 0; i < getAlumnos4.length; i++){
        this["alumno4_"+i] = getAlumnos4[i];
    }
}
function CreateAlumno5(){
    let getAlumnos5 = JSON.parse(localStorage.getItem("alumnos5to"))
    for (var i = 0; i < getAlumnos5.length; i++){
        this["alumno5_"+i] = getAlumnos5[i];
    }
}
function CreateAlumno6(){
    let getAlumnos6 = JSON.parse(localStorage.getItem("alumnos6to"))
    for (var i = 0; i < getAlumnos6.length; i++){
        this["alumno6_"+i] = getAlumnos6[i];
    }
}
function CreateAlumno7(){
    let getAlumnos7 = JSON.parse(localStorage.getItem("alumnos7mo"))
    for (var i = 0; i < getAlumnos7.length; i++){
        this["alumno7_"+i] = getAlumnos7[i];
    }
}


CreateAlumno1()
CreateAlumno2()
CreateAlumno3()
CreateAlumno4()
CreateAlumno5()
CreateAlumno6()
CreateAlumno7()








if (typeof i === 'undefined') {
    console.log('detected')
}


let chart1 = document.getElementById('chart1').getContext('2d')
let chart2 = document.getElementById('chart2').getContext('2d')
let chart3 = document.getElementById('chart3').getContext('2d')
let chart4 = document.getElementById('chart4').getContext('2d')
let chart5 = document.getElementById('chart5').getContext('2d')
let chart6 = document.getElementById('chart6').getContext('2d')
let chart7 = document.getElementById('chart7').getContext('2d')

let alumnos1Performance = new Chart(chart1, {
    
    type:'bar', //'pie'
    data:{
        labels:[alumno1_0.surname, alumno1_1.surname, alumno1_2.surname, alumno1_3.surname, alumno1_4.surname, alumno1_5.surname],
        datasets:[{
            label: 'notas',
            data: [
                alumno1_0.grade,
                alumno1_1.grade,
                alumno1_2.grade,
                alumno1_3.grade,
                alumno1_4.grade,
                alumno1_5.grade,
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            hoverBorderWidth:3,
        }]
    },
});

let alumnos2Performance = new Chart(chart2, {
    type: 'bar',
    data:{
        labels:[alumno2_0.surname, alumno2_1.surname, alumno2_2.surname, alumno2_3.surname, alumno2_4.surname, alumno2_5.surname],
        datasets:[{
            label: 'notas',
            data: [
                alumno2_0.grade,
                alumno2_1.grade,
                alumno2_2.grade,
                alumno2_3.grade,
                alumno2_4.grade,
                alumno2_5.grade,
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            hoverBorderWidth:3,
        }]
    },
});

let alumnos3Performance = new Chart(chart3, {
    type: 'bar',
    data:{
        labels:[alumno3_0.surname, alumno3_1.surname, alumno3_2.surname, alumno3_3.surname, alumno3_4.surname, alumno3_5.surname],
        datasets:[{
            label: 'notas',
            data: [
                alumno3_0.grade,
                alumno3_1.grade,
                alumno3_2.grade,
                alumno3_3.grade,
                alumno3_4.grade,
                alumno3_5.grade,
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            hoverBorderWidth:3,
        }]
    },
});

let alumnos4Performance = new Chart(chart4, {
    type: 'bar',
    data:{
        labels:[alumno4_0.surname, alumno4_1.surname, alumno4_2.surname, alumno4_3.surname, alumno4_4.surname, alumno4_5.surname],
        datasets:[{
            label: 'notas',
            data: [
                alumno4_0.grade,
                alumno4_1.grade,
                alumno4_2.grade,
                alumno4_3.grade,
                alumno4_4.grade,
                alumno4_5.grade,
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            hoverBorderWidth:3,
        }]
    },
});

let alumnos5Performance = new Chart(chart5, {
    type: 'bar',
    data:{
        labels:[alumno5_0.surname, alumno5_1.surname, alumno5_2.surname, alumno5_3.surname, alumno5_4.surname, alumno5_5.surname],
        datasets:[{
            label: 'notas',
            data: [
                alumno5_0.grade,
                alumno5_1.grade,
                alumno5_2.grade,
                alumno5_3.grade,
                alumno5_4.grade,
                alumno5_5.grade,
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            hoverBorderWidth:3,
        }]
    },
});

let alumnos6Performance = new Chart(chart6, {
    type: 'bar',
    data:{
        labels:[alumno6_0.surname, alumno6_1.surname, alumno6_2.surname, alumno6_3.surname, alumno6_4.surname, alumno6_5.surname],
        datasets:[{
            label: 'notas',
            data: [
                alumno6_0.grade,
                alumno6_1.grade,
                alumno6_2.grade,
                alumno6_3.grade,
                alumno6_4.grade,
                alumno6_5.grade,
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            hoverBorderWidth:3,
        }]
    },
});

let alumnos7Performance = new Chart(chart7, {
    type: 'bar',
    data:{
        labels:[alumno7_0.surname, alumno7_1.surname, alumno7_2.surname, alumno7_3.surname, alumno7_4.surname, alumno7_5.surname],
        datasets:[{
            label: 'notas',
            data: [
                alumno7_0.grade,
                alumno7_1.grade,
                alumno7_2.grade,
                alumno7_3.grade,
                alumno7_4.grade,
                alumno7_5.grade,
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            hoverBorderWidth:3,
        }]
    },
});