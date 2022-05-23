
var input7 = $('.input7');

localStorage7();

function localStorage7(){
    var input7 = localStorage.getItem("input7");
    if (!input7) {
        return;
    }
    $('.input7').text(input7);
}
$('.saveButton7')[0].addEventListener('click', function(event) {
    event.preventDefault();

    var input7 = document.querySelector('.input7').value;

    localStorage.setItem("input7", input7)
    localStorage7();
});

