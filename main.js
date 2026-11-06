const grades = require('./modules/data');
const calculateAverage = require('./modules/average');
const findTopStudent = require('./modules/top');
const filterFailed = require('./modules/failed');
const addLetterGrade = require('./modules/letters');

console.log("=== Анализ успеваемости ===");
console.log("1. Средний балл группы:", calculateAverage(grades));
console.log("2. Лучший студент:", findTopStudent(grades));
console.log("3. Список должников:", filterFailed(grades, 60));
console.log("4. Итоговые оценки:", addLetterGrade(grades));