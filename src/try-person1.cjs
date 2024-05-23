// CJS 匯入
const { Person1, PI: MY_CONST } = require("./person1.cjs");
//PI:更改別名

const p1 = new Person1("David", 29);

console.log(p1);
console.log(p1 + " "); //轉換字串
console.log(MY_CONST);