$(document).ready (function(){
var wikiUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=racing&srwhat=text"

$("#searchWiki").click(function(){
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=racing&srwhat=text", function( data ){
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
