/*jslint node: true */
/*jslint devel: true */
/*jshint esversion: 6 */
"use strict";

var money, time, question1, question2,
    money_day, budget, i = 0, aa = 1,
    o = 0,
    tempProfit, resProfit, tempNewProfit, resNewProfit, flatProfit, sortProfit,
    save, percent;

var appData = {
    budget: money,
    timeData: time,
    income: [],
    savings: true,
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
        while (i < 3) {
            var optExp = prompt("Status of optional expenses.");
            appData.optionalExpenses[i] = optExp;
            i++;
        }
    },
    start: function () {
        money = prompt("Your month budget", '');
        if (isNaN(money) || money == null || money == '') {
            alert("Please, insert a number value.");
            appData.start();
        }
    },
    repeat_question1: function () {
        question1 = prompt("Insert your month expenses.", '');
        if (isNaN(question1) || question1 == null || question1 == '') {
            alert("Please, insert a number value.");
            appData.repeat_question1();
        }

    },
    repeat_question2: function () {
        question2 = prompt("How much?");
        if (isNaN(question2) || question2 == null || question2 == '') {
            alert("Please, insert a number value.");
            appData.repeat_question2();
        }
    },
    detectDayBudget: function () {
        money_day = (money / 30);
        alert("Your budget per day: " + (money_day).toFixed());
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
            console.log("Minimal level of remaining.");
        } else if (money_day > 100 && money_day < 2000) {
            console.log("Medium level of remaining.");
        } else if (money_day > 2000) {
            console.log("Big level of remaining");
        } else {
            console.log("Error in detecting level.");
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
        function showElements(element, index, array){   
                alert(element);
                
        }

    },
    showUsTheData: function(){
        alert("Next, will be shown your introduced data.");
        for (var DataElem in appData){
            alert(DataElem + " has " + appData[DataElem]);
        }
    }
};

appData.start();
appData.budget = money;
time = prompt("Date YYYY-MM-DD", '');
appData.switch_conditions();
appData.detectDayBudget();
appData.checkSaving();
appData.optionalExpenses();
appData.moneyremainder();
appData.detectLevel();
appData.chooseIncome();
appData.showUsTheData();
console.log(appData);