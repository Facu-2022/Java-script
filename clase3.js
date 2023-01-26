
function general(){
    let nombre=prompt("por favor ingrese su nombre");{    
    alert(`hola ${nombre} bienvenido/a al PROGRAMA de notas!`)
    }
    let cant=parseInt (prompt("cuantas notas va a ingresar?"))
    let contador= 0;


    for (i=1;i<=cant;i++){    
    let notas= parseInt (prompt(`ingrese la nota ${i}`))
    console.log(`nota numero ${i}:    ${notas}`)
    contador=(contador+notas)    
    } 
    let Promedio= contador/cant;
    let salirMenu=true
    do{
        let opcion=prompt(`ahora ingrese la opcion deseada
        1 - Suma de notas
        2 - Promedio de Notas
        3 - aprobado o desaprobado`)
        switch (opcion){
            case "1":
                alert(`la suma de las ${cant} notas es de ${contador}`)
        break
            case "2":
                alert(`el promedio de las ${cant} notas es de ${Promedio}`)
            break
            case "3":
                if(Promedio>=7){
                    alert(`el alumno ${nombre} se encuentra APROBADO, Felicitaciones!`)
                }else{
                    alert(`el alumno ${nombre} se encuentra DESAPROBADO, lo siento!`)
                }
            break
        }
        let pregunta=prompt("desea elegir otra opcion")
        if (pregunta=="si"){
            salirMenu=true
        }
        else{
            console.log("saliendo del menu")
            salirMenu=false
        
        }
    }while(salirMenu)

    let nuevaPregunta=prompt("desea ingresar otro nombre")
    while(nuevaPregunta=="si"){
    general()
    }
}


    
general()
