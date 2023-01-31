

//constructora
class Auto{
    constructor(numero, marca, modelo, precio){
        //propiedades o atributos de nuestra clase
        this.numero = numero,
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio
    }
    mostrarInfoAuto(){
        console.log(`El auto es un/a ${this.marca}, el modelo del auto es ${this.modelo} y su precio es ${this.precio}`)
    }
}

const auto1= new Auto (1,"fiat",2000,120000)
const auto2= new Auto (2,"renauld",1998,80000)
const auto3=new Auto  (3,"fiat",2019,1000000)

const garage= []
garage.push(auto1,auto2,auto3)

function agregarAuto(Array){
    let numeroAuto = prompt("ingrese el numero del auto ingresado")
    let marcaAuto= prompt("ingrese la marca del auto ingresado")
    let modeloAuto= prompt("ingrese el modelo del auto ingresado")
    let precioAuto=parseInt (prompt("ingrese el precio del auto ingresado"))

const nuevoAuto = new Auto(Array.length+1,numeroAuto,marcaAuto,modeloAuto,precioAuto)

Array.push(nuevoAuto)
mostrarlistaAuto(garage)
}
function mostrarlistaAuto(array){
    console.log("Los autos  disponibles son:")
    for(let elemento of array){
        console.log(elemento.numero, elemento.marca , elemento.modelo, elemento.precio)
        //opción utilizar for in
    }
}


auto1.mostrarInfoAuto()

function opciones(salir){
    let menu = parseInt(prompt(`por favor seleccione una opcion
           1 - Agregar auto
           2 - consultar autos
           3 - ordenar autos
           0 - Salir del menu`))
    
        switch(menu){
            case 1:
                agregarAuto(garage)
            break
            case 2:
                borrarAuto(garage)
            break
            case 3:
                mostrarlistaAuto(garage)
            break
            default:
                console.log("Ingrese una opción correcta")
            break
        }
}

opciones()