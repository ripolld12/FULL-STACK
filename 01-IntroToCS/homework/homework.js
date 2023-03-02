'use strict';

function BinarioADecimal(num) {
   let decimal=0
   for (var j=0; j<=num.length-1; j++){
      decimal=decimal+(Math.pow(2,num.length-j-1)*parseInt(num[j])) //*el parseInt no es necesario, porque al hacer la operación JS toma la string como si fuera un numero (ver notas en Notion)
   }
   return decimal
}
console.log(BinarioADecimal('111')) //*Prueba, activar Quokka

function DecimalABinario(num) {
   var binario=''
   while (num!==0){ //*Tiene que ser diferente de cero para que aplica para decimales positivos y negativos
      binario=(num%2).toString()+binario;
      num=Math.trunc(num/2)
   }
   return binario
}
console.log(DecimalABinario(7)) //*Prueba, activar Quokka

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
