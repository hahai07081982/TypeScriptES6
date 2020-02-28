"use strict";
var employ = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.id);
        }, 1000);
    }
};
employ.greet();
