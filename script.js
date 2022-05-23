// This js file is strictly for saving the inputs to local storage.
// Unfortunately I was unable to get the local storage to keep the 
// inputs on the page upon reset, but the data is saved in local storage.

var input7 = $('.input7');
var input8 = $('.input8');
var input9 = $('.input9');
var input10 = $('.input10');
var input11 = $('.input11');
var input12 = $('.input12');
var input1 = $('.input1');
var input2 = $('.input2');
var input3 = $('.input3');
var input4 = $('.input4');
var input5 = $('.input5');
var input6 = $('.input6');

// I'm calling the functions that are supposed to be responsible for pulling down the local storage data

localStorage7();
localStorage8();
localStorage9();
localStorage10();
localStorage11();
localStorage12();
localStorage1();
localStorage2();
localStorage3();
localStorage4();
localStorage5();
localStorage6();

// Each of these functions is trying to retrieve the data from local storage

function localStorage7(){
    var input7 = localStorage.getItem("input7");
    if (!input7) {
        return;
    }
    $('.input7').text(input7);
}

function localStorage8(){
    var input8 = localStorage.getItem("input8");
    if (!input8) {
        return;
    }
    $('.input8').text(input8);
}

function localStorage9(){
    var input9 = localStorage.getItem("input9");
    if (!input9) {
        return;
    }
    $('.input9').text(input9);
}

function localStorage10(){
    var input10 = localStorage.getItem("input10");
    if (!input10) {
        return;
    }
    $('.input10').text(input10);
}

function localStorage11(){
    var input11 = localStorage.getItem("input11");
    if (!input11) {
        return;
    }
    $('.input11').text(input11);
}

function localStorage12(){
    var input12 = localStorage.getItem("input12");
    if (!input12) {
        return;
    }
    $('.input12').text(input12);
}

function localStorage1(){
    var input1 = localStorage.getItem("input1");
    if (!input1) {
        return;
    }
    $('.input1').text(input1);
}

function localStorage2(){
    var input2 = localStorage.getItem("input2");
    if (!input2) {
        return;
    }
    $('.input2').text(input2);
}

function localStorage3(){
    var input3 = localStorage.getItem("input3");
    if (!input3) {
        return;
    }
    $('.input3').text(input3);
}

function localStorage4(){
    var input4 = localStorage.getItem("input4");
    if (!input4) {
        return;
    }
    $('.input4').text(input4);
}

function localStorage5(){
    var input5 = localStorage.getItem("input5");
    if (!input5) {
        return;
    }
    $('.input5').text(input5);
}

function localStorage6(){
    var input6 = localStorage.getItem("input6");
    if (!input6) {
        return;
    }
    $('.input6').text(input6);
}

// Each of these event listeners is saving the input data into local storage

$('.saveButton7')[0].addEventListener('click', function(event) {
    event.preventDefault();
    
    var input7 = document.querySelector('.input7').value;
    
    localStorage.setItem("input7", input7);
    localStorage7();
});

$('.saveButton8')[0].addEventListener('click', function(event) {
    event.preventDefault();
    
    var input8 = document.querySelector('.input8').value;
    
    localStorage.setItem("input8", input8)
    localStorage8();
});

$('.saveButton9')[0].addEventListener('click', function(event) {
    event.preventDefault();
    
    var input9 = document.querySelector('.input9').value;
    
    localStorage.setItem("input9", input9)
    localStorage9();
});

$('.saveButton10')[0].addEventListener('click', function(event) {
    event.preventDefault();
    
    var input10 = document.querySelector('.input10').value;
    
    localStorage.setItem("input10", input10)
    localStorage10();
});

$('.saveButton11')[0].addEventListener('click', function(event) {
    event.preventDefault();
    
    var input11 = document.querySelector('.input11').value;
    
    localStorage.setItem("input11", input11)
    localStorage11();
});

$('.saveButton12')[0].addEventListener('click', function(event) {
    event.preventDefault();
    
    var input12 = document.querySelector('.input12').value;
    
    localStorage.setItem("input12", input12)
    localStorage12();
});

$('.saveButton1')[0].addEventListener('click', function(event) {
    event.preventDefault();
    
    var input1 = document.querySelector('.input1').value;
    
    localStorage.setItem("input1", input1)
    localStorage1();
});

$('.saveButton2')[0].addEventListener('click', function(event) {
    event.preventDefault();
    
    var input2 = document.querySelector('.input2').value;
    
    localStorage.setItem("input2", input2)
    localStorage2();
});

$('.saveButton3')[0].addEventListener('click', function(event) {
    event.preventDefault();
    
    var input3 = document.querySelector('.input3').value;
    
    localStorage.setItem("input3", input3)
    localStorage3();
});

$('.saveButton4')[0].addEventListener('click', function(event) {
    event.preventDefault();
    
    var input7 = document.querySelector('.input4').value;
    
    localStorage.setItem("input4", input4)
    localStorage4();
});

$('.saveButton5')[0].addEventListener('click', function(event) {
    event.preventDefault();
    
    var input5 = document.querySelector('.input5').value;
    
    localStorage.setItem("input5", input5)
    localStorage5();
});

$('.saveButton6')[0].addEventListener('click', function(event) {
    event.preventDefault();
    
    var input6 = document.querySelector('.input6').value;
    
    localStorage.setItem("input6", input6)
    localStorage6();
});