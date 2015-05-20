setTimeout(function() { window.location=window.location;},5000);

$( "a.searchOpen" ).click(function() {
  $( ".search" ).fadeIn( 100);
  $('input[type=text]').focus();
  $("a.searchOpen").fadeOut( 100);
  });

$( "a.searchClose" ).click(function() {
  $( ".search" ).fadeOut( 100);
  $("a.searchOpen").fadeIn( 100);
  });

