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
      var pcName = $(this).find(".contact-name h2").text();
      var avatar = $(this).find("img").attr("src");
      mostraChat(rubrica);
      $(".contatto-selected").removeClass("contatto-selected");
      $(this).addClass("contatto-selected");
      $(".avatar-contatto img").attr("src", avatar);
      $(".pc-name h2").text(pcName);

    }
  )


//   // Elimina log

  $(document).on("click", ".freccetta", function() {
    $(this).siblings(".option-box").toggle();
  });

  $(document).on("click", ".delete", function(){

    $(this).parents(".container-log").remove();
  });

    // Funzione per chiudere il menù cliccando fuori dal Div

  $("body").click(function(e) {
    if (e.target.id !== ".option-box"){
      $(".option-box").hide();
    }
  });

});






// Funzione risposta messaggio

function pcMessage(){


  var templateMessage = $(".template .container-log").clone();
  templateMessage.find(".log-text").text("Ammaccabanane");
  $(".active").append(templateMessage);
  templateMessage.find(".text-time").text(oraAttuale());
  $(".contatto-selected").find(".time").text(oraAttuale());
  $("#status").text("Ultimo accesso alle " + oraAttuale());

  $(".contatto-selected").find("p").text("Ammaccabanane");
  autoScroll();
}


// Funzione status pc

function pcStatus(){
  $("#status").text("Sta scrivendo...");
  setTimeout(function(){pcMessage()}, 1000);


}


// Funzione d'invio messaggio

function sendMessage(){

  clearTimeout(franco);
  var inputText = $("#input-text").val();

  if(inputText != ""){
    var templateMessage = $(".template .container-log").clone();


    templateMessage.find(".text-time").text(oraAttuale());
    templateMessage.find(".log-text").text(inputText);
    templateMessage.addClass("user");

    $(".active").append(templateMessage);
    $("#input-text").val("");


  }
  autoScroll();
  franco = setTimeout(function(){pcStatus()}, 1000);

}



//Funzione Ora

function oraAttuale(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (minutes < 10) {
    var minutes = "0" + minutes;
  }
  var time = hours + ":" + minutes;


  return time;
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

    if ($(this).data("chat") == bl) {
      $(this).addClass("active");
    } else if ($(this).hasClass("active")){
      $(this).removeClass("active");
    }
  });


}


// Funzione di scroll automatico

function autoScroll(){
  $(".container-chat").scrollTop(1000);
}
