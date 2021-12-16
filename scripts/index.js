$(function(){
    loadContent("home");

    $("#current_year").text(new Date().getFullYear());
});


function loadContent(page){
    if(page == "documentation"){
        window.location.href = 'https://docs.bridgeprotocol.io';
    }

    $.get( page + ".html", function( data ) {
        $( "#content" ).html( data );
    });
}