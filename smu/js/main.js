$(document).ready(function(){
  	$('#small-menu').click(function(e){
        e.preventDefault();

        console.log('smallmenu')
        $('.small-nav').toggleClass('active');
        $('.small-menu').toggleClass('active');
    });

    $('.small-nav a').click(function(){
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
