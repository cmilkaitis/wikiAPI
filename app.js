$(document).ready(function() {

    let wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&formatversion=2&search="
   
    $("#random").click(function() {
        window.open('https://en.wikipedia.org/wiki/Special:Random');
    });

    $("#btn").click(function() {
       $("#content").empty();
       let term = $("#search-text").val();
       let url = wikiUrl + term;
 
       $.getJSON(url, function(json){
           $("#content").html("<h2>Results for your search of " + json[0]);
           for (let i = 0; i < json[1].length; i++) {    
                $("#content").append("<a id='l" + i +"' href=''><div id='c"+ i +"' class='items' style='margin-top: 5px; margin-bottom: 5px; border: solid #007bff 1px; padding-left: 5px; padding-top: 5px;'><p>" + json[1][i] + "</p></div></a>");
                $(`#c${i}`).append("<p>" + json[2][i] + "</p>");
                $(`#l${i}`).attr("href", json[3][i]);  
            }
        });
        $("#search-text").val('');
   });  
});