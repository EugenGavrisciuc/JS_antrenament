"use strict";
var money, time, question1, question2,
    money_day, budget;

var appData = {
    budget: money,
    timeData: time,
    income: [],
    savings: false
};

var expenses = {
    question1: question2
};

var optionalExpenses = {

};

money = parseInt(prompt("Your month budget"));
time = prompt("Date YYYY-MM-DD");

question1 = parseInt(prompt("Month expenses"));
question2 = parseInt(prompt("How much?"));

money_day = money / 30;
alert("Your budget per day: " + money_day);