

//constructora
class Auto{
    constructor(id, marca, modelo, precio,imagen){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio,
        this.imagen = imagen
        
    }
    mostrarInfoAuto(){
        console.log(`El auto es un/a ${this.marca}, el modelo del auto es ${this.modelo} y su precio es ${this.precio}`)
    }
}

const auto1= new Auto (1,"fiat",2000,120000,"fitito.jpg")
const auto2= new Auto (2,"renauld",1998,80000,"12.jpg")
const auto3=new Auto  (3,"fiat",2019,1000000,"cronos.jpg")

const garage= []
garage.push(auto1,auto2,auto3)

function agregarAuto(array){
    let marcaAuto= prompt("ingrese la marca del auto ingresado")
    let modeloAuto= prompt("ingrese el modelo del auto ingresado")
    let precioAuto=parseInt (prompt("ingrese el precio del auto ingresado"))

   const nuevoAuto = new Auto(Array.length+1,marcaAuto,modeloAuto,precioAuto)

  array.push(nuevoAuto)
  mostrarlistaAuto(garage)
}
function mostrarlistaAuto(array){
    console.log("Los autos  disponibles son:")
    for(let elemento of array){
        console.log(elemento.id, elemento.marca , elemento.modelo, elemento.precio)
    }
}


//auto1.mostrarInfoAuto()//

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

//opciones()
let divAuto= document.getElementById("auto")
let verGaragebtn=document.getElementById("verGarage")
let botonInputbtn=document.getElementById("guardar")

//recorro garage
function VerGarage(array){


    for(let auto of array){
 
 
     let nuevoAutodiv= document.createElement("div")
     nuevoAutodiv.className = "col-12 col-md-6 col-lg-4 my-3"
     nuevoAutodiv.innerHTML=
     `
     <div id=${auto.id}  class="card" style="width: 18rem;">
        <img src="./imagenes/${auto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">Marca: ${auto.marca}</p>
            <p class="card-text">Modelo: ${auto.modelo}</p>
            <p class="card-text">Precio: ${auto.precio}</p>
            <button id="botonAuto">Comprar</button>
         </div>
        
     </div>
     `
     divAuto.append(nuevoAutodiv)
 
     }
 }


//aplico eventos



verGaragebtn.onclick = function(){
    VerGarage(garage)
}

//agregamos auto
function CargarrAuto(array){
    let marcaInputbtn=document.getElementById("marcaInput")
    let modeloInputbtn=document.getElementById("modeloInput")
    let precioInputbtn=document.getElementById("precioInput")
    


    const nuevoAuto = new Auto(Array.length+1,marcaInputbtn.value,modeloInputbtn.value,precioInputbtn.value,"foto.jpg")

    array.push(nuevoAuto)
    VerGarage(garage)

}

botonInputbtn.addEventListener("click", ()=>{
    CargarrAuto(garage)
})









