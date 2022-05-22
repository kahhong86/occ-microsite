$( document ).ready(function() {
    $('.modal-button').click(function(e){
        e.preventDefault();
        const bio = $(this).attr('name');
        $('body').addClass('modal-open');
        $('.modal').addClass('open');
        $(bio).removeClass('hidden');
    });

    $('.modal').click(function(e){
        e.preventDefault();
        $('body').removeClass('modal-open');
        $('.modal').removeClass('open');
        $('.modal-box').addClass('hidden');
    });
    $('.close').click(function(e){
        e.preventDefault();
        $('body').removeClass('modal-open');
        $('.modal').removeClass('open');
        $('.modal-box').addClass('hidden');
    });
});