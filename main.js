$(document).ready (function(){

$("#searchWiki").click(function(){
    $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function( data ){
       var items = [];
       console.log(data);
      $.each( data, function(key, val) {
        items.push("<p>"+val+"</p>")
         });
         console.log(items);
        //$('#rQuote').html(items);
        //theQuote = $("p:first").text()
      });//end of get json
   });//end of getMessage Click


}); //end doc ready
