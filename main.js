$(document).ready (function(){
var wikiUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=racing&srwhat=text"

$("#searchWiki").click(function(){
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=racing&srwhat=text", function( data ){
       var items = [];
       console.log(data);
       var i =0;


      $.each(data.query.search, function(key, val) {
          items.push(val);
          //alert(data.query.search[i].title);
          $("#wikiIT").append("<li>"+data.query.search[i].title+" "+ data.query.search[i].snippet+"</li>");
          i++
         });
         console.log(items);
         console.log(data.query.search);
        //$('#rQuote').html(items);
        //theQuote = $("p:first").text()
      });//end of get json
   });//end of getMessage Click


}); //end doc ready
