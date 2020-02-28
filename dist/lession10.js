"use strict";
var bonus = function () { return 2; };
var getbonus = function (value, tax) {
    if (value === void 0) { value = 20; }
    if (tax === void 0) { tax = value * bonus(); }
    console.log(value + tax);
    console.log(arguments.length);
};
getbonus();
getbonus(undefined, 100);
getbonus(100, 200);
getbonus(120);
