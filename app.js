$('nav a'). click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        target0ffset = $(id).offset().top;      

    $('html, body').animate({
        scrolltop: target0ffset -90
    }, 500)
    
});