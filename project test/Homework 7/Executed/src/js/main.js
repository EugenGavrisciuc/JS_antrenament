"use strict";
/* jshint browser: true */
/* jshint node: true */

var buttonStart = document.getElementById("start");

var budget = document.getElementsByClassName("budget-valu"),
    daybudget = document.getElementsByClassName("daybudget-value"),
    level = document.getElementsByClassName("level-value"),
    expenses = document.getElementsByClassName("expenses-value"),
    optionalexpenses = document.getElementsByClassName("optionalexpenses-value"),
    income = document.getElementsByClassName("income-value"),
    monthsavings = document.getElementsByClassName("monthsavings-value"),
    yearsavings = document.getElementsByClassName("yearsavings-value"),
    month = document.getElementsByClassName("month-value"),
    year = document.getElementsByClassName("year-value"),
    yearsavings = document.getElementsByClassName("day-value");

var input1 = document.getElementsByClassName("expenses-item");

var but1 = document.getElementsByTagName("button")[0],
    but2 = document.getElementsByTagName("button")[1],
    but3 = document.getElementsByTagName("button")[2];

var optionalexpenses1 = document.querySelectorAll(".optionalexpenses-item")[0],
    optionalexpenses2 = document.querySelectorAll(".optionalexpenses-item")[1],
    optionalexpenses3 = document.querySelectorAll(".optionalexpenses-item")[2];

var checkbox = document.querySelector("#savings"),
    sum = document.querySelector("label"),
    sum2 = document.querySelector("[for = percent]"),
    yearTimeData = document.querySelector(".year"),
    monthTimeData = document.querySelector(".month"),
    dayTimeData = document.querySelector(".day");

console.log(buttonStart);
console.log(budget);
console.log(daybudget);

console.log(input1);
console.log(input1[0]);
console.log(input1[1]);
console.log(input1[2]);
console.log(input1[3]);

console.log(but1);
console.log(but2);
console.log(but3);

console.log(optionalexpenses1);
console.log(optionalexpenses2);
console.log(optionalexpenses3);

console.log(checkbox);
console.log(sum);
console.log(sum2);
console.log(yearTimeData);
console.log(monthTimeData);
console.log(dayTimeData);