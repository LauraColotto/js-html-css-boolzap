var franco = null;

$(document).ready(function(){



$("#ricerca-contatti").keydown(
  function(event){
    var ricerca = $("#ricerca-contatti").val();
    search(ricerca);
  }
)

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

  clearTimeout(franco);
  var inputText = $("#input-text").val();

  if(inputText != ""){
    var templateMessage = $(".template .container-log").clone();

    templateMessage.find(".log").text(inputText);
    templateMessage.addClass("user");

    $(".chat").append(templateMessage);
    $("#input-text").val("");
  }

  franco = setTimeout(function(){pcMessage()}, 3000);
}

// Funzione ricerca

function search(str) {
  $(".contatto").each(function() {

    if(!$(this).find("h2").text().includes(str)){
      $(this).hide();
    } else {
      $(this).show();
    }

  });

}
