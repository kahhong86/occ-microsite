$(document).ready(function(){
    $('#aboutus-cta').click(function(e){
      e.preventDefault();
      $('html').animate({
        scrollTop:$("#about-us").offset().top
      }, 500);
      
    });
});
