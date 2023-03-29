class Bebida {
    constructor(id, marca, detalles, precio,imagen){
        this.id = id,
        this.marca = marca,
        this.detalles = detalles,
        this.precio = precio,
        this.imagen = imagen
    }
}
let vinoteca=[]


const cargarVinoteca = async () =>{
    const response = await fetch("bebidas.json")
    const data= await response.json()
    for(let bebida of data){
        let bebidaNueva = new Bebida (bebida.id, bebida.marca, bebida.detalles,bebida.precio, bebida.imagen)
        vinoteca.push(bebidaNueva)
        
    }
    localStorage.setItem("vinoteca",JSON.stringify(vinoteca))
}
if (localStorage.getItem("vinoteca")){
    vinoteca=JSON.parse(localStorage.getItem("vinoteca"))
}else{
    cargarVinoteca()
}