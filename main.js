$(document).ready (function(){
var wikiUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srwhat=text&srsearch="
var searchTerm = "";

$("#searchWiki").click(function(){
  searchTerm = document.getElementById("searchBox").elements[0].value
if (searchTerm == ""){
  alert("Search cannot be blank");
} else{
    $.getJSON(wikiUrl+searchTerm, function( data ){
       var items = [];
       
       var i =0;
      $.each(data.query.search, function(key, val) {
          items.push(val);
          //alert(data.query.search[i].title);
          $("#wikiIT").append("<li>"+data.query.search[i].title+" "+ data.query.search[i].snippet+"</li>");
          i++
         });
    });//end of get json
    }; //end of else
   });//end of getMessage Click


}); //end doc ready
function searchFun(){
  searchTerm = document.getElementById("searchBox").elements[0].value;
};
