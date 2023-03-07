
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) { // Inicialmente a, b y c se les hace hoisting y se les asigna undefined
                             // pero al momento de invocarse la funcion, se les asignan los valores que corresponden           
   // a= 8
   // b= 9                     
   // c= 10                     
   // x= undef                     
   // f=function(){...} undef      function
   var x = 10;
   console.log(x);  // Devuelve 10
   console.log(a);  // Devuelve 8
   var f = function (a, b, c) {
      // // CREATION PHASE           EXECUTION PHASE
      // a= undef                      8
      // b= undef                      9
      // c= undef                      10
      // x= undef                      5
      b = a; 
      console.log(b); // Devuelve 8
      b = c; //b=10
      var x = 5; 
   };
   f(a, b, c); 
   console.log(b); // Devuelve 9
};
c(8, 9, 10);
console.log(b); // Devuelve 10
console.log(x); // Devuelve 1

// CREATION PHASE                               
// a= undef
// b= undef
// c=function(a,b,c){...} = undef

// EXECUTION PHASE
// a=5
// b=10
// c=function
// c(8,9,10) --> Nuevo contexto de ejecución funcion c --> Devuelve 10 y 8
// f(a,b,c) --> Nuevo contexto de ejecución funcion f --> Devuelve 8
// console.log (b) --> contexto de la funcion c --> Devuelve 9
// console.log (b) --> contexto global --> Devuelve 10
// console.log (x) --> contexto global --> Devuelve 1




var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);


var instructor = 'Tony';
console.log(instructor);
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();
console.log(instructor);


var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm);

6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 // infinity
{}[0] // undefined
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
// [] == ![]
