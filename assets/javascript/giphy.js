$(function() {
    var xhr = $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=blood+gore");
    xhr.done(function(data) { 
      $('body').css('background-image', 'url(' + data.data.image_url + ')');
    });
  });
