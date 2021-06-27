// let intento=0;
// let producto;

// function calcularPrecio(ValorProducto){
//     const impuestoIva=1.21;
//     const gananciaTienda =1.25;
//     return ValorProducto * impuestoIva*gananciaTienda;
// }

// do {
//     producto= parseInt(prompt("Ingrese un numero, exepto 0 que lo sacara del sistema"));
//     intento++;
//    console.log(`El Valor del producto mas los impuesto es de: ${calcularPrecio(producto)}`)
// } while (producto!=0);

// Ejercicios de funciones

// 1)Crear una función que reciba tu edad y retorne tu edad en años perro. (Multiplicado por 7).

        // function edadPerro(a) {
        //     return a *7;
        // }
        // alert(edadPerro(7));
// 2)Crear una función que reciba un nombre y devuelva un saludo.
        // let nombre;
        // function saludo(nombre) {
        //     nombre= prompt("Ingrese su nombre para saludarlo")
        //     console.log(`Hola como estas ${nombre}`);
        // }
        // saludo()
// 3)Crear una función que salude.

        // function saludar() {
        //     alert("Hola como estas?")
        // }
        // saludar()
// 4)Crear una función que reciba los parámetros, la temperatura y el sistema (Farenheit o Celsius), y devuelva la temperatura transformada al otro sistema. (Si recibe Farenheit, devolver Celsius, si recibe Celsius devolver Farenheit).

        // let sistema=prompt("Ingrese el sistema, farenheit/celsius");
        // let temperatura=parseInt(prompt("ingrese la temperatura"));
        // function clima(temperatura,sistema) {
        //    if (sistema==="farenheit") {
        
        //     return celsius = (temperatura -32) * 5/9

        //    } else if(sistema==="celsius") {
        //      return(farenheit= (temperatura * 9/5) + 32)
        //   } 
        //  }

        // console.log(clima(temperatura,sistema));

// 5) Realizar una función que reciba como parámetro un número. Si esta entre 5 y 10, que le aplique la función de factorial (ejercicio 12 de bucles), si es menor , aplicar una función que muestre su módulo (valor absoluto, valor sin el “-” en caso de ser negativo), y si es mayor que 10 aplicarle una función que muestre su doble. Ejemplos de entrada y salida:
// 6 → 6! = 720
// 4 → |4| = 4
// -8 → |-8| = 8
// 50 → 100
// 11 → 22
        // let total;
        // let modulo;
        // let modulo2;
        // let n;
        // function numero(n) {
        //     if (n>=5 && n<=10) {
        //      total = 1; 
        // 	for (i=1; i<=n; i++) {
        // 	 	total = total * i; 
        // 	}
        //     console.log(total);}
            
        //    else if(n>0 &&n<5){
        //         console.log(n)
        //     } else if(n<0){ 
        //          modulo2 = n*-1
        //       console.log(modulo2)
        //     }
        //     else if(n>10){ 
        //         modulo2 = n*2
        //       console.log(modulo2)}
        //    }
        // numero(20);
// 6)Rehacer el ejercicio 12 de condicionales utilizando funciones para validar edad y cobrar. 
// (Ejercicio: Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. 
// (Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).)
//         let eda;
//         let vuelto; 
//         let bebida;    
//         let agua=100;
//         let jugo=200;
//         let cerveza= 300;                                
//         function edad() {
//                 eda=parseInt(prompt("Ingrese su edad"));
//                 if (eda<18) {
//                         alert("Al ser menor de edad solo puede pedir: \nagua\njuego");
//                 } else if(eda>=18) {
//                         alert("Puede pedir\nagua\njuego\ncerveza"); 
//                 }
//         }

// function cobrar(precio) {
//         bebida=prompt(edad());
//         pagar=parseInt(prompt("¿Con cuanto quiere pagar?"))
//         if (bebida==="agua"||bebida==="jugo"||bebida==="cerveza") {
//              vuelto = pagar-precio;
//         alert(`Su vuelto es de ${vuelto}`)    
//         }
     
// }
// cobrar(cerveza);
        // function cobrar() {
        //             bebida=prompt("Elija la bedida: ");                 
        //             if (bebida==="agua") {
        //                     precio=parseInt(prompt("El agua vale 100 pesos, con cuanto quiere pagar"));
        //                     vueltoAgua= precio - 100;
        //                     alert(`Su vuelto de es ${vueltoAgua}`)
        //             }

        //             if (bebida==="juego") {
        //                 precio=parseInt(prompt("El jugo vale 200 pesos, con cuanto quiere pagar"));
        //                 vueltoJugo= precio - 100;
        //                 alert(`Su vuelto de es ${vueltoJugo}`)
        //            }

        //            if (bebida==="cerveza") {
        //                 precio=parseInt(prompt("La cerveza vale 300 pesos, con cuanto quiere pagar"));
        //                 vueltoCerveza= precio - 100;
        //                 alert(`Su vuelto de es ${vueltoCerveza}`)
        //            }
                

        // }
        // edad();
        // cobrar();
        // const precioAgua = 70;
        // const precioCerveza = 250;
        // const precioJugo = 130;
        // let total;
        // let edad= parseInt(prompt("Cuál es su edad?")); // parseo edad
        // let bebida= prompt("Qué desea beber?").toLowerCase(); // paso todo a minusculas para validar mas facil
        // if (validarEdad(edad,bebida)){
        //    switch (bebida){
        //        case "cerveza":
        //            cobrar(precioCerveza);
        //            break;
        //        case "agua":
        //            cobrar (precioAgua);
        //            break;
        //        case "jugo":
        //            cobrar (precioJugo);
        //            break;
        //     default:
        //           alert("Lo sentimos, no ofrecemos aquí esa bebida.");
        //           break;
        //    }
        // } else {
        //     alert("Debe ser mayor de 18 para consumir alcohol.");
        // }
        // function validarEdad(e,b){
        //     if (b === "cerveza" && e<18){
        //         return false;
        //     } else {
        //         return true;
        //     }
        // }
        // function cobrar(precio){
        //     pago = prompt("El total es: " + precio + " Con cuanto desea abonar?");
        //     total= pago-precio;
        //     alert(`Su vuelto es de ${total}`)
            // y aca validaciones del pago
        // }
// 7)Crear una función que reciba tres parámetros: Horas, minutos y segundos, y devolver todo pasado a segundos.
        
        // let horas=parseInt(prompt("Ingrese las horas"))
        // let minutos=parseInt(prompt("Ingrese los minutos"))
        // let segundos=parseInt(prompt("Ingrese los segundos"))
        // function tiempo(horas,minutos,segundos) {
        //     return horas*3600 + minutos*60 + segundos  
        // }
        // console.log(`La cantidad de segundos es igual a ${tiempo(horas,minutos,segundos)}`)

// 8)Realizar una función de carga de notas en un array. Luego realizar otra función que calcule el promedio de todas y lo devuelva. 
        // let notas=1;
        // let array=[];
        // let suma=0;
        //  function nota() {
        //     while (notas!=0){
        //         notas= parseInt(prompt("Cargue las notas que necesite, precione 0 para finalizar proceso"))
        //         array.push(notas);
        //     } ;
            
        //   return array
        //  }
        // function promedio() {
        //  for (let i = 0; i <nota().length; i++) {
        //      suma = array[i] + suma;
            
        //  }

        //  console.log(`El promedio es igual a : ${suma/(array.length-1)}`);

        // }
        // promedio()
// 9)Escribir una función para cobrar en caja. Agregando funciones que: 
// * Si no es cliente A, agregue el IVA. 
// * Se solicite un monto de descuento a aplicar, y lo aplique.
// * Finalmente, realice el cobro solicitando al usuario con cuánto desea abonar.

        // let monto= parseFloat(prompt("ingrese el monto a cobrar:"));
        // let afip= prompt("Es responsable inscripto? SI/NO");
        // let pago=parseFloat(prompt("¿Con cuanto quiere pagar?"));
        // let des= parseInt(prompt("¿De cuanto es el descuento que le hara al cliente?"));

        // function iva(monto) { //funcion del iva
        //     return monto * 1.21
        // }

        // function descuento(monto,des) { // funcion del descuento
        //       return  ((monto*des)/100)
        // }
        // function cobrar() { // funcion de cobrar, la trabajo con un if segun al condicion del cliente
        //     if (afip.toLowerCase()==="no") {
        //             alert(`resumen: \nUsted compro por ${monto}$\nIVA 21% ${iva(monto)-monto}$\nDescuento proporcionado por el comercio ${descuento(monto,des)}$\nMonto final a pagar ${iva(monto)-descuento(monto,des)}$\nUsted pago con ${pago}$\nSu vuelto es de ${pago-(iva(monto) -descuento(monto,des))}$`)
        //     }  
        //      else{
        //         alert(`resumen: \nUsted compro por ${monto}$\nIVA 21% 0\nDescuento proporcionado por el comercio ${descuento(monto,des)}$\nMonto final a pagar ${monto-descuento(monto,des)}$\nUsted pago con ${pago}$\nSu vuelto es de ${pago-(monto-descuento(monto,des))}$`)
        //     }
        // }
        // cobrar()// llamo a la funcion

// 10)Vamos a realizar (intentando no llorar) un conversor de monedas. Primero vamos a generar una función que reciba dos parámetros, tipo de moneda y monto y la convierta a pesos. (Tipos de moneda aceptados dólares, euros y reales). 
// Luego vamos a realizar una función que llame a esta función dos veces, con parámetros diferentes, sume ambos valores y devuelva el resultado.
// Ejemplo: us$4, €3. Devuelve el total de: $1180. (Dificil no llorar a este punto).
        // const euros = 200;
        // const real = 26;
        // const dolar= 175;
        // let monto=parseInt(prompt("Cuantos euros quiere comprar?"))
        // let monto1=parseInt(prompt("Cuantos dolares quiere comprar?"))

        // function conversor(tipoMoneda,monto) {
        //         return monto*tipoMoneda
        // }
        // conversor(euros,monto);
        // conversor(dolar,monto1)

        // function conversor2() {
        //         return conversor(euros,monto) + conversor(dolar,monto1)
        // }
        // alert(`${monto} Euros mas ${monto1} dolares, es igual a la suma de  ${conversor2()}$ argentinos`)
// 11)Crear una función con 1 parámetro cantidad de números, que pida iterativamente la cantidad de veces ingresada. Ejemplo si por parámetro le paso 5, que pida 5 números. En cada iteración aplicarle a cada número y una función que los triplique. Guardar todos los resultados en un array.
// Ejemplo: Paso por parámetro “4” a la función.
// Luego ingreso 4 números: 30,15,11,14. El array final debe ser: 90,45,33,42.
        // let numeros;
        // let array=[]

        // function triplica(n) {  // funcion para triplicar el numero  ingresado
        //         return numeros*3
        // }

        // function numero(n) {
        //         for ( i = 0; i < n; i++) {// hago un for para que me corte segun el numero ingresado por parametro
        //                 numeros=parseInt(prompt("Ingrese numero"))
        //                 total = triplica(n)
        //                 array.push(total)
        //         }
        //         alert(`Los numeros ingresados triplicado son ${array}`)
        // }
        // numero(4)
// 12)Realizar una función que pida la temperatura máxima y mínima del día, indicando magnitud y medida (Farenheit o Celsius), y mostrar la temperatura media.
        // let sistema= prompt("Su sistema de temperatura es? farenheit/celsius")
        // let temperaturaMaxima=parseInt(prompt("Ingrese la temperatura maxima"));
        // let temperaturaMinima=parseInt(prompt("Ingrese la temperatura minima"));

        //  function temp(tempM,tempMi,sistema) {
        //          if (sistema==="celsius") {
        //                 celsius = (tempM -32) * 5/9
        //                 celsiusMi = (tempMi -32) * 5/9
        //                 alert(`La temperatura promedio es igual a: ${celsius/celsiusMi} grados`)  
        //          }else{
        //                 farenheit= (tempM * 9/5) + 32
        //                 farenheitMi= (tempMi * 9/5) + 32
        //                 alert(`La temperatura promedio es igual a: ${farenheit/farenheitMi} grados`)
        //          }
        
        //  }
        //  temp(temperaturaMaxima,temperaturaMinima,sistema)
        //    Bonus!!

// 13)Vamos a realizar una cotizadora de seguros! 
// * Como primer paso, vamos a solicitar al cliente los siguientes datos: Año de nacimiento, Nombre, sueldo bruto. 
// * En base a su año de nacimiento, vamos a calcular su edad. 
// * Luego, en base a su edad, seleccionar el plan que le corresponda:
// Hasta 18 años: Plan Niños ($4000)
// Hasta 30 años: Plan Joven. ($5200)
// Hasta 60 años: Plan Adulto ($6400)
// 60 en adelante: Plan Adultos Mayores. ($9700)
// * Luego en base al plan, mostrar el monto a pagar . 
// * Por último, en base al bruto calcular si la persona es apta, el monto de la cuota no debe superar el 20% del sueldo bruto!
// * Mostrarle al cliente un mensaje personalizado con su nombre, indicando plan y precio si corresponde, y sino, indicar que no puede acceder al plan de salud.
// * BONUS adicional: Agregar la chance de que pueda incluir a su grupo familiar. En este caso, debería agregar un dato más, cuántas personas hay en su familia. (Más adelante solicitaremos sus edades). El monto total del grupo familiar no debe superar el 30% del sueldo bruto.



        // let añoNacimiento= parseInt(prompt("¿En que año Nacio?"));
        // let nombre= prompt("¿Nombre?")
        // let sueldoBruto=parseInt(prompt("Ingrese su sueldo bruto"));
        // let monto;
        // let totalFamilia;
        // let total;

        // function edad(ed) {     //funcion para saber la edad
        //         return 2021-ed
        // }    

        // function bruto(br) {    // funcion para sacar el 20% del bruto ingresado
        //         return br*0.2
        // }




        // function plan(nombre) { // esta funcion evalua datos de funciones para determinar si podemos dar algun plan
        //         switch (edad(añoNacimiento)>=0) {
        //                 case edad(añoNacimiento)<=18:
        //                      if (4000<= bruto(sueldoBruto)) {
        //                         alert(`Estimado ${nombre} evaluamos los datos ingresados y detallamos:\nLe ofrecemos Plan niños con un monto de $4000 por mes`) 
        //                      }   else{
        //                              alert("Lo sentimos, el monto de la cuota supera el 20% de su sueldo Bruto")
        //                      }
        //                         break;
        //                 case edad(añoNacimiento)>18 && edad(añoNacimiento)<=30:
        //                         if (5200<=bruto(sueldoBruto)) {
        //                                 alert(`Estimado ${nombre} evaluamos los datos ingresados y detallamos:\nLe ofrecemos Plan Joven con un monto de $4000 por mes`) 
        //                     }   else{
        //                                  alert("Lo sentimos, el monto de la cuota supera el 20% de su sueldo Bruto")
        //                              }
        //                         break;
        //                 case edad(añoNacimiento)>30 && edad(añoNacimiento)<=60:
        //                         if (6400<=bruto(sueldoBruto)) {
        //                                 alert(`Estimado ${nombre} evaluamos los datos ingresados y detallamos:\nLe ofrecemos Plan Adulto con un monto de $6400 por mes`) 
        //                     }   else{
        //                                  alert("Lo sentimos, el monto de la cuota supera el 20% de su sueldo Bruto")
        //                              }
        //                         break;
        //                 case edad(añoNacimiento)>60:
        //                         if (9700<=bruto(sueldoBruto)) {
        //                                 alert(`Estimado ${nombre} evaluamos los datos ingresados y detallamos:\nLe ofrecemos Plan Adultos Mayores con un monto de $9700 por mes`) 
        //                     }   else{
        //                                  alert("Lo sentimos, el monto de la cuota supera el 20% de su sueldo Bruto")
        //                              }
        //                         break;
                
        //         }
        // }
        // plan(nombre)

        // /////////////////////////////-----------------------------------------------------------------/////////////////////////////////////////////
        // //bonus
        // function bruto2(br) { // funcion para calcular el 30% del bruto inicial
        //         return br*0.3
        // }

        // let grupoFamiliar=prompt("Desea agregar a grupo familiar? SI/NO" )//pregunto si quiero agregar a grupo familiar

        // function familiar(familiar) {
        //         if (familiar.toLowerCase()==="si") {//evaluamos si queremos ingresar
        //                 totalFamilia=parseInt(prompt("¿Cuantas personas son el grupo familiar?"))
        //                 monto=parseInt(prompt("Ingrese el monto total  del grupo familiar"))
        //                 if (monto<bruto2(sueldoBruto)) {// verificamos que el 30% del bruto inicial mayor a la suma de ingresos de las personas nuevas
        //                  alert(`Listo ya agregamos a las ${totalFamilia} personas al seguro`)
        //         }else{
        //                 alert("El monto total de ingresos familiar supera al 30% de  bruto")
        //              }
        //         }
        // }
        // familiar(grupoFamiliar)

// Realizar un conversor de monedas mejorado! Recibir tres parámetros: monto, moneda del monto, y moneda a convertir. (Las monedas disponibles son: peso, euro, 
        // let monto=parseInt(prompt("ingrese el monto"));
        // let moneda=prompt("Ingrese la moneda del monto")
        // let monedaAConvertir;
        // let euro=195;
        // function conversor(monto,MonedaMonto,monedaAConvertir) {
        //         if (MonedaMonto==="pesos") {
        //                alert(`El monto de euros es de ${monedaAConvertir=monto/euro}`); 
        //         }if (moneda==="euros") {
        //                 alert(`El monto de pesos es de ${monedaAConvertir=monto*euro}`);
        //         }
        // }       
        // conversor(monto,moneda,monedaAConvertir)