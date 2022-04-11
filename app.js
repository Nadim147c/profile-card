$(function () {
    "use strict";
    $(".card-add").click(function () {
        $(".card-container").toggleClass("pCcard-on");
        $(".card-add i").toggleClass("fa-minus")
    })
})