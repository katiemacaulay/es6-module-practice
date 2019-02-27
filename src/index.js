import add from "./modules/add.js";
import subtract from "./modules/subtract.js";
import multiply from "./modules/multiply.js";
import divide from "./modules/divide.js";
import {addOne, addTen, addFive} from "./modules/addNumbers.js";
import {subtractOne, subtractFive, subtractTen} from "./modules/subtractNumbers.js";

const number1 = 8008135;
const number2 = 28719489;

let answer = add(number1,number2);
console.log(answer);

answer = subtract(number1,number2);
console.log(answer);

answer = multiply(number1,number2);
console.log(answer);

answer = divide(number1,number2);
console.log(answer);

answer = addTen(number1);
console.log(answer);

answer = addFive(number1);
console.log(answer);

answer = addOne(number1);
console.log(answer);

answer = subtractOne(number1);
console.log(answer);

answer = subtractFive(number1);
console.log(answer);

answer = subtractTen(number1);
console.log(answer);
