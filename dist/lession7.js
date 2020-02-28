"use strict";
var isdone = false;
console.log(isdone);
var decimal = 6;
console.log(decimal);
var color = "Blue";
console.log(color);
var fullname = "Ha Hai";
var age = 10;
var sentens = "\nHello my name is " + fullname + ". Age is " + (age + 10) + "\n";
console.log(sentens);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
