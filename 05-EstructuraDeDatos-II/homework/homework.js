'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos 
  un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/


function LinkedList() {
  this.head = null
  // this._length=0; se puede incluir para indicar que está vacio
}

function Node(value) {
  this.value = value
  this.next = null
}


LinkedList.prototype.add = function(data){  
  let newNode = new Node(data); 
  var current = this.head   
   if (!current) { 
      this.head=newNode;  
      return newNode
   }
   while (current.next){ 
      current=current.next
   }
   current.next=newNode
   return newNode
}

LinkedList.prototype.remove = function(){
  if (this.head===null){      //La lista está vacía
    return null
  }
  if (this.head.next===null){       //La lista tiene un elemento
    var eliminado=this.head
    this.head=null
    return eliminado.value
  }
  var last=this.head
  while (last.next!==null){
  last=last.next
  }
  var current=this.head
  while(current.next.next){       //Mientras tenga dos elementos delante de mi, ubicame en el penultimo elemento
  current=current.next
  }
  current.next=null
  return last.value
}

// LinkedList.prototype.search = function(elemento){
//   var current = this.head;
//   if (current===null) {
//     return null
//   }
//   if (typeof elemento !== 'function'){
//     if (current.next===null){
//       if (current.value===elemento) return current.value
//       return null
//     }
//     var eliminado = 0
//     while (current.next!==null){
//       if (current.value===elemento){
//         eliminado = 1
//         return current.value
//       }
//       current=current.next
//     }
//     if (current.value!==null && current.next===null){
//       if (current.value===elemento){
//         eliminado = 1
//         return current.value
//       }
//     }
//     if (eliminado === 0) return null
//   }else{
//     if (current.next===null){
//       if (elemento(current.value)===true) return current.value
//       return null
//     }

//     var eliminado2 = 0
//     while (current.next!==null){
//       if (elemento(current.value)===true){
//         eliminado2 = 1
//         return current.value
//       }
//       current=current.next
//     }
//     if (current.value!==null && current.next===null){
//       if (elemento(current.value)===true){
//         eliminado2 = 1
//         return current.value
//       }
//     }
//     if (eliminado2 === 0) return null

//   }
// }

LinkedList.prototype.search = function(elemento){
  var current = this.head;
  if (!current) {
    return null
  }
  if (typeof elemento === 'function'){
    while (current){
      if (elemento(current.value)){
        return current.value
    }
    current=current.next;
  }
} else{
    while (current){
      if (current.value===elemento){
        return current.value
      }
      current=current.next
    }
    return null
  }    
}




/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la 
información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). 
(Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets 
por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter 
    del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina 
    la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket
    correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 
'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/


function HashTable() {
  this.bucket=[]   // Un bucket será la posicion o espacio en el array donde se colocará un objeto que será tipo {key,value}
  this.numBuckets=35      // Esto me va a indicar cuantas posiciones o espacios maximos puede tener el array
}

HashTable.prototype.hash=function(clave){        
  var sum = 0
  for (var i=0; i<=clave.length-1; i++){
    sum += clave.charCodeAt(i)
  }
  return sum%this.numBuckets
}

HashTable.prototype.set=function(clave, valor){
  if (typeof clave !== 'string') throw TypeError('La clave debe ser un string')
  var pos = this.hash(clave)
  if (this.bucket[pos]===undefined) {   // Si esta posicion del array esta vacia creo un objeto nuevo // si lo pongo como null no me lo reconoce (creo que es porque es un objeto) (tiene que ser undefined y no null, no es un dato, es un objeto)
    this.bucket[pos]={[clave]: valor} // Coloco bracket notation a clave porque si no se lo pongo me queda clave fijo, y lo que quiero es el valor de la variable clave
  }else{
    this.bucket[pos][clave] = valor  // Si esta posicion del array ya tiene un objeto, le digo que a ese objeto le agregue la propiedad y valor que quiero
  }    
}

HashTable.prototype.get=function(clave){
  var pos = this.hash(clave)
  if (this.bucket[pos].hasOwnProperty(clave)) return this.bucket[pos][clave];
}

HashTable.prototype.hasKey=function(clave){
  var pos = this.hash(clave)
  if (this.bucket[pos].hasOwnProperty(clave)) return true;
  return false
}

var Tabla = new HashTable()
console.log(Tabla)
console.log(Tabla.hash('Estudiante'))
console.log(Tabla.set('Estudiante','Diana'))
console.log(Tabla)
console.log(Tabla.get('Estudiante'))
console.group(Tabla.size)

var obj ={Estudiante: 'Diana'}
console.log(obj.Estudiante)




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
