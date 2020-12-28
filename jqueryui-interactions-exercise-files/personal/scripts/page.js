/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />


$(function () {
    //draggables
    $("#d1").draggable({
        snap: "#d1, #d2"
        //axis: "x"
    });
    //Grid
    $("#d2").draggable({
        grid: [50, 100],
        helper: "clone"
    });
    $("#d3").draggable({
        containment: "#draggables",
        handle: "header"
    });
    //stackable
    $("#d1, #d2, #d3").draggable("option", "stack", ".ui-draggable");
    
    //droppable, acceptable
    $("#trash").droppable({
        activeClass: "opaque",
        accept: "#d1",
        drop: function (event, ui) {
            ui.draggable.fadeOut(function () {
                ui.draggable.hide();
            });
        }
    });

    //sortable
    $("#sortable").sortable({ axis: "y", placeholder: "placeholder" });
    //resizable
    $('#d3').resizable({
        aspectRatio: true,
        alsoResize: "#d2"
    });
});

//snapping


