/*jslint node: true */
/*jslint devel: true */
/*jshint esversion: 6 */
/* jshint browser: true */
"use strict";

var buttonStart = document.getElementById("start");

var budgetVal = document.getElementsByClassName("budget-value")[0],
    daybudget = document.getElementsByClassName("daybudget-value")[0],
    level = document.getElementsByClassName("level-value")[0],
    expensesVal = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    income = document.getElementsByClassName("income-value")[0],
    monthsavings = document.getElementsByClassName("monthsavings-value")[0],
    yearsavings = document.getElementsByClassName("yearsavings-value")[0],
    month = document.getElementsByClassName("month-value")[0],
    year = document.getElementsByClassName("year-value")[0],
    day = document.getElementsByClassName("day-value")[0],
    incomeitm = document.querySelector(".choose-income"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePer = document.querySelector(".choose-percent");

var input1 = document.getElementsByClassName("expenses-item");

var but1 = document.getElementsByTagName("button")[0],
    but2 = document.getElementsByTagName("button")[1],
    but3 = document.getElementsByTagName("button")[2];

var optionalexpenses1 = document.querySelectorAll(".optionalexpenses-item");
// optionalexpenses2 = document.querySelectorAll(".optionalexpenses-item")[1],
// optionalexpenses3 = document.querySelectorAll(".optionalexpenses-item")[2];

var checkbox = document.querySelector("#savings"),
    sum = document.querySelector("label"),
    sum2 = document.querySelector("[for = percent]"),
    yearTimeData = document.querySelector(".year"),
    monthTimeData = document.querySelector(".month"),
    dayTimeData = document.querySelector(".day");

var money, time, question1, question2,
    money_day, budget, i = 0,
    aa = 1,
    o = 0,
    tempProfit, resProfit, tempNewProfit, resNewProfit, flatProfit, sortProfit,
    save, percent, addSum, calcAllSum;

var appData = {
    budget: money,
    timeData: time,
    income: [],
    savings: false,
    expenses: {},
    switch_conditions: function () {
        var k = prompt("Select cicle type:\n1. for \n2. do-while \n3. while \n4. exit");

        switch (k) {
            case '1': {
                for (i; i < 2; i++) {

                    appData.repeat_question1();
                    appData.repeat_question2();

                    appData.expenses[question1] = question2;
                }
                break;
            }

            case '2': {
                do {

                    appData.repeat_question1();
                    appData.repeat_question2();

                    appData.expenses[question1] = question2;
                    i++;

                } while (i < 2);
                break;
            }
            case '3': {
                while (i < 2) {

                    appData.repeat_question1();
                    appData.repeat_question2();

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
                appData.switch_conditions();
            }
        }
    },
    optionalExpenses: function () {
        i = 0;
        while (i < optionalexpenses1.length) {
            // var optExp = prompt("Status of optional expenses.");
            var optExp = optionalexpenses1[i].value;
            appData.optionalExpenses[i] = optExp;
            optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
            i++;
        }
    },
    start: function () {
        money = prompt("Your month budget", '');
        if (isNaN(money) || money == null || money == '') {
            alert("Please, insert a number value.");
            appData.start();
        } else {
            appData.budget = money;
            budgetVal.textContent = money;

            time = prompt("Date YYYY-MM-DD", '');
            appData.timeData = time;
            year.value = new Date(Date.parse(time)).getFullYear();
            month.value = new Date(Date.parse(time)).getMonth() + 1;
            day.value = new Date(Date.parse(time)).getDate();
        }
    },
    repeat_question1: function () {
        // question1 = prompt("Insert your month expenses.", '');
        question1 = input1[i].value;
        // if (isNaN(question1) || question1 == null || question1 == '') {
        //     alert("Please, insert a number value.");
        //     appData.repeat_question1();
        // }

    },
    repeat_question2: function () {
        // question2 = prompt("How much?");
        question2 = input1[++i].value;
        if (isNaN(question2) || question2 == null || question2 == '') {
            alert("Please, insert a number value.");
            // appData.repeat_question2();
        }
    },
    detectDayBudget: function () {
        calcAllSum = money - addSum;
        money_day = (calcAllSum / 30).toFixed();
        daybudget.textContent = money_day;
        // alert("Your budget per day: " + (money_day).toFixed());
    },
    checkSaving: function () {
        function saveVerify() {
            save = prompt("What is the value of storage?", "");
            if (isNaN(save) || save == null || save == "") {
                alert("Please, insert a number value.");
                saveVerify();
            }
        }

        function percentVerify() {
            percent = prompt("What percent?", "");
            if (isNaN(percent) || percent == null || percent == "") {
                alert("Please, insert a number value.");
                percentVerify();

            }
        }

        if (appData.savings == true) {
            saveVerify();
            percentVerify();
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Month income: " + appData.monthIncome);
        }

    },
    moneyremainder: function () {
        var money_level = money_day - Math.trunc(money_day);
        alert("Money remainder (rest): " + money_level);
    },
    detectLevel: function () {
        if (money_day < 100) {
            level.textContent = "Minimal level of remaining.";
        } else if (money_day > 100 && money_day < 2000) {
            level.textContent = "Medium level of remaining.";
        } else if (money_day > 2000) {
            level.textContent = "Big level of remaining";
        } else {
            level.textContent = "Error in detecting level.";
        }
    },
    chooseIncome: function () {

        alternative();

        function alternative() {
            tempProfit = prompt("What things will give you more profit? (Enumerate them with ',' (comma) and space", "");
            if (tempProfit == null || tempProfit == "") {
                alert("Insert a value.");
                alternative();
            }
            resProfit = tempProfit.split(', ');
            resProfit.every(NumberOrString);
            for (let o = 0; o < resProfit.length; o++) {
                if (resProfit[o].includes(".") || resProfit[o].includes(",") || resProfit[o].includes("/") || resProfit[o].includes("@") || resProfit[o].includes("'") || resProfit[o].includes(";") || resProfit[o].includes("[") || resProfit[o].includes("]") || resProfit[o].includes("|") || resProfit[o].includes("-") || resProfit[o].includes("+")) {
                    alert("Please, do not use symbols (, . / @ etc.)");
                    resProfit = [];
                    alternative();
                }
            }
        }

        function NumberOrString(element, index, array) {
            if (isNaN(element) || element == "") {
                //Codul daca este adevarat
            } else {
                alert("Please, insert only words.");
                resProfit = [];
                alternative();
            }
        }

        alternative2();

        function alternative2() {
            tempNewProfit = prompt("Other methods?", "");
            if (tempNewProfit == null || tempNewProfit == "") {
                alert("Insert a value.");
                alternative2();
            }
            resNewProfit = tempNewProfit.split(', ');
            resNewProfit.every(NumberOrString2);
            for (o = 0; o < resNewProfit.length; o++) {
                if (resNewProfit[o].includes(".") || resNewProfit[o].includes(",") || resNewProfit[o].includes("/") || resNewProfit[o].includes("@") || resNewProfit[o].includes("'") || resNewProfit[o].includes(";") || resNewProfit[o].includes("[") || resNewProfit[o].includes("]") || resNewProfit[o].includes("|") || resNewProfit[o].includes("-") || resNewProfit[o].includes("+")) {
                    alert("Please, do not use symbols (, . / @ etc.)");
                    resNewProfit = [];
                    alternative2();
                }
            }
        }

        function NumberOrString2(element, index, array) {
            if (isNaN(element) || element == "") {
                //Codul daca este adevarat
            } else {
                alert("Please, insert only words.");
                resNewProfit = [];
                alternative2();
            }
        }

        function NumberOrString3(element, index, array) {
            if (isNaN(element) || element == "") {
                //Codul daca este adevarat
            } else {
                alert("Please, insert only words.");
                resProfit = [];
                resNewProfit = [];
                alternative();
                alternative2();
            }
        }

        resProfit.push(resNewProfit);
        flatProfit = resProfit.flat();
        sortProfit = flatProfit.sort();
        sortProfit.every(NumberOrString3);
        appData.income = sortProfit;

        appData.income.slice(1).forEach(showElements);

        function showElements(element, index, array) {
            alert(element);

        }

    },
    showUsTheData: function () {
        alert("Next, will be shown your introduced data.");
        for (var DataElem in appData) {
            alert(DataElem + " has " + appData[DataElem]);
        }
    }
};

// appData.switch_conditions();
// appData.detectDayBudget();
// appData.checkSaving();
// appData.optionalExpenses();
// appData.moneyremainder();
// appData.chooseIncome();
// appData.showUsTheData();


but1.disabled = true;
but2.disabled = true;
but3.disabled = true;

buttonStart.addEventListener("click", function () {
    but1.disabled = false;
    but2.disabled = false;
    but3.disabled = false;
    appData.start();
});

but1.addEventListener("click", function () {
    addSum = 0;

    for (i; i < input1.length; i++) {

        appData.repeat_question1();
        appData.repeat_question2();

        appData.expenses[question1] = question2;
        addSum += +question2;

    }

    expensesVal.textContent = addSum;

});
but2.addEventListener("click", appData.optionalExpenses);
but3.addEventListener("click", function () {

    if (appData.budget != undefined) {
        appData.detectDayBudget();
        appData.detectLevel();
    } else {
        daybudget.textContent = "Error, please insert your budget.";
    }
});
incomeitm.addEventListener("input", function () {
    tempProfit = incomeitm.value;
    appData.income = tempProfit.split(', ');
    income.textContent = appData.income;


});
checkbox.addEventListener("click", function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});
chooseSum.addEventListener("input", function () {
    if (appData.savings == true) {
        let sumVal = +chooseSum.value,
            percVal = +choosePer.value;

        appData.monthIncome = sumVal / 100 / 12 * percVal;
        appData.yearIncome = sumVal / 100 * percVal;

        monthsavings.textContent = appData.monthIncome.toFixed(1);
        yearsavings.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePer.addEventListener("input", function () {
    if (appData.savings == true) {
        let sumVal = +chooseSum.value,
            percVal = +choosePer.value;

        appData.monthIncome = sumVal / 100 / 12 * percVal;
        appData.yearIncome = sumVal / 100 * percVal;

        monthsavings.textContent = appData.monthIncome.toFixed(1);
        yearsavings.textContent = appData.yearIncome.toFixed(1);
    }
});

console.log(appData);