// task 1
// Напишите функцию, которая будет генерировать случайные числа от 1 до 10.
// Сделайте так, чтобы сгенерированное число было задержкой функции setTimeout в секундах.
// Оберните все это в промис. Пусть промис выполнится успешно, если сгенерировано число от 1 до 5,
// и с ошибкой - если от 6 до 10.
function randomNumberHandler() {
  const promise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * (11 - 1)) + 1;
    console.log(random);

    setTimeout(() => {
      if (random < 5) {
        resolve("Succes");
      } else {
        reject("Error Error Error Error");
      }
    }, random * 1000);
  });
  return promise;
}
randomNumberHandler()
  .then(result => {
    console.log("Succes: " + result);
  })
  .catch(error => {
    console.log("Error: " + error);
  });

// task 2
//Напишите функцию delay, которая принимает задержку и функцию и выполняет ее после заданной задержки
function delay(ms, callback) {
  setTimeout(callback => {}, ms);
}

delay();

// task 3
// Напишите функцию которая принимает число и и через каждые 3 секунды 2 раза возводит число в квадрат
// и выводит промежуточные и конечный результат в консоль.
function squarePow(num) {}

squarePow();

// task 4
// Напишите 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд.
// Пусть каждый промис своим результатом возвращает эту задержку.
// Получите массив результатов, найдите его сумму, выведите на экран.

const delay1 = () => {};

const delay2 = () => {};

const delay3 = () => {};

function sum(term1, term2, term3) {}

sum(delay1, delay2, delay3);
