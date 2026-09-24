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


console.log("\n Примитивные типы ");
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
console.log("\n ШАГ 7: typeof");

let newPrice = 999;
console.log("Значение:", newPrice, "— тип:", typeof newPrice);

newPrice = "Девятьсот девяносто девять";
console.log("Значение:", newPrice, "— тип:", typeof newPrice);


console.log("\n Особенности typeof ");
console.log("typeof null =", typeof null);          
console.log("typeof [] =", typeof []);               
console.log("typeof {} =", typeof {});               
console.log("typeof function(){} =", typeof function(){}); 


let data = null;
console.log("\nПравильная проверка на null:");
console.log("data === null ?", data === null);
console.log("\n ШАГ 8: Преобразования типов ");


console.log(" Явные");
console.log('Number("42") =', Number("42"));
console.log('String(100) =', String(100));
console.log('Boolean(1) =', Boolean(1));
console.log('Boolean(0) =', Boolean(0));
console.log('parseInt("3.14") =', parseInt("3.14"));
console.log('parseFloat("3.14") =', parseFloat("3.14"));


console.log("\n Неявные ");
console.log('"5" + 3 =', "5" + 3);       
console.log('"5" - 3 =', "5" - 3);       
console.log('"10" * 2 =', "10" * 2);     
console.log('"5" + 3 + 2 =', "5" + 3 + 2); 
console.log("\n ШАГ 9: Сравнение ");

console.log('5 == "5" :', 5 == "5");     
console.log('5 === "5" :', 5 === "5");   
console.log('5 != "5" :', 5 != "5");     
console.log('5 !== "5" :', 5 !== "5");   

const obj1 = { name: "Тимофей" };
const obj2 = { name: "Иван" };
const obj3 = obj1;

console.log("\n Сравнение объектов ");
console.log("obj1 == obj2 :", obj1 == obj2);   
console.log("obj1 === obj2:", obj1 === obj2);  
console.log("obj1 === obj3:", obj1 === obj3);  
console.log("\n ШАГ 10: Консоль");

let x1 = 10;
let y1 = 2;

console.log("x1 + y1 =", x1 + y1);
console.log("x1 - y1 =", x1 - y1);
console.log("x1 * y1 =", x1 * y1);
console.log("x1 / y1 =", x1 / y1);


x1 = "10";
console.log("\nПосле изменения x1 на строку:");
console.log('x1 + y1 =', x1 + y1);
console.log('x1 - y1 =', x1 - y1); 
console.log('x1 * y1 =', x1 * y1); 
console.log('x1 / y1 =', x1 / y1); 