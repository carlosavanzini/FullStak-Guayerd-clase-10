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

        // let farenheit;
        // let celsius;
        // function clima(temperatura,sistema) {
        //    if (sistema==="farenheit") {
        
        //     return celsius = (temperatura -32) * 5/9

        //    } else if(sistema==="celsius") {
        //      return(farenheit= (temperatura * 9/5) + 32)
        //   } 
        //  }

        // console.log(clima(180,"celsius")):

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
// 7)Crear una función que reciba tres parámetros: Horas, minutos y segundos, y devolver todo pasado a segundos.
// 8)Realizar una función de carga de notas en un array. Luego realizar otra función que calcule el promedio de todas y lo devuelva. 
// 9)Escribir una función para cobrar en caja. Agregando funciones que: 
// * Si no es cliente A, agregue el IVA. 
// * Se solicite un monto de descuento a aplicar, y lo aplique.
// * Finalmente, realice el cobro solicitando al usuario con cuánto desea abonar.
// 10)Vamos a realizar (intentando no llorar) un conversor de monedas. Primero vamos a generar una función que reciba dos parámetros, tipo de moneda y monto y la convierta a pesos. (Tipos de moneda aceptados dólares, euros y reales). 
// Luego vamos a realizar una función que llame a esta función dos veces, con parámetros diferentes, sume ambos valores y devuelva el resultado.
// Ejemplo: us$4, €3. Devuelve el total de: $1180. (Dificil no llorar a este punto). 
// 11)Crear una función con 1 parámetro cantidad de números, que pida iterativamente la cantidad de veces ingresada. Ejemplo si por parámetro le paso 5, que pida 5 números. En cada iteración aplicarle a cada número y una función que los triplique. Guardar todos los resultados en un array.
// Ejemplo: Paso por parámetro “4” a la función.
// Luego ingreso 4 números: 30,15,11,14. El array final debe ser: 90,45,33,42.
// 12)Realizar una función que pida la temperatura máxima y mínima del día, indicando magnitud y medida (Farenheit o Celsius), y mostrar la temperatura media.

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

// Realizar un conversor de monedas mejorado! Recibir tres parámetros: monto, moneda del monto, y moneda a convertir. (Las monedas disponibles son: peso, euro, 