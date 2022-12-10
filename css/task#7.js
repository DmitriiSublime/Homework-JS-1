// Задание 7.
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

// let evenNumbers = 0;
// let oddNumbers = 0;
// let otherNumbers = 0;
// let array = [0, 1, 2, 3, 4, 5, 6, 7, null, undefined, 'b', 'c'];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] === 0 || (typeof (array[i]) !== 'number')){
//             otherNumbers++;
//         } else {
//             if (array[i] % 2 === 0) {
//                 evenNumbers++;
//         } else {
//             oddNumbers++;
//         }
//     }
// }
// console.log('Количество четных чисел ' + evenNumbers);
// console.log('Количество нечетных чисел ' + oddNumbers);
// console.log('Количество остальных чисел/элементов ' + otherNumbers);