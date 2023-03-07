'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value=value;
   this.left=null;
   this.rigth=null;
}

// BinarySearchTree.prototype.size=function(){
//    var size=1
//    if (this.left) size = size + this.left.size()
//    if (this.rigth) size = size + this.rigth.size()
//    return size
// }

BinarySearchTree.prototype.size=function(){
   if (!this.right && !this.left){                // si no tiene nada a la derecha ni a la izquierda
      return 1
   }
   if (!this.left) return 1 + this.rigth.size()   // si no tiene nada a la izquierda pero si a la derecha
   if (!this.rigth) return 1 + this.left.size()   // si no tiene nada a la derecha pero si a la izquierda
   if (this.rigth && this.left) return 1 + this.rigth.size() + this.left.size()   // si  tiene algo a la derecha y a la izquierda
}




BinarySearchTree.prototype.insert=function(value){
   if (value<=this.value){
      if(!this.left){
         this.left= new BinarySearchTree(value)
      }else{
         this.left.insert(value)
      }
   }else{
      if(!this.rigth){
         this.rigth= new BinarySearchTree(value)
      }else{
         this.rigth.insert(value)
      }
   }
}

BinarySearchTree.prototype.contains=function(value){
   if (this.value===value) return true
   if (value<this.value) {
      if (!this.left) {
         return false
      } else {
         return this.left.contains(value)
      }
   }else{
      if (!this.rigth){
         return false
      } else {
         return this.rigth.contains(value)
      }
   }
}

/* value = 17
1. this.value (20) === value (17) ??? NO, entonces
2. value (17) < this.value (20) ??? SI, entonces
3. this.left.value (15) === value (17) ??? NO, entonces
4. this.contains(this.left.value (15))


*/


var tree = new BinarySearchTree(20)
console.log(tree)
tree.insert(15)
tree.insert(25)
tree.insert(5)
tree.insert(17)
tree.insert(21)
tree.insert(28)
tree.insert(0)
tree.insert(14)
tree.insert(50)
tree.insert(1)
tree.insert(45)
tree.insert(13)
tree.insert(12)
tree.insert(11)
tree.insert(30)
tree.insert(35)
tree.insert(31)
tree.insert(34)

console.log(tree)

console.log(tree.contains(1))

BinarySearchTree.prototype.depthFirstForEach=function(cb, order){
   if (order==='pre-order'){
      cb(this.value)
      this.left && this.left.depthFirstForEach(cb, order)
      this.rigth && this.rigth.depthFirstForEach(cb, order)
   } else if (order==='in-order') {
      this.left && this.left.depthFirstForEach(cb, order)
      cb(this.value)
      this.rigth && this.rigth.depthFirstForEach(cb, order)
   } else {
      this.left && this.left.depthFirstForEach(cb, order)
      this.rigth && this.rigth.depthFirstForEach(cb, order)
      cb(this.value)
   }
}

BinarySearchTree.prototype.breadthFirstForEach=function(){

}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
