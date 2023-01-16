$( document ).ready(function() {
    $('.schedule-nav a').click(function(e){
        e.preventDefault();
        $('.schedule-block').addClass('hidden').removeClass('block');
        $('.schedule-nav a').removeClass('selected');
        $(this).addClass('selected');
        $($(this).attr('href')).removeClass('hidden').addClass('block');
        console.log($(this).attr('href'));
    });

    $('.timing .synopsis-container a').click(function(e){
        e.preventDefault();
        $(this).toggleClass('expand');
        console.log($(this).parent().find('.synopsis'))
        $(this).parent('div').find('.synopsis').toggleClass('expand');
    });

    $('#backtotop-programme').click(function(e){
        e.preventDefault();
        if ($(window).width() < 768) {
            $('html').animate({
                scrollTop:$("#schedule-nav").offset().top - 80
            }, 500);
        }else{
            $('html').animate({
                scrollTop:$("#schedule-nav").offset().top - 130
            }, 500);
        }
        
      });
});