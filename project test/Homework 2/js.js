"use strict";
var money, time, question1, question2,
    money_day, budget, i = 0;

var appData = {
    budget: money,
    timeData: time,
    income: [],
    savings: false,
    expenses: {},
    optionalExpenses: {}
};

money = +prompt("Your month budget");
time = prompt("Date YYYY-MM-DD");

var k = prompt("Select cicle type:\n1. for \n2. do-while \n3. while");
switch (k) {
    case '1': {
        for (i; i < 2; i++) {

            question1 = prompt("Insert your month expenses.");
            if (isNaN(question1) || question1 == null || question1 == '') {
                alert("Please, insert a number value");
            }

            question2 = prompt("How much?");
            if (isNaN(question2) || question2 == null || question2 == '') {
                alert("Please, insert a number value");
            }

            appData.expenses[question1] = question2;
        }
        break;
    }

    case '2': {
        do {

            question1 = prompt("Insert your month expenses.");
            if (isNaN(question1) || question1 == null || question1 == '') {
                alert("Please, insert a number value");
            }

            question2 = prompt("How much?");
            if (isNaN(question2) || question2 == null || question2 == '') {
                alert("Please, insert a number value");
            }

            appData.expenses[question1] = question2;
            i++;

        } while (i < 2)
        break;
    }
    case '3': {
        while (i < 2) {

            question1 = prompt("Insert your month expenses.");
            if (isNaN(question1) || question1 == null || question1 == '') {
                alert("Please, insert a number value");
            }

            question2 = prompt("How much?");
            if (isNaN(question2) || question2 == null || question2 == '') {
                alert("Please, insert a number value");
            }

            appData.expenses[question1] = question2;
            i++;

        }
        break;
    }
}

money_day = money / 30;
alert("Your budget per day: " + money_day);