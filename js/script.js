//В ЗАДАНИЯХ НУЖНО ИСПОЛЬЗОВАТЬ while, do while или for.


// 1. Подсчитать сумму всех чисел в заданном пользователем 
// диапазоне. 

document.querySelector(".task1").onclick = function () {

    let dig1 = prompt('Введите два числа через пробел: ');
    let dig1Arr = dig1.split(' ');
    let res1 = 0;

    if (dig1Arr.length === 2) {

        if (dig1Arr[0] > dig1Arr[1]) {

            let temp1 = dig1Arr[0];
            dig1Arr[0] = dig1Arr[1];
            dig1Arr[1] = temp1;
        }

        for (let i = dig1Arr[0]; i <= dig1Arr[1]; i++) {
            res1 += Number(i);
        }

        alert(`Сумма чисел в этом диапазоне = ${res1}`);

    } else { alert('Вы ввели не два числа! Попробуйте снова.'); }
}


// 2. Запросить 2 числа и найти только наибольший общий
// делитель.

document.querySelector(".task2").onclick = function () {

    do {
        var dig2 = prompt('Введите два числа через пробел: ');
        var dig2Arr = dig2.split(' ');
        if(dig2Arr.length != 2) {
            alert('Вы ввели не два числа! Попробуйте снова.')
        }
    } while (dig2Arr.length != 2);

    if (dig2Arr[0] > dig2Arr[1]) {

        let temp2 = dig2Arr[0];
        dig2Arr[0] = dig2Arr[1];
        dig2Arr[1] = temp2;
    }

    for (let i = dig2Arr[0]; i > 0; i--) {

        if (dig2Arr[1] % i === 0) {

            for (let j = i; j > 0; j--) {

                if (dig2Arr[0] % j === 0) {

                    alert(`Найбольший общий делитель = ${j}`);
                    return;
                }
            }
        }
    }
}


// 3. Запросить у пользователя число и вывести все делители
// этого числа.

document.querySelector(".task3").onclick = function () {

    do {
        var dig3 = +prompt('Введите число > 0, либо "0" для отмены: ');
        if (dig3 === 0) { return; }

    } while (dig3 <= 0);

    let divider = 1;
    let dividers = [];

    while (divider <= dig3) {
        if (dig3 % divider === 0) {
            dividers.push(divider);
        }
        divider++;
    };

    alert(`Все делители этого числа: ${dividers}`);
}