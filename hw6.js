var passwordObject = {};
var numberObject = {};

validatePassword ();

if (passwordObject.valid = `true`){
    alert ("first step done");
    checkNumber();
    if (numberObject.valid = 'true'){
        alert ("second step done");
        sumMyString();
        }else {
            alert ("Something went wrong")
        }
    }


function validatePassword (){
    var userPassword = prompt ('Введите пароль 6-20 символов', 'qwert1');

    let checkPwdLength;
    let checkPwdLetter = false;
    let checkPwdDigit = false;

    (userPassword.length > 5 && userPassword.length < 20)
        ? checkPwdLength = true
        : checkPwdLength = false;

    for (let i = 0; i < userPassword.length; i++) {

        if(Number(userPassword[i])){

            checkPwdDigit = true;

        } else {

            if(userPassword[i].toLowerCase() != userPassword[i].toUpperCase()){
                checkPwdLetter = true;
            }
        }
    }

    if (checkPwdLength == true && checkPwdLetter == true && checkPwdDigit == true) { // проверим, что выводить, Valid or Invalid
        passwordObject.valid = `true`;
        return ('Valid');

    } else {
        passwordObject.valid = `false`;
        return ('Invalid');
    }
}

function checkNumber() {

    let n = prompt ('Enter number to check', 2);

    let checkNumberArray = ['false', 'false', 'false'];

    ( n % 10 === 0) //проверка на деление на 10
        ? checkNumberArray[2] = 'true'
        : checkNumberArray[2] = 'false';

    ( n % 2 == 0) // проверка на четность
        ? checkNumberArray[1] = 'true'
        : checkNumberArray[1] = 'false';

    for (let i = 2; i <= n; i++) {
        if ( n % i == 0)  {
            checkNumberArray[0] = 'false';
        } else {
            checkNumberArray[0] = 'true';
        }
        break;
    }
    if ( n == 2 )  {
        checkNumberArray[0] = 'true';
    }

    console.log (checkNumberArray);

    if (checkNumberArray[0] == true && checkNumberArray[1] == true && checkNumberArray[2] == true){
            numberObject.valid = 'true';
        } else {
            numberObject.valid = 'false';
        }

    return (numberObject.valid);
}

function sumMyString(){
    let string1 = prompt('Введите первое число для сложения', 12345);
    let string2 = prompt('Введите второе число для сложения', 99999);


    let firstArray = [];
    let secondArray = [];
    let arraySumm = []; // массив предназначенный для сложения
    let summRest = []; // массив для остатка от сложения

    for (let i = 0; i < string1.length; i++){ //посимвольно записываем строку в массив
        firstArray[i] = string1 [i];
    }

    for (let i = 0; i < string2.length; i++){ //посимвольно записываем строку в массив
        secondArray[i] = string2 [i];
    }

    if (firstArray.length > secondArray.length) { // если длина первого масива больше второго, то докинуть 0 второму
        while (firstArray.length > secondArray.length)  {
            secondArray.unshift(0);
        }
    }
    if (firstArray.length < secondArray.length) { // если длина второго масива больше первого, то докинуть 0 первому
        while (firstArray.length < secondArray.length) {
            firstArray.unshift(0);
        }
    }
    if (firstArray.length = secondArray.length) { // продолжаем свои грязные делишки с добавлением нулей в начало масивов если их длина равна
        if (+firstArray[0] + +secondArray[0] > 8) { // но только, если сумма [0] эл обоих массивов > 8, с учётом возможной единицы остатка
            firstArray.unshift(0);
            secondArray.unshift(0);
        }
    }
    for (let i = 0; i < firstArray.length; i++) { //записали нули в массив с остатками
        summRest[i] = '0';
    }
    for (let i = 0; i < firstArray.length; i++) { //записали нули в массив с суммой
        arraySumm[i] = '0';
    }

    console.log(summRest);
    console.log(firstArray, secondArray);

    for (let i = firstArray.length - 1; i != -1; i--){ // перебираем значения i от большего к меньшему для инициации сложения
        if ((+summRest[i] + +firstArray[i] + +secondArray[i]) > 9){ //если сумма остатка + эл. первого массива и эл второго > 9
            arraySumm[i] = +summRest[i] + +firstArray[i] + +secondArray[i] - 10; // то мы складываем элементы и остаток, и отнимаем 10
            summRest[i-1] = 1; // а в остаток запишется единица
        } else {
            arraySumm[i] = +summRest[i] + +firstArray[i] + +secondArray[i]; // Иначе мы просто складываем элементы массивов с остатком
        }
    }
    console.log('Складывая строки: ' + string1 + ' и ' + string2 + ' мы получили: ' + arraySumm );
    return arraySumm;
}


