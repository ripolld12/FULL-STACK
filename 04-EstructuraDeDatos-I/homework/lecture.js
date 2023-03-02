/*Recursión: Es una funcion que se llama a si misma cumpliendo con una condicion (parecido a un bucle)
Por ejemplo:

5!= 5*4*3*2*1 = 5*4! = 5*4*3! = 5*4*3*2! = 5*4*3*2*1!

Si nos fijamos estamos calculando el factorial varias veces, es decir es una operacion que se repite.

Podemos sacar el factorial de un numero aplicando un bucle:
*/

function factorial(num){
    let resultado = 1
    for (i=num;i>0;i--){
        resultado=resultado*i
    }
    return resultado
}
console.log(factorial(5))

/*Sin embargo, tambien podemos hacerlo usando la recursión
*/

function factorialrec(num){
    if (num===1) return 1 // Esta es la condicion que se debe cumplir para que la funcion deje de incovarse a si misma
    return num*factorialrec(num-1)
}

/* Entonces, si yo a esta funcion le pido que me saque factorialrec(5), va a suceder esto

factorialrec(1)=1   // En este punto el num===1, por tanto retorna 1    ------> retorna 1                                 
factorialrec(2)=2*factorialrec(1)                                       ------> 2*1 retorna 2
factorialrec(3)=3*factorialrec(2)                                       ------> 3*2 retorna 6
factorialrec(4)=4*factorialrec(3)                                       ------> 4*6 retorna 24
factorialrec(5)=5*factorialrec(4)                                       ------> 5*24 retorna 120
STACK EJECUCION


Otro ejemplo factorialrec(3), esto sucede:

Entra al codigo y pregunta si 3 es igual a 1, como no es igual, hace num*factorial(num-1), es decir:

3*factorialrec(2)                       ----> retorna 3*2 = 6    
         2*factorialrec(1)              ----> retorna 2*1 = 2
                    1                   ----> retorna 1           


Ahora intentemos pasar la funcion DecimalABinario a un metodo de recursividad
*/

function DecimalABinario(num) {
    var binario=''
    while (num!==0){ 
       binario=(num%2).toString()+binario;
       num=Math.trunc(num/2)
    }
    return binario
 }
 

 function OtraVersion(num){
    if(num===1) return 1 // Siempre ponemos una condicion que se cumpla y en la que no (else), ponemos la operacion que queremos hacer
    return OtraVersion(Math.trunc(num/2))+(num%2).toString()
    
 }

 console.log(OtraVersion(7))

 /* Hagamos ahora el ejemplo para la funcion BinarioaDecimal */

 function BinarioADecimal(num) {
    let decimal=0
    for (var j=0; j<=num.length-1; j++){
       decimal=decimal+(Math.pow(2,num.length-j-1)*parseInt(num[j])) //*el parseInt no es necesario, porque al hacer la operación JS toma la string como si fuera un numero (ver notas en Notion)
    }
    return decimal
 }

 

