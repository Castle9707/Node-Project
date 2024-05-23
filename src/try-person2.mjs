// ESM 匯入
import Person2, { PI as MY_CONST } from "./person2.mjs";

const p1 = new Person2("John", 22);

console.log(p1);
console.log(p1 + " "); //轉換字串
console.log(MY_CONST);