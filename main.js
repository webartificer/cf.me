
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
  $("a.3").click(function() {
    $("#modal3").addClass('activate');
    $("body").addClass("modal-open");
  });
  $("a.4").click(function() {
    $("#modal4").addClass('activate');
    $("body").addClass("modal-open");
  });
  $("a.5").click(function() {
    $("#modal5").addClass('activate');
    $("body").addClass("modal-open");
  });
  $("a.6").click(function() {
    $("#modal6").addClass('activate');
    $("body").addClass("modal-open");
  });
  $("a.7").click(function() {
    $("#modal7").addClass('activate');
    $("body").addClass("modal-open");
  });
  $("a.8").click(function() {
    $("#modal8").addClass('activate');
    $("body").addClass("modal-open");
  });
  $(".closemodal").click(function() {
    $("#modal1").removeClass('activate');
    $("#modal2").removeClass('activate');
    $("#modal3").removeClass('activate');
    $("#modal4").removeClass('activate');
    $("#modal5").removeClass('activate');
    $("#modal6").removeClass('activate');
    $("#modal7").removeClass('activate');
    $("#modal8").removeClass('activate');
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
