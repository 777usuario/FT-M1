'use strict';

function BinarioADecimal(num) {
   var resultado = 0;
   var indice = num.length - 1;
   for (let i = 0; i < num.length; i++) {
      resultado = resultado + (num[i] * 2 ** indice);
      indice--;
   }
   return parseInt(num,2);
}
console.log(BinarioADecimal('1100'));

function DecimalABinario(num) {
   let resultado = "";
   while (num > 0) {
      resultado = (num % 2) + resultado;
      num = Math.floor(num / 2);
   }
   return resultado;
}
console.log(DecimalABinario(8));

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
