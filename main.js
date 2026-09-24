console.log("Привет из JavaScript!");
console.log("Моя первая программа на JS");
console.log(" ШАГ 6: Переменные и типы ");

let age = 18;
let name = "Тимофей";
let isStudent = true;
const PI = 3.14159;

console.log("Возраст:", age);
console.log("Имя:", name);
console.log("Студент?", isStudent);
console.log("Число PI:", PI);


let value = 100;
console.log("\nДо изменения типа:", value, "— тип:", typeof value);

value = "Теперь это строка";
console.log("После изменения типа:", value, "— тип:", typeof value);


console.log("\n--- Примитивные типы ---");
let str = "Привет";           
let num = 42;                  
let big = 9007199254740991n;   
let bool = true;               
let undef = undefined;         
let empty = null;              
let sym = Symbol("id");        

console.log("string:", typeof str);
console.log("number:", typeof num);
console.log("bigint:", typeof big);
console.log("boolean:", typeof bool);
console.log("undefined:", typeof undef);
console.log("null:", typeof empty); 
console.log("symbol:", typeof sym);


console.log("\n NaN ");
console.log('"Hello" - 5 =', "Hello" - 5);   
console.log('Number("Hello") =', Number("Hello")); 
console.log('0 / 0 =', 0 / 0);               
console.log("NaN === NaN ?", NaN === NaN);   


console.log("\n Арифметика ");
console.log("5 + 3 =", 5 + 3);
console.log('"5" + 3 =', "5" + 3);   
console.log('"5" - 3 =', "5" - 3);   
console.log('"10" * 2 =', "10" * 2); 


console.log("\n Константы ");
const arr = [1, 2, 3];
console.log("Массив до изменения:", arr);
arr.push(4); 
console.log("Массив после push:", arr);
