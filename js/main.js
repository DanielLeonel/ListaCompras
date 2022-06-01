let element =document.getElementById("totalPrecio");
element.innerHTML="Total precio";

let txtNombre = document.getElementById("Name");
// txtNombre.value="Leche Semidescremada";
// console.log(txtNombre.value);
let txtNumber = document.getElementById("Number");

// let campos = document.getElementsByClassName("campo");
// campos[0].value= "Leche descremada deslactosada light = agua";
// console.log(campos[0].value);
// console.log(campos);

// for (let i = 0; i < campos.length; i++) {
//     campos[i].style.border = "red thin solid"
// }

// let spans = document.getElementsByTagName("span");
// for (let i = 0; i < spans.length; i++) {
//     console.log(spans[i].textContent);
    
// }

let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla= tabla.getElementsByTagName("tbody");

// cuerpoTabla[0].innerHTML=
// `<tr>
// <th scope="row">1</th>
// <td>Leche descremada</td>
// <td>1</td>
// <td>$ 23.00</td>
// </tr>
// `;

let agregar = document.getElementById("btnAgregar");
// console.log(agregar)
let contador=0;
agregar.addEventListener("click", (event)=>{
    
    contador++;
    let precio = Math.random() * 50;
    let tmp = `<tr>
    <th scope="row">${contador}</th>
    <td>${txtNombre.value}</td>
    <td>${txtNumber.value}</td>
    <td>$ ${precio}</td>
    </tr>
    `;
    console.log(tmp);
    cuerpoTabla[0].innerHTML +=tmp;

})