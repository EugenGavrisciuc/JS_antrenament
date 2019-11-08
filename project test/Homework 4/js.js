/*jslint node: true */
/*jslint devel: true */
/*jshint esversion: 6 */
"use strict";

var money, time, question1, question2,
    money_day, budget, i = 0;

var appData = {
    budget: money,
    timeData: time,
    income: [],
    savings: true,
    expenses: {},
    optionalExpenses: {}
};

start();

function start() {
    money = prompt("Your month budget", '');
    if (isNaN(money) || money == null || money == '') {
        alert("Please, insert a number value.");
        start();
    }
}
appData.budget = money;

time = prompt("Date YYYY-MM-DD", '');

var repeat_question1 = function () {
    question1 = prompt("Insert your month expenses.", '');
    if (isNaN(question1) || question1 == null || question1 == '') {
        alert("Please, insert a number value.");
        repeat_question1();
    }
};

function repeat_question2() {
    question2 = prompt("How much?");
    if (isNaN(question2) || question2 == null || question2 == '') {
        alert("Please, insert a number value.");
        repeat_question2();
    }
}

var switch_conditions = function () {
    var k = prompt("Select cicle type:\n1. for \n2. do-while \n3. while \n4. exit");


    switch (k) {
        case '1': {
            for (i; i < 2; i++) {

                repeat_question1();
                repeat_question2();

                appData.expenses[question1] = question2;
            }
            break;
        }

        case '2': {
            do {

                repeat_question1();
                repeat_question2();

                appData.expenses[question1] = question2;
                i++;

            } while (i < 2);
            break;
        }
        case '3': {
            while (i < 2) {

                repeat_question1();
                repeat_question2();

                appData.expenses[question1] = question2;
                i++;
            }

            break;
        }

        case '4': {
            alert("You exit from menu.");
            break;
        }
        default: {
            if (k == null) {
                alert("You exit from menu.");
                break;
            }
            alert("Incorret type. Choose the corect type.");
            switch_conditions();
        }
    }
};

switch_conditions();

function detectDayBudget() {
    money_day = (money / 30);
    alert("Your budget per day: " + (money_day).toFixed());
}

detectDayBudget();

function checkSaving() {
    if (appData.savings == true) {
        var save = +prompt("What is the value of storage?"),
            percent = +prompt("What percent?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Month income: " + appData.monthIncome);
    }
}

checkSaving();

function optionalExpenses() {
    i = 0;
    while (i < 3) {
        var optExp = prompt("Status of optional expenses.");
        appData.optionalExpenses[i] = optExp;
        i++;
    }
}
optionalExpenses();

 function detectLevel() {  
    var money_level = money_day - Math.trunc(money_day);
    alert("Money remainder: " + money_level);
}
detectLevel();
console.log(appData);       