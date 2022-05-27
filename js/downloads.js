$( document ).ready(function() {
    if ($(window).width() < 734) {
        $('.bg span').click(function(e){
            e.preventDefault();
            $('.bg span').removeClass('expand');
            $(this).addClass('expand');
        });
    }
});