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
           $("#content").html("<h2 class='text-center' style='margin-top: 10px; font-family: Lobster, cursive;'>Results for your search of '" + json[0] + "'");
           for (let i = 0; i < json[1].length; i++) {    
                $("#content").append("<a id='l" + i +"' href=''><div id='c"+ i +"' class='items' style='background: white; border-radius: 5px; margin-top: 5px; margin-bottom: 5px; padding: 10px 10px;'><p style='font-family: Lobster, cursive;'>" + json[1][i] + "</p></div></a>");
                $(`#c${i}`).append("<p>" + json[2][i] + "</p>");
                $(`#l${i}`).attr("href", json[3][i]);  
            }
        });
        $("#search-text").val('');
   });  
});