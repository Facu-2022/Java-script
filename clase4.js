
let vinoteca=[]
const cargarVinoteca = async () =>{
    const response = await fetch("bebidas.json")
    const data= await response.json()
    for(let bebida of data){
        let bebidaNueva = new Bebida (bebida.id, bebida.marca, bebida.detalles, bebida.precio, bebida.imagen)
        vinoteca.push(bebidaNueva)
        console.log(vinoteca)
    }
    localStorage.setItem("vinoteca",JSON.stringify(vinoteca))
}

//APLICO TERNARIO
localStorage.getItem("vinoteca") ? (vinoteca=JSON.parse(localStorage.getItem("vinoteca"))) : cargarVinoteca()

//CAPTURO ELEMENTOS
let divBebida= document.getElementById("vino")
let botonVinoteca= document.getElementById("verVinoteca")
let btnvenderBebida=document.getElementById("btnvenderBebida")
let opciones=document.getElementById("opciones")
let buscador= document.getElementById("buscador")
let resultadoss=document.getElementById("resultadoss")
let modalCarro=document.getElementById("modalCarro")
let botonCarrito=document.getElementById("botonCarrito")
let preciosumaTotal=document.getElementById("preciosumaTotal")
let finalizarCompra= document.getElementById("finalizarCompra")


let productoEnCarrito
if(localStorage.getItem("productos en carrito")){
    productoEnCarrito=JSON.parse(localStorage.getItem("productos en carrito"))
}
else{
    productoEnCarrito=[]
    localStorage.setItem("productos en carrito",productoEnCarrito)
}

//----------------------
//FUNCIONES!!!
//RECORRRLO CADA UNA DE LAS CARS, INCLUSO LAS CARGADAS NUEVAS
function verVinoteca(array){
    divBebida.innerHTML=""

    for (let bebida of array){
        let nuevaBebidaDiv = document.createElement("div")
        nuevaBebidaDiv.className = "col-12 col-md-6 col-lg-4 my-3 ",
        nuevaBebidaDiv.innerHTML = `
        <div id="${bebida.id}"  class="card" style= "BACKGROUND: black";">
        <img src="./imagenes/${bebida.imagen}" class="card" style= "BACKGROUND: black" alt="auto">
        <div class="card-body">
            <p class="card-text">Marca: ${bebida.marca}</p>
            <p class="card-text">Detalle: ${bebida.detalles}</p>
            <p class="card-text">Precio: ${bebida.precio}</p>
         </div>
        <div  class= "botonComprarr">
        <button id="botonCompra${bebida.id}" class="btn-1">COMPRAR</button>
        </div>
        
        `
        divBebida.appendChild(nuevaBebidaDiv)
        let botonCompra = document.getElementById(`botonCompra${bebida.id}`)
        botonCompra.onclick=()=>{
            agregarAlCarro(bebida)
        }
       
    }
}
function agregarAlCarro(bebida){
    let bebidaAgregada= productoEnCarrito.find((elem)=>elem.id == bebida.id)
    if (bebidaAgregada == undefined){
        productoEnCarrito.push(bebida)
        localStorage.setItem("productos en carrito", JSON.stringify(productoEnCarrito))
        Swal.fire({
            position: 'top-end',
            color: 'black',
            background: '#272827',
            icon: 'success',
            title: 'Producto Agregado al Carrito',
            showConfirmButton: false,
            timer: 2000
          })
    }else{
        Swal.fire({
            position: 'top-end',
            color: 'black',
            background: '#272827',
            icon: 'error',
            title: 'Este producto ya fue cargado',
            showConfirmButton: false,
            timer: 2000
          })

    }
}
//FUNCION SUMA
function sumaTotal (array){
    let total = array.reduce((acum,productoEnCarrito)=>acum+productoEnCarrito.precio,0)
    total==0 ? preciosumaTotal.innerHTML = `No hay productos en el Carrito`:
    preciosumaTotal.innerHTML = `El total del carrito es <strong>$${total}</strong>`
    return total

}

//BOTON AGREGAR BEBIDA
function cargarBebida(array){
    let marcaInput = document.getElementById("marcaInput")
    let detalleInput = document.getElementById("detalleInput")
    let precioInput = document.getElementById("precioInput")

    const nuevaBebida = new Bebida (array.length+1, marcaInput.value, detalleInput.value,parseInt(precioInput.value), "nuevabebida.jpg")
    array.push(nuevaBebida)
    localStorage.setItem("vinoteca", JSON.stringify(array))
    verVinoteca(array)
    let formAgregarBebida = document.getElementById("formAgregarBebida")
   
    formAgregarBebida.reset()
}

//ORDENAR X PRECIO
function menorMayorPrecio(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((param1, param2)=> param1.precio - param2.precio)
    verVinoteca(menorMayor)
}

function mayorMenorPrecio(array){
    const mayorMenor = [].concat(array)
    mayorMenor.sort((a,b)=> b.precio - a.precio)
    verVinoteca(mayorMenor)
}




//FUNCION PARA BUSCAR CON INCLUDES// APLICO TERNARIO
function buscarxMarca(buscador,array){
   let busquedaInput= array.filter(
        (bebida)=> bebida.marca.toLowerCase().includes(buscador) || bebida.detalles.toLowerCase().includes(buscador)
    )
    busquedaInput.length==0 ?  (resultadoss.innerHTML=  `<h3>No hay coincidencias en la vinoteca</h3>`,
    verVinoteca(busquedaInput)) : (resultadoss.innerHTML= "", verVinoteca(busquedaInput))
}


//FUNCION CARRITO
function cargarProductosCarrito(array){
    modalCarro.innerHTML=""
    array.forEach((elemento)=>{

            modalCarro.innerHTML += `
            <div class="card border-primary mb-3" id ="elemento${elemento.id}" style="max-width: 540px;">
                <img class="card-img-top" height="300px" src="imagenes/${elemento.imagen}" alt="${elemento.marca}">
                <div id="modalc"  class="card-body">
                        <h4 class="card-title">${elemento.marca}</h4>
                        <h4 class="card-title">${elemento.detalles}</h4>
                        <p class="card-text">$${elemento.precio}</p> 
                        <button class= "btn btn-danger" id="botonEliminar${elemento.id}"><i class="fas fa-trash-alt"></i></button>
                </div>    
            </div>
            `
            })
        array.forEach((elemento)=>{
            document.getElementById(`botonEliminar${elemento.id}`).addEventListener("click",()=>{

                let eliminarProducto= document.getElementById(`elemento${elemento.id}`)
                eliminarProducto.remove()
                let productoAEliminar= array.find(bebida=> bebida.id==elemento.id)
                let posicion=array.indexOf(productoAEliminar)
                array.splice(posicion,1)
                localStorage.setItem("productos en carrito", JSON.stringify(array))
                sumaTotal(array)
            })

        })
            
          
    sumaTotal(array)
}


function finalizarMensaje(array){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Quieres finalizar la Compra?',
        text: "Por favor elige una de las opciones!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'si, lo quiero!',
        cancelButtonText: 'No, gracias!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Compra Exitosa!',
            'Muchas Gracias',
            'success'
          )
          productoEnCarrito=[]
          localStorage.removeItem("productos en carrito")
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Compra cancelada',
            'revisa el carrito!',
            'error'
          )
        }
      })
    
}






//-------------------------
//eventos
opciones.addEventListener("change", ()=>{
    if(opciones.value == "1"){
        mayorMenorPrecio(vinoteca)
    }else if(opciones.value =="2"){
        menorMayorPrecio(vinoteca)
    }else{
        verVinoteca(vinoteca)
    }
})

buscador.addEventListener("input", ()=>{
    buscarxMarca(buscador.value,vinoteca)

})

finalizarCompra.addEventListener("click",()=>{
    finalizarMensaje(productoEnCarrito)
})


botonCarrito.addEventListener("click", ()=>{
    cargarProductosCarrito(productoEnCarrito)
})





botonVinoteca.onclick=function(){
    verVinoteca(vinoteca)
}
btnvenderBebida.onclick=function(){
    cargarBebida(vinoteca)
}





