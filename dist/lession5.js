"use strict";
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
};
for (var i = 1; i <= 5; i++) {
    _loop_1(i);
}
/*for (var i = 1; i <= 5; i++) {
    (function(x){
        setTimeout(function () {
            console.log(x);
        }, 1000);
    })(i)
}*/ 
