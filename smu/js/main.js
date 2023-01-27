$(document).ready(function(){
  	$('#small-menu').click(function(e){
        e.preventDefault();

        $('.small-nav').toggleClass('active');
        $('.small-menu').toggleClass('active');
    });

    $('.small-nav a').click(function(e){
        $('.small-nav').toggleClass('active');
        $('.small-menu').toggleClass('active');
    });

    $('#backtotop').click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop:0
        }, 500);
    });
});
