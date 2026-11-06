const grades = require('./modules/data');
const calculateAverage = require('./modules/average');
const findTopStudent = require('./modules/top');
const filterFailed = require('./modules/failed');
const addLetterGrade = require('./modules/letters');

console.log("========== ОТЧЁТ ==========");
console.log("1. Средний балл группы:", calculateAverage(grades));
console.log("2. Лучший студент:", findTopStudent(grades));
console.log("3. Список должников:", filterFailed(grades, 60));
console.log("4. Итоговый массив с буквенными оценками:");
console.table(addLetterGrade(grades));
console.log("============================");