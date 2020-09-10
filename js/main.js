var franco = null;



$(document).ready(function(){

  // Ricerca rubrica

  $("#ricerca-contatti").keyup(
    function(event){
      var ricerca = $(this).val().toLowerCase();
      search(ricerca);
    }
  )

  // Invio da icona sendMessage

  $(".send-message").click(
     function(){
       sendMessage();
     }
   );


  // Invio da tastiera

  $("#input-text").keyup(
     function(event) {
       if (event.which == 13) {
         sendMessage();
       }
     }
   )


   // Selezione chat
  $(".contatto").click(
    function(){
      var rubrica = $(this).data("contatto");
      console.log(rubrica);

      mostraChat(rubrica);
    }
  )


});


// Funzione risposta messaggio

function pcMessage(){
  var templateMessage = $(".template .container-log").clone();
  templateMessage.find(".log").text("Ammaccabanane");
  $(".active").append(templateMessage);
}


// Funzione d'invio messaggio

function sendMessage(){

  clearTimeout(franco);
  var inputText = $("#input-text").val();

  if(inputText != ""){
    var templateMessage = $(".template .container-log").clone();

    templateMessage.find(".log").text(inputText);
    templateMessage.addClass("user");

    $(".active").append(templateMessage);
    $("#input-text").val("");
  }

  franco = setTimeout(function(){pcMessage()}, 3000);
}

// Funzione ricerca

function search(str) {
  console.log(str);
  $(".contatto").each(function() {

    if($(this).find("h2").text().toLowerCase().includes(str)){
      $(this).show();
    } else {
      $(this).hide();
    }

  });

}


// Mostra Chat

function mostraChat(bl){
  $(".container-chat").each(function(){

    if ($(this).data("chat") == bl && !$(this).hasClass("active")) {
      $(this).addClass("active");
    } else if ($(this).hasClass("active")){
      $(this).removeClass("active");
    }
  }

  )

}
