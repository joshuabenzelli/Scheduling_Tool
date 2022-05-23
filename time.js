// This js file is specifically being used for time to make sure that all colors
// change when they are supposed to based on the hour in the day.

var currentDay = $('#currentDay');
var seven = $('.seven');
var eight = $('.eight');
var nine = $('.nine');
var ten = $('.ten');
var eleven = $('.eleven');
var twelve = $('.twelve');
var one = $('.one');
var two = $('.two');
var three = $('.three');
var four = $('.four');
var five = $('.five');
var six = $('.six');
var time = '';

// This is one long function to change the colors based on the hour of the day.

function current(){
    setInterval(function () {
        currentDay.text(moment().format('dddd, MMM Do @ h:mm:ss a'));
        time = moment().format('h a');
        if(time == '7 am') {
            seven.css('background-color', 'red');
            eight.css('background-color', 'green');
            nine.css('background-color', 'green');
            ten.css('background-color', 'green');
            eleven.css('background-color', 'green');
            twelve.css('background-color', 'green');
            one.css('background-color', 'green');
            two.css('background-color', 'green');
            three.css('background-color', 'green');
            four.css('background-color', 'green');
            five.css('background-color', 'green');
            six.css('background-color', 'green');
            
        }else if(time == '8 am') {
            seven.css('background-color', 'lightgray');
            eight.css('background-color', 'red');
            nine.css('background-color', 'green');
            ten.css('background-color', 'green');
            eleven.css('background-color', 'green');
            twelve.css('background-color', 'green');
            one.css('background-color', 'green');
            two.css('background-color', 'green');
            three.css('background-color', 'green');
            four.css('background-color', 'green');
            five.css('background-color', 'green');
            six.css('background-color', 'green');
            
        }else if(time == '9 am') {
            seven.css('background-color', 'lightgray');
            eight.css('background-color', 'lightgray');
            nine.css('background-color', 'red');
            ten.css('background-color', 'green');
            eleven.css('background-color', 'green');
            twelve.css('background-color', 'green');
            one.css('background-color', 'green');
            two.css('background-color', 'green');
            three.css('background-color', 'green');
            four.css('background-color', 'green');
            five.css('background-color', 'green');
            six.css('background-color', 'green');
        }else if(time == '10 am') {
            seven.css('background-color', 'lightgray');
            eight.css('background-color', 'lightgray');
            nine.css('background-color', 'lightgray');
            ten.css('background-color', 'red');
            eleven.css('background-color', 'green');
            twelve.css('background-color', 'green');
            one.css('background-color', 'green');
            two.css('background-color', 'green');
            three.css('background-color', 'green');
            four.css('background-color', 'green');
            five.css('background-color', 'green');
            six.css('background-color', 'green');
        }else if(time == '11 am') {
            seven.css("background-color", "lightgray");
            eight.css('background-color', 'lightgray');
            nine.css('background-color', 'lightgray');
            ten.css('background-color', 'lightgray');
            eleven.css('background-color', 'red');
            twelve.css('background-color', 'green');
            one.css('background-color', 'green');
            two.css('background-color', 'green');
            three.css('background-color', 'green');
            four.css('background-color', 'green');
            five.css('background-color', 'green');
            six.css('background-color', 'green');
        }else if(time == '12 pm') {
            seven.css('background-color', 'lightgray');
            eight.css('background-color', 'lightgray');
            nine.css('background-color', 'lightgray');
            ten.css('background-color', 'lightgray');
            eleven.css('background-color', 'lightgray');
            twelve.css('background-color', 'red');
            one.css('background-color', 'green');
            two.css('background-color', 'green');
            three.css('background-color', 'green');
            four.css('background-color', 'green');
            five.css('background-color', 'green');
            six.css('background-color', 'green');
        }else if(time == '1 pm') {
            seven.css('background-color', 'lightgray');
            eight.css('background-color', 'lightgray');
            nine.css('background-color', 'lightgray');
            ten.css('background-color', 'lightgray');
            eleven.css('background-color', 'lightgray');
            twelve.css('background-color', 'lightgray');
            one.css('background-color', 'red');
            two.css('background-color', 'green');
            three.css('background-color', 'green');
            four.css('background-color', 'green');
            five.css('background-color', 'green');
            six.css('background-color', 'green');
        }else if(time == '2 pm') {
            seven.css('background-color', 'lightgray');
            eight.css('background-color', 'lightgray');
            nine.css('background-color', 'lightgray');
            ten.css('background-color', 'lightgray');
            eleven.css('background-color', 'lightgray');
            twelve.css('background-color', 'lightgray');
            one.css('background-color', 'lightgray');
            two.css('background-color', 'red');
            three.css('background-color', 'green');
            four.css('background-color', 'green');
            five.css('background-color', 'green');
            six.css('background-color', 'green');
        }else if(time == '3 pm') {
            seven.css('background-color', 'lightgray');
            eight.css('background-color', 'lightgray');
            nine.css('background-color', 'lightgray');
            ten.css('background-color', 'lightgray');
            eleven.css('background-color', 'lightgray');
            twelve.css('background-color', 'lightgray');
            one.css('background-color', 'lightgray');
            two.css('background-color', 'lightgray');
            three.css('background-color', 'red');
            four.css('background-color', 'green');
            five.css('background-color', 'green');
            six.css('background-color', 'green');
        }else if(time == '4 pm') {
            seven.css('background-color', 'lightgray');
            eight.css('background-color', 'lightgray');
            nine.css('background-color', 'lightgray');
            ten.css('background-color', 'lightgray');
            eleven.css('background-color', 'lightgray');
            twelve.css('background-color', 'lightgray');
            one.css('background-color', 'lightgray');
            two.css('background-color', 'lightgray');
            three.css('background-color', 'lightgray');
            four.css('background-color', 'red');
            five.css('background-color', 'green');
            six.css('background-color', 'green');
        }else if(time == '5 pm') {
            seven.css('background-color', 'lightgray');
            eight.css('background-color', 'lightgray');
            nine.css('background-color', 'lightgray');
            ten.css('background-color', 'lightgray');
            eleven.css('background-color', 'lightgray');
            twelve.css('background-color', 'lightgray');
            one.css('background-color', 'lightgray');
            two.css('background-color', 'lightgray');
            three.css('background-color', 'lightgray');
            four.css('background-color', 'lightgray');
            five.css('background-color', 'red');
            six.css('background-color', 'green');
        }else if(time == '6 pm') {
            seven.css('background-color', 'lightgray');
            eight.css('background-color', 'lightgray');
            nine.css('background-color', 'lightgray');
            ten.css('background-color', 'lightgray');
            eleven.css('background-color', 'lightgray');
            twelve.css('background-color', 'lightgray');
            one.css('background-color', 'lightgray');
            two.css('background-color', 'lightgray');
            three.css('background-color', 'lightgray');
            four.css('background-color', 'lightgray');
            five.css('background-color', 'lightgray');
            six.css('background-color', 'red');
        }else {
            seven.css('background-color', 'green');
            eight.css('background-color', 'green');
            nine.css('background-color', 'green');
            ten.css('background-color', 'green');
            eleven.css('background-color', 'green');
            twelve.css('background-color', 'green');
            one.css('background-color', 'green');
            two.css('background-color', 'green');
            three.css('background-color', 'green');
            four.css('background-color', 'green');
            five.css('background-color', 'green');
            six.css('background-color', 'green');
        }
    }, 1000);
}
current();