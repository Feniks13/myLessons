'use strict';
let arr = ['24321', '55789543', '2345666', '08512', '457112', '09876', '08845322'],
    i;

if (arr.length > 0) {                 /* Не пуст ли массив */
  for (i = 0; i < arr.length; i++){   /* Перебираем массив */
    console.log(i);
  }
} else {
  console.log('Массив пустой');
}

/* 
1 Проверяем не пуст ли Массив               +
2 Перебираем каждый эл-т массива            +
3 Находим элемент начинающийся на 2 или 4
4 выводим в консоль 
*/