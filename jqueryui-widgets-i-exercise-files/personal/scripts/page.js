/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />

$(function () {
    //dynamically populate the dialog
    $('#dialog').append('<img src="danger.jpg"/>');
    $('#dialog').append('Are you sure you want to do this?');
    $('#sliderVal').text('100%');
    //Use properties of the dialog UI
    $('#dialog').dialog({
        title: "Attention",
        show: 100,
        autoOpen: false,
        modal: true,
        resizeable: false,
        draggable: false,
        position: "Top",
        buttons: {
            "Yes": function () {
                $('#dialog').dialog('close');
                $('#dialogDecision').text('You Said Yes');
            },
            "No": function () {
                $('#dialog').dialog('close');
                $('#dialogDecision').text('You Said No');
            }
        }
    });
    //Tie the built dialog to the click event. Keeps the dialog from appearing on page load
    $('#openDialog').click(function () {
        $('#dialog').dialog('open');
    });

    //build progress bar
    var progress = 0;
    $('#progress').progressbar({
        value: 0
    });
    $('#progress').append([progress, "%"].join(''));
    //update the value on the progress bar to fill every 100 miliseconds and show progress
    function countdown() {
        progress++;
        $('#progress')
            .progressbar("option", "value", progress)
            .children('.ui-progressbar-value')
            .html([progress,'%'].join(''))
            .css("display", "block");
        if (progress < 100) {
            setTimeout(countdown, 100);
        }
        else {
            $('#progress').children('.ui-progressbar-value').html("complete").center();
        }
    }
    //run countdown
    countdown();

    //build the slider, changes the opacity of the header and shows the percent opacity
    $('#slider').slider({
        min: 0, max: 100, value: 100, slide: function (event, ui) {
            $('#sliderVal').text([ui.value,'%'].join(''))
            $('#sliderHead').css({ opacity: ui.value / 100 });
        }
    });

    //tab, UI by default knows how to transform a list
    //this is bugged in this demo because of the combination of his custom JS and your UI location.
    $('#tabs').tabs();
});