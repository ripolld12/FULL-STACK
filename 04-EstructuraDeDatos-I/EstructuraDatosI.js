/* ESTRUCTURAS DE DATOS - PARTE I

Se refiere a cómo organizamos los datos cuando programamos. 
Existen diferentes formas de estructuras de datos, unas mas simples (entero, caracter, etc ) y otras mas complejas (arrays, listas, filers)

Los arrays ya los conocemos

Las listas son estructuras de datos que se asemejan a una cadena de elementos conectados en donde se conoce información del de adelante pero no del 
de atras.

    Las listas pueden ser lineales o no lineales.
    
    Lineales: tiene un inicio y un fin. En estas se plantean stacks (van conectados como una pila -"Entrada"-->(LIFO)) y queues (Salen diguien el (FIFO))
    
    No lineales: ej: como un circulo, donde el primero se conecta con el ultimo. Tambien pueden tener forma de arbol, en donde puedo tener diferentes ramas, o niveles,

La diferencia entre un arreglo y una lista, es que los arreglos ocupan posiciones consecutivas en memoria, es decir cada elemento va guardado en espacios continuos, 
esto puede ser un limite ya que implica que para un array siempre debo tener espacios consecutivos libres donde quepa el arreglo, las listas no necesitan que los espacios
en memoria estan continuos.

SETS: Son arreglos en donde no se repiten los valores, veamos un ejemplo:
*/

var arr=[1,5,5,1,7,0,3,3]
var set= new Set(arr)   // Trabaja como un constructor, por eso lo invocamos con un new

console.log(set)

/* El Set me devuelve un objeto*/

var arr2=[1,5,5,1,7,0,3,3,{name:'Diana'},{name:'Diana'}]
var set2= new Set(arr2)

console.log(set2)

/* No me borra el 'Diana' porque son dos objetos diferentes, es decir, son dos referencias distantas, por tanto no las reconoce como si fuesen el mismo elemento */

/* PILAS (STACKS)

Funcionan por LIFO (Last In First Out) --> Ultimo en entrar, Primero en salir

Los arreglos se podrian comportan como pilas. Ej:

*/

var stack=[]
stack.push(2) // [2]
stack.push(5) // [2,5]
stack.push(6) // [2,5,6]

/* Si yo hago pop, me saca el ultimo, por tanto el 6 que fue el ultimo que entro, sera el primero en salir. */

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

/* COLAS (QUEUE)

Funcionan por FIFO (First In First Out) --> Primero en entrar, Primero en salir

Los arreglos tambien podrian comportarse como colas. EJ:

*/
var queue=[]
queue.push(2) // [2]
queue.push(5) // [2,5]
queue.push(6) // [2,5,6]

/* Si yo hago shift, me saca el primero, por tanto el 2 que fue el primero que entro, era el primero en salir. */

console.log(queue.shift())
console.log(queue.shift())
console.log(queue.shift())


