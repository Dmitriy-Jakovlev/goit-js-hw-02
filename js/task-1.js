"use strict";

const logItems = function (array) {
    let index = 0;
    for (const item of array) {
        console.log(`${index + 1} - ${item}`);
        index += 1;
    }
}

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);