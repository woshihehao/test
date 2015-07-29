/**
 * Created by hackeris on 15/7/29.
 */

var screen = document.getElementById("screen");

var println = function(str){

    screen.innerHTML += "<p>" + str + "</p>";
};

console_log = console.log;

console.log = function(str){
    console_log.call(console, str);
    println(str);
};
