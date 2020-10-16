$(document).ready(function () {
   
    $("#plus").click(function () {
        var firstNumberString = $("#num1").val();
        var secondNumberString = $("#num2").val();

        var firstNumberConverted = parseInt(firstNumberString);
        var secondNumberConverted = parseInt(secondNumberString);

        console.log(firstNumberConverted);
        //console.log(parseInt(true));
        /*

        "hello" -> NaN
        "100Hello" -> 100;
        "100" -> 100
        "Hello100" -> NaN
        "90k3i8df9k03" -> 90
        true -> NaN // in some other languages you get 1.

        */

        // isNan() checks if the argument is an NaN, if it is, returns true, if it is not, returns false.

        if( isNaN(firstNumberConverted) || isNaN(secondNumberConverted) ) {
            $("#results").html("Error: One of your numbers is not a number!")
            $("#results").css("color", "red");
        } else {

           var sum = firstNumberConverted + secondNumberConverted;
           $("#results").html(sum);
           $("#results").css("color", "black");
        }
    
    });

});

//https://theasciicode.com.ar/ascii-printable-characters/capital-letter-z-uppercase-ascii-code-90.html