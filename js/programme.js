$( document ).ready(function() {
    $('.schedule-nav a').click(function(e){
        e.preventDefault();
        $('.schedule-block').addClass('hidden').removeClass('block');
        $('.schedule-nav a').removeClass('selected');
        $(this).addClass('selected');
        $($(this).attr('href')).removeClass('hidden').addClass('block');
        console.log($(this).attr('href'));
    });
});