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
let total = document.getElementById("precioTotal");
let totalEnProductos=0;

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
let costoTotal = 0;

function validarNombre(){
    if (txtNombre.value.length <3) {
        return false;
    }//if
    return true;
}// validarNombre



function validarCantidad(){
    if(txtNumber.value.length==0) {
        return false;
    }// if
     if (isNaN(txtNumber.value)){
        return false;
     }//if

     if (parseFloat(txtNumber.value)<=0) {
        return false;
     }//if
     return true;
}// validarCantidad



agregar.addEventListener("click", (event)=>{
    event.preventDefault();

    if ((!validarNombre()) || (!validarCantidad())){
        let lista="";
        document.getElementById("alertValidacionesTexto").innerHTML="Los campos deben ser llenados correctamente";
        document.getElementById("alertValidaciones").style.display="block";

        if(!validarCantidad()){
            txtNumber.style.border="red thin solid";
            lista+="<li>Se debe escribir un número válido</li>";
        }
        if (!validarNombre()){
            txtNombre.style.border="red thin solid";
            lista+="<li>Se debe escribir un nombre válido</li>";
        }
        document.getElementById("alertValidacionesTexto").innerHTML=`Los campos deben ser llenados correctamente.
        <ul>${lista}</ul>
        `;

        setTimeout(function(){
            document.getElementById("alertValidaciones").style.display="none";
        },3000)

        return false;
    }
    txtNumber.style.border="";
    txtNombre.style.border="";
    document.getElementById("alertValidaciones").style.display="none";

    contador++;
    document.getElementById("contadorProductos").innerHTML=contador;
    document.getElementById("precioTotal").innerHTML
    let precio = (Math.floor((Math.random() * 50)*100))/100;
    let cantidad = parseFloat(txtNumber.value);
    totalEnProductos += (cantidad<1)?Math.ceil(cantidad):parseInt(cantidad);
    document.getElementById("productosTotal").innerHTML = totalEnProductos; 

    costoTotal += (precio*cantidad);
    total.innerHTML=`$ ${costoTotal.toFixed(2)}`

    let tmp = `<tr>
    <th scope="row">${contador}</th>
    <td>${txtNombre.value}</td>
    <td>${txtNumber.value}</td>
    <td>$ ${precio}</td>
    </tr>
    `;
    console.log(tmp);
    cuerpoTabla[0].innerHTML +=tmp;
    txtNombre.value="";
    txtNumber.value="";
    txtNombre.focus();

})

txtNombre.addEventListener("blur",(event)=>{
    event.target.value= event.target.value.trim();
})

txtNumber.addEventListener("blur", (event)=>{
    event.target.value = event.target.value.trim();
})