"use strict";
var Persons = /** @class */ (function () {
    function Persons(name) {
        this.name = name;
        console.log(this.name + " constructor");
    }
    Persons.Talk = function () {
        console.log("this static is talk ");
    };
    Persons.prototype.run = function () {
        console.log("this is person run");
    };
    return Persons;
}());
var p = new Persons("TEDU");
p.run();
Persons.Talk();
