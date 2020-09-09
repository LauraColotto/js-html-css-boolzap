$(document).ready(function(){


 $(".send-message").click(
   function(){
     sendMessage();
   }
 );

 $("#input-text").keyup(
   function(event) {
     if (event.which == 13) {
       sendMessage();
     }
   }
 )


});


// Funzione risposta messaggio

function pcMessage(){
  var templateMessage = $(".template .container-log").clone();
  templateMessage.find(".log").text("Ammaccabanane");
  $(".chat").append(templateMessage);
}


// Funzione d'invio messaggio

function sendMessage(){


  var inputText = $("#input-text").val();

  if(inputText != ""){
    var templateMessage = $(".template .container-log").clone();

    templateMessage.find(".log").text(inputText);
    templateMessage.addClass("user");

    $(".chat").append(templateMessage);
    $("#input-text").val("");
  }

setTimeout(function(){pcMessage()}, 3000);
}
