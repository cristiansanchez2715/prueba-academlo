// EJERCICIO 1

let nombre = "cristian"
let apellidos = "medina"
let edad = 27
let ciudad = ibague

// EJERCICIO 2

const array = [ 1, 2, 3]

const sumaArray = array[0] + array[1] + array[2]

// ejercicio 3

const object = {
    nombre: "cristian",
    apellido: "medina",
    edad: "27"
}
const nombreCompleto = object.nombre + object.apellido

// ejercicio 4

const arrego5Objetos = [
    {nombre: "cristian", email: "cristiansanchez2715@gmail.com", edad: 27},
    
    {nombre: "camilo", email: "cristiancamilomedinasanchez@gmail.com", edad: 27.2},
    
    {nombre: "medina", email: "cristiancamilomedinasanchez1@yahoo.com", edad: 27.3},
    
    {nombre: "sanchez", email: "cristiancamilomedinasanchez2@yahoo.com", edad: 27.5},
    
    {nombre: "sanchez1", email: "hxcxpcristian@hotmail.com", edad: 27.7},
]


const correos = []

const arreglo = arrego5Objetos.forEach((obj) => {
    correos.push(obj.email)
})
console.log(arreglo)

