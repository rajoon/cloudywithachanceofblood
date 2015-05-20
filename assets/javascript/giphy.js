$(document).ready(function(){
 var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=crime&api_key=dc6zaTOxFJmzC&limit=21");
      
var random = Math.ceil(Math.random() * 20);
  
    xhr.done(function(data) { 
      
      
      $('html').css("background-image", 'url(https://media.giphy.com/media/' + data.data[random].id + '/giphy.gif)'); 
    
    });

  
});
