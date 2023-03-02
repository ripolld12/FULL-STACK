'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) 
es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, 
como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
if(n===1) return 1;
return n*nFactorial(n-1)
}


function nFibonacci(n) {
if(n<0) return undefined
if(n===0) return 0;
if(n===1) return 1;
return nFibonacci(n-2)+nFibonacci(n-1)
}

console.log(nFibonacci(7))

/*


Secuencia: 0,1,1,2,3,5,8,13....

nFibonacci(0)=0
nFibonacci(1)=1
nFibonacci(2)=0+1 (pero 0 lo saque de nFibonacci(0) y 1 de nFibonacci(1)), por tanto,  --->     nFinobacci(2)=nFinobacci(0)+nFinobacci(1)
nFibonacci(3)=1+1 (pero 1 lo saque de nFibonacci(1) y 1 de nFibonacci(2)), por tanto,  --->     nFinobacci(3)=nFinobacci(1)+nFinobacci(2)
nFibonacci(4)=1+2 (pero 1 lo saque de nFibonacci(2) y 2 de nFibonacci(3)), por tanto,  --->     nFinobacci(4)=nFinobacci(2)+nFinobacci(3)



Si sigo asi... me doy cuenta que nFinobacci(n)=nFinobacci(n-2)+nFinobacci(n-1)

Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.items=[]
  this.enqueue=function(element){
    this.items.push(element)}
  this.dequeue=function(){
    var eliminado=this.items[0]
    if (this.items.length===0) return undefined
    this.items.shift(); 
    return eliminado
  }
  this.size=function(){
    
    return this.items.length}
}












/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
