# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor. 
   VARIABLE DECLARADA CON VAR     &&     VARIABLE DIRECTA
   - se puede usar la variable         - Esta es global se supone que son mala practicas
   siempre y cuando este declarada       se usa y se puede tener acceso a ella antes o despues de declararla. 
   antes, no despues.                                   
```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);
   console.log(a);
   var f = function (a, b, c) {
      b = a;
      console.log(b);
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);
```

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);
```

```javascript
var instructor = 'Tony';
console.log(instructor);
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();
console.log(instructor);
```

```javascript
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
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"           // 2
"2" * "3"         // 6
4 + 5 + "px"      // 9px
"$" + 4 + 5       // $9
"4" - 2           // 2
"4px" - 2         // NaN
7 / 0             // infinity
{}[0]             // underfine
parseInt("09")    // 9
5 && 2            // 2
2 && 5            // 5
5 || 0            // 5
0 || 5            // 5
[3]+[3]-[10]      // 23
3>2>1             // false
[] == ![]         // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {   
   console.log(a);        
   console.log(foo());    // El output o salida en ésta linea es está ¿porque?
   var a = 1;             // El valor de la variable declarada con var no puede estar antes sin ser declarada.
   function foo() {       // - tiene que estar despues de haberse declarado por que el resultado es undefined. 
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);  // indefinida
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());  /*<-- esté seria la salida o output ¿Por que? al ejecutarse Javascrip, console.log(obj.prop.getFullname())
                                       llama de forma presisa al return this.fullname dando el valor el fullname: 'Aurelio De Rosa' y no otro */
var test = obj.prop.getFullname;

console.log(test());                  
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);             // primero ¿Por que? es un consolo.log y javascrip comienza a leer de arriba a bajo ademas no delega la tarea.
   setTimeout(function () {
      console.log(2);          // cuarto ¿Por que? al delegar la tarea es la ultima en entregarse ya que el setTimeout lo limita a espera..
   }, 1000);
   setTimeout(function () {
      console.log(3);          // tercero ¿Por que? al delegar esta tarea es la primera en estregar
   }, 0);
   console.log(4);             // segundo ¿Por que? es un consolo.log y no tiene que esperar como los setTimeout.
}

printing();                    //1, 4, 3, 2            
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
