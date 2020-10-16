$(document).ready(function () {
    // console.log("ready!");

    setTimeout(function () {
        $("body").append("<div id='content'></div>");
        // . append ADDS to existing children, and is placed at the end of the children's list.

        $("div#content").html("<p>Hello there!<p>");
        // .html REMOVES existing children elements of selected element, and adds in what we tped in the argument.

        $("body").prepend("<h1>This page was dynamically generated!</h1>")
        // .prepend, is the same as .append, except it adds to the beginning of children's list.

    }, 5000);

    var myFavFood = "Pizza";

    var newHTMLCode =
    `<ul>
                        <li>${myFavFood}</li>
                        <li>Burrito</li>
                        <li>Hamburger</li>
                    </ul>`;

    $("body").append(newHTMLCode);

    $("button#create-box").click(function() {

        $("h1").hide();
        //hide ->visually hides element, code still exists.
        // .empty() -> removes children code.
        // .remove() -> removes selected element.
        $("body").append(`<div style='width: 100px; height: 100px; border: 1px black solid;'></div>`);
    });


});