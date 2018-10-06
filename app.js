$(document).ready(function() {

    let wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&formatversion=2&search=";
   
    $("#random").click(function() {
        window.open('https://en.wikipedia.org/wiki/Special:Random');
    });

    $("#btn").click(function() {
       $("#content").empty();
       let term = $("#search-text").val();
       let url = wikiUrl + term;
 
       $.getJSON(url, function(json){
           $("#content").html("<h2 class='text-center font-style result-title' style='margin-top: 10px;'>Search Results for: '" + json[0] + "'");
           for (let i = 0; i < json[1].length; i++) {    
                $("#content").append("<a id='l" + i +"' href=''><div id='c"+ i +"' class='results items font-style'><p class='font-style results-title'>" + json[1][i] + "</p></div></a>");
                $(`#c${i}`).append("<p class='results-content'>" + json[2][i] + "</p>");
                $(`#l${i}`).attr("href", json[3][i]);  
            }
        });
        $("#search-text").val('');
   });  
});