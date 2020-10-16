$(document).ready(function () {

    // Activates function whenever a key is pressed on the keyboard.
    $("#textbox").keypress(function (event) {
        
        // Detects if the key 97 (lowercase a) is clicked then run the following codeblock.
        if (event.which === 97) {
            // .preventDefault() does not allow the normal action of the event,in this case, write a letter a in the textbox.
            event.preventDefault();

            // Assigns value to the textbox.
            $("#textbox").val("append");
        }
    });

   $(document).keypress(function (event) {
       
    // We place the value of the key pressed into a variable.
    var keyPressed =event.which;
    console.log(keyPressed);
    // show entire event object for the specific event.
    console.log(event);
    
    //$("body").append(`<p>The ${keyPressed} key was pressed!</p>`);

    if (event.which === 103) {
        $("body").append("<div style='width: 100px; height: 100px; background-color: green;display: inline-block'></div>");
    }
    if (event.which === 98) {
        $("body").append("<div style='width: 100px; height: 100px; background-color: blue;display: inline-block'></div>");
    }

    if (event.which === 114) {
        $("body").append("<div style='width: 100px; height: 100px; background-color: red;display:inline-block'></div>");
    }


   });

});

/*
<!doctype html><!--to tell the browser what version is using-->

<html lang="en"><!--what language this webpage is using-->
<head><!---->
  <meta charset="utf-8"><!--character set used for the webpage-->

  <title>The HTML5 Herald</title><!--Describe detail on tab text-->
  <meta name="description" content="The HTML5 Herald"><!--information that appear on the google describtion-->
  <meta name="author" content="SitePoint"><!--information that appear on the google describtion-->

  == same value
  === same value and same datatype
*/