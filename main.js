$(document).ready(function() {

$('header button').click(function(){
    $('form').slideDown()
})


})  

$('form').on('submit', function(e){
    e.preventDefault()
    const novoTexto = $('#tarefa').val()
    $('#lista').append('<li>'+novoTexto+'</li>');
    $('#lista').on('click', 'li', function() {
        $(this).toggleClass('line-t');
});

    })