$(document).ready(function(){
    $('#2').click(function (){
        $( "#2" ).removeClass(  $('#3').attr('class') ).addClass( "nav-link active" );
        $( "#1" ).removeClass($('#1').attr('class') ).addClass( "nav-link " );
        $( "#3" ).removeClass( $('#3').attr('class') ).addClass( "nav-link " );
        $( "#4" ).removeClass($('#4').attr('class') ).addClass( "nav-link " );
    } ),
    $('#1').click(function (){
        $( "#2" ).removeClass( $('#2').attr('class') ).addClass( "nav-link " );
        $( "#1" ).removeClass( $('#1').attr('class') ).addClass( "nav-link active" );
        $( "#3" ).removeClass( $('#3').attr('class') ).addClass( "nav-link " );
        $( "#4" ).removeClass( $('#4').attr('class') ).addClass( "nav-link " );
    }),
    $('#3').click(function (){
        $( "#2" ).removeClass( $('#2').attr('class') ).addClass( "nav-link " );
        $( "#1" ).removeClass( $('#1').attr('class') ).addClass( "nav-link " );
        $( "#3" ).removeClass( $('#3').attr('class') ).addClass( "nav-link active " );
        $( "#4" ).removeClass( $('#4').attr('class') ).addClass( "nav-link " );
    }),
    $('#4').click(function (){
        $( "#2" ).removeClass( $('#2').attr('class') ).addClass( "nav-link " );
        $( "#1" ).removeClass( $('#1').attr('class') ).addClass( "nav-link " );
        $( "#3" ).removeClass( $('#3').attr('class') ).addClass( "nav-link " );
        $( "#4" ).removeClass( $('#4').attr('class') ).addClass( "nav-link active" );
    }),
    counter(1,30)
    
    function counter(i, endNbr) {
        elt = document.getElementById("counter1")
        console.log("he")
        if (i <= 30) {
          elt.innerHTML = i+"+ ";
          setTimeout(function() {//Delay a bit before calling the function again.
            counter(i + 1, endNbr, elt);
          }, 100);
        }
      }
      
}

);