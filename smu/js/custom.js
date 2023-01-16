$( document ).ready(function() {
    $('.box-description button').click(function(e){
        e.preventDefault();
        $(this).toggleClass('show-more')
        $(this).parent().find('.box-hide').toggleClass('show-box');
    });
});
