//CONTRUCTORA
class Auto {
    constructor(id, marca, modelo, precio,imagen){
        this.id = id,
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio,
        this.imagen = imagen

    }
}

const auto1 = new Auto (1,"fiat 600",1998,1000000,"fitito.jpg")
const auto2 = new Auto (2,"renaultd 12",2000,1900000,"12.jpg")
const auto3 = new Auto (3,"fiat cronos",2019,10000000,"cronos.jpg")

const garage = []
garage.push(auto1, auto2, auto3)
console.log(garage)




//CAPTURO ELEMENTOS
let divAuto= document.getElementById("auto")
let botonCatalogo= document.getElementById("verGarage")
let agregarAutobtn= document.getElementById("guardar")


//FUNCION PARA AGREGAR AUTO
function cargarAuto(array){
    let inputMarca=document.getElementById("marcaInput")
    let inputModelo=document.getElementById("modeloInput")
    let inputPrecio=document.getElementById("precioInput")

    const nuevoAuto = new Auto(array.length+1, inputMarca.value, inputModelo.value,parseInt(inputPrecio.value), "308.jpg")
    console.log(nuevoAuto)
 
    array.push(nuevoAuto)
    

}

//RECORRRLO CADA UNA DE LAS CARS, INCLUSO LAS CARGADAS NUEVAS

function verCatalogo(array){
    divAuto.innerHTML=""

    for (let auto of array){
        let nuevoAutoDiv = document.createElement("div")
        nuevoAutoDiv.className = "col-12 col-md-6 col-lg-4 my-3"
        nuevoAutoDiv.innerHTML = `
        <div id="${auto.id}"  class="card" style="width: 18rem;">
        <img src="./imagenes/${auto.imagen}" class="card-img-top" alt="auto">
        <div class="card-body">
            <p class="card-text">Marca: ${auto.marca}</p>
            <p class="card-text">Modelo: ${auto.modelo}</p>
            <p class="card-text">Precio: ${auto.precio}</p>
            <button id="botonAuto">Comprar</button>
         </div>
        
        `
        divAuto.appendChild(nuevoAutoDiv)
    }
}

//APLICO EVENTOS!!
botonCatalogo.onclick = function(){
    verCatalogo(garage)

}


agregarAutobtn.addEventListener("click", ()=>{
    cargarAuto(garage)
})








