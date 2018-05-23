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
           console.log(json);
           for (let i = 0; i < json[1].length; i++) {    
                $("#content").append("<div id="+ i +" class='items'><p>" + json[1][i] + "</p></div>");
            }
            for (let i = 0; i < json[2].length; i++) {
                $(`#${i}`).append("<p>" + json[2][i] + "</p>");
            } 
            for (let i = 0; i < json[3].length; i++) {
                $(`#${i}`).attr("src", json[3][i]);
            } 
       });
   });  
});