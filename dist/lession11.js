"use strict";
var displaycolors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
};
displaycolors('Xin chào bạn', 'Red');
displaycolors('Xin chào bạn', 'Red', 'Green');
displaycolors('Xin chào bạn', 'Red', 'Green', 'Blue');
