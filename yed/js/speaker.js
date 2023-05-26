$( document ).ready(function() {
    $('.modal-button').click(function(e){
        e.preventDefault();
        const bio = $(this).attr('name');
        $('body').addClass('modal-open');
        $('.modal').addClass('open');
        setTimeout(function(){
            $(bio).removeClass('modal-hidden');
        },200);
    });

    // $('.modal-close').click(function(e){
    //     e.preventDefault();
    //     $('body').removeClass('modal-open');
    //     $('.modal').removeClass('open');
    //     $('.modal-box').addClass('modal-hidden');
    // });
    $('.modal').click(function(e){
        e.preventDefault();
        $('body').removeClass('modal-open');
        $('.modal').removeClass('open');
        $('.modal-box').addClass('modal-hidden');
    });
    $('.close').click(function(e){
        e.preventDefault();
        $('body').removeClass('modal-open');
        $('.modal').removeClass('open');
        $('.modal-box').addClass('modal-hidden');
    });
});