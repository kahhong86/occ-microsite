$(document).ready(function(){
  	$('#small-menu').click(function(e){
        e.preventDefault();

        console.log('smallmenu')
        $('.small-nav').toggleClass('active');
        $('.small-menu').toggleClass('active');
    });
});
