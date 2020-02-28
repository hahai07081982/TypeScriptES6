var bonus=()=>2;
var getbonus=function(value=20,tax=value*bonus()){
    console.log(value+tax);
    console.log(arguments.length);
}
getbonus();
getbonus(undefined,100);
getbonus(100,200);
getbonus(120)