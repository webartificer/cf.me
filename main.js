
function hideMobileMenu(init)
{
    /*If browser resized, check width again */
    if ($(window).width() > 600) {
      $('.resmenu').removeClass('mobilemenu');
      $('.menuswitch').removeClass('active');
      $("header #hamburger a .on").show();
      $("header #hamburger a .off").hide();
      $("body").removeClass("modal-open");
    }
}


$(document).on('ready', function() {
  $( ".menuswitch" ).click(function() {
    $(".resmenu").toggleClass("mobilemenu");
    $("body").toggleClass("modal-open");
    $(this).toggleClass("active");
    $("header #hamburger a .fa").toggle();
  });

  $("a.1").click(function() {
    $("#modal1").addClass('activate');
    $("body").addClass("modal-open");
  });
  $("a.2").click(function() {
    $("#modal2").addClass('activate');
    $("body").addClass("modal-open");
  });
  $(".closemodal").click(function() {
    $("#modal1").removeClass('activate');
    $("#modal2").removeClass('activate');
    $("body").removeClass("modal-open");
  });

  $(window).resize(function() {
      hideMobileMenu(false);
  });

  $(function(){
  	// Instantiate MixItUp:
  	$('#Container').mixItUp();
  });

});
