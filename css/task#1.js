//Задача№1
// Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
// Если это число, то вывести в консоль чётное оно или нечётное.
// Если передано не число, выведите: «Упс, кажется, вы ошиблись».
// *NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.


// let suggest = +prompt('Напишите любое число ', '');
// if ((typeof suggest === 'number') && (!isNaN(suggest))){
//     if (suggest % 2 === 0) {
//         console.log('Число четное');
//     } else {
//         console.log('Число нечетное');
//     }
// } else {
//     alert('Упс, кажется, вы ошиблись');
// }

//Упрощенная версия но без тайпофф
// let suggest = +prompt('Напишите любое число');
// if (isNaN(suggest)){
//     alert('Упс, кажется, вы ошиблись');
// } else {
//     if(suggest % 2 === 0) {
//         console.log('Число четное');
//     } else {
//         console.log('Число нечетное');
//     }
// }