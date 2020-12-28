/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />

$(function () {

    $("#dialog").dialog(
        {
            autoOpen: false,
            modal: true,
            resizable: false,
            draggable: false,
            position: "top",
            buttons: {
                "Yes, I do!": function () {
                    $("#dialog").dialog("close");
                    $("#dialogDecision").text("Yes you did!!");
                },
                "No": function () { }
            }
        }
     );

    $("#openDialog").click(function () {
        $("#dialog").dialog("open");
    });

    //$("#progress").progressbar({ value: 60 });

    $("#progress").progressbar({ value: 100 });

    var value = 100;

    // countdown();

    function countdown() {
        value--;
        $("#progress").progressbar("option", "value", value);
        $("#countdown").text(value);

        if (value > 0) {
            setTimeout(countdown, 100);
        }
        else {
            $("#countdown").text("completed");
            $("#progress").progressbar("disable");
        }
    }

    $("#slider").slider({ min: 0, max: 100, value: 100, slide: function (event, ui) {
        $("#slider").prev().css({ opacity: ui.value / 100 });
    }
    });

    $("#tabs").tabs();

    //Accordian widget
    $("#accordian").accordion({
        autoHeight: false,
        collapsible: true,
        change: function (event, ui) {
            console.log(event);
            console.log(ui);
        },
        active: "#linq"
    });
    //accordion activate false meaning everything starts collapsed when collapsible is true
    //active in the above does the same thing
    //active/activate work with 0 base int to pick the node to expand by default first
    //$("#accordian").accordion("activate", "#linq");

    //autocomplete list
    var codeList = [
        "C#",
        ".Net",
        "jQuery"
    ];
    //var jsonCodes = "";
    //$.get("https://gist.githubusercontent.com/calvinfroedge/defeb8fc6cdc0068e172/raw/7904b2504827f6f4883df0299a2bf51accbe9dab/languages.json", function (data) {
    //    jsonCodes = data.slice(1, -1);
    //    jsonCodes = ["{ codes:", jsonCodes, "}"].join('');
    //    $('#json').html(jsonCodes);
    //});
    $("#search").autocomplete({
        source: codeList
        //source: JSON.parse(jsonCodes)
    });

    //Button and sprite
    $("#buttons").children()
        .button({ icons: {primary: "ui-icon-search", secondary: "ui-icon-wrench"}})
        .click(function () {
            alert($(this).val());
        });
    //button sets (look like buttons but behave like original element)
    $("#radios").buttonset();
    $("#checks").buttonset();

    //Datepicker
    $("#dateselection").datepicker({
        showAnim: "fadeIn",
        numberOfMonths: 2,
        showWeek: true,
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true
    });
});