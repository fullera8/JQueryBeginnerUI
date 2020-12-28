/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />

$(function () {
    $("#target")
        .css("position", "relative")
        .click(function () {
            $(this).toggleClass("leftTarget", "slow");
        //$(this).animate({
        //    left: 300
        //}, 1000, "easeInOutElastic");
        //$(this).animate({
        //    "width": "+=20",
        //    "height": "+=20",
        //    "background-color": "red"
        //});
        //$(this).effect("explode", { pieces: 120 }, "slow", function () {
        //    alert("done");
        //})
    });
    $("#draggables").children().draggable();
    $("#trash").droppable({
        activeClass: "opaque",
        drop: function (event, ui) {
            ui.draggable.effect("explode", { pieces: 120 }, "slow");
        }
    });
});