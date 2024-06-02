const precio = 400000

precioInicial = document.querySelector(".precioInicial");
precioInicial.innerHTML = precio




const btnSuma = document.querySelector (".btnSuma")
const btnResta = document.querySelector (".btnResta")


let suma = 0
btnSuma.addEventListener("click", ()=> {
    suma = suma + 1
    itemClick.innerHTML = suma
}
)
let resta = 0
btnResta.addEventListener("click", ()=> {
    resta = suma - 1
    itemClick.innerHTML = resta
})


//Aquí se muestra este valor pero no supe como relacionarlo para que vaya sumando
let total = 400000
valorTotal = document.querySelector("#valorTotal")
valorTotal.innerHTML = precio + total



//Pensé que con ésta fórmula podía activar el botón para que al dar click fuese sumando el valor pero no me funcionó. Lo lamento. Seguiré investigando.
//totalSuma.addEventListener("click", ()=>{
//    totalAdd = precio + totalAdd
//   itemClick.innerHTML = totalAdd
//}
//)
