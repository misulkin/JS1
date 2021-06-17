document.getElementById('first-task').onclick = firstButton;

function firstButton() {
    let age = prompt('Сколько вам лет?');

    if (age >= 0 && age <= 2) {

        alert('Вы новорожденный')

    } else if (age > 2 && age <= 12) {

        alert('Вы ребенок')

    } else if (age > 12 && age <= 18) {

        alert('Вы подросток')

    } else if (age > 18 && age <= 60) {

        alert('Вы взрослый')

    } else if (age > 60) {

        alert('Вы древний. Жизнь видели')

    } else if (age < 0) {
        alert('Ты чет попутал')

    } else {

        alert('Вы неправильно ввели')

    }
}
//Pervoe zadanie

document.getElementById('second-task').onclick = secondButton;

function secondButton() {

    let numsign = prompt('Веддите номер от 0 до 9');

    if (numsign == 0) {

        alert(')');

    } else if (numsign == 1) {

        alert('!');

    } else if (numsign == 2) {

        alert('@');

    } else if (numsign == 3) {

        alert('#');

    } else if (numsign == 4) {

        alert('#');

    } else if (numsign == 5) {

        alert('%');

    } else if (numsign == 6) {

        alert('^');

    } else if (numsign == 7) {

        alert('&');

    } else if (numsign == 8) {

        alert('*');

    } else if (numsign == 9) {

        alert('(');

    } else {
        alert('Вы ввели недопустимое значение');
    }
}

//vtoroe zadanie

document.getElementById('third-task').onclick = thirdButton;

function thirdButton() {

    let hundrednum = prompt('Ведите 3х-значное число')


    if (hundrednum[0] == hundrednum[1] == hundrednum[2]) {

        alert('Все числа совпадают')

    } else if (hundrednum[0] == hundrednum[1]) {

        alert('Первое и второе число совпадают');

    } else if (hundrednum[0] == hundrednum[2]) {

        alert('Первое и третье яисло совпадают')

    } else if (hundrednum[1] == hundrednum[2]) {

        alert('Второе и третье число совпадают')

    } else {
        alert('Вы ввели чет левое')
    }
}
//3 zadanie

document.getElementById('forth-task').onclick = forthButton;

function forthButton() {

    let year = prompt('Введите год');

    if (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) {

        alert('Этот год высокосный')

    } else {

        alert('Год невысокосный')
    }
}

//4 zadanie

document.getElementById('fifth-task').onclick = fifthButton;

function fifthButton() {

    let palindrom = prompt('Веддите 5-ти значное число');

    if (palindrom[0] == palindrom[4] && palindrom[1] == palindrom[3]) {
        alert('Its a magic. You got a palindrom!')
    } else {
        alert('Чет криво')
    }
}

//5 zadanie

document.getElementById('sixth-task').onclick = converter;

let dollar;

let eur = 0.83;

let uah = 27;

let azn = 1.7;

function converter() {

    dollar = prompt("Введите сколько долларов вам надо обменять")

    document.getElementById('evro').onclick = firstEuro;

    function firstEuro() {

        alert('За ' + dollar + ' единиц доллара вы получите ' + dollar * eur + ' евро')
    }

    document.getElementById('grivna').onclick = secondGrivna;

    function secondGrivna() {

        alert('За ' + dollar + ' единиц доллара вы получите ' + dollar * uah + ' гривен')
    }

    document.getElementById('azer').onclick = thirdAzer;

    function thirdAzer() {

        alert('За ' + dollar + ' единиц доллара вы получите ' + dollar * azn + ' манатов')
    }
}
//6 zadanie
document.getElementById('seventh-task').onclick = seventhButton;

function seventhButton() {

    let cost = prompt('Ваша сумма заказа');

    if (cost >= 0 && cost < 200) {

        alert('К оплате: ' + cost)

    } else if (cost >= 200 && cost < 300) {

        alert('Ваша скидка от суммы ' + cost + ' составит 3%. К оплате: ' + (cost * 0.97))

    } else if (cost >= 300 && cost < 500) {

        alert('Ваша скидка от суммы ' + cost + ' составит 5%. К оплате: ' + (cost * 0.95))

    } else if (cost >= 500) {

        alert('Ваша скидка от суммы ' + cost + ' составит 7%. К оплате: ' + (cost * 0.93))

    } else {
        alert('Неверное значение')
    }
}
document.getElementById('eleven-task').onclick = elevenButton;

function elevenButton() {

    let circleLeng = prompt('Введите длинну окружности');
    let squereSize = prompt('Введите периметр квадрата');
    let circleSquere = (circleLeng ** 2) / 4 * Math.PI;
    let squereSquere = (squereSize / 4) ** 2;

    if (circleSquere >= squereSquere) {

        alert('Площадь квадрата поместится в окружность')

    } else if (circleSquere < squereSquere) {

        alert('Площадь квадрата не поместиться в окружность')

    } else {
        alert('Вы ввели неправильно значение')
    }
}