
$("#customise").css({ "display": "none" });
$("#home").css({ "display": "block" });
$("#contactus").css({ "display": "none" });
$("#aboutus").css({ "display": "none" });
$("#products").css({ "display": "none" });
$("#checkout").css({ "display": "none" });

$("#hometab").click(function () {
    $("#customise").css({ "display": "none" });
    $("#home").css({ "display": "block" });
    $("#aboutus").css({ "display": "none" });
    $("#products").css({ "display": "none" });
    $("#contactus").css({ "display": "none" });
    $("#con").toggleClass("active");
});

$("#carttab").click(function () {
    $("#customise").css({ "display": "none" });
    $("#checkout").css({ "display": "block" });
    $("#aboutus").css({ "display": "none" });
    $("#home").css({ "display": "none" });
    $("#products").css({ "display": "none" });
    $("#contactus").css({ "display": "none" });
    $("#con").toggleClass("active");
});

$("#abouttab").click(function () {
    $("#customise").css({ "display": "none" });
    $("#aboutus").css({ "display": "block" });
    $("#products").css({ "display": "none" });
    $("#contactus").css({ "display": "none" });
    $("#home").css({ "display": "none" });
    $("#con").toggleClass("active");
});


$("#contacttab").click(function () {
    $("#customise").css({ "display": "none" });
    $("#home").css({ "display": "none" });
    $("#aboutus").css({ "display": "none" });
    $("#products").css({ "display": "none" });
    $("#contactus").css({ "display": "block" });
    $("#con").toggleClass("active");
});

$("#customtab").click(function () {
    $("#home").css({ "display": "none" });
    $("#aboutus").css({ "display": "none" });
    $("#contactus").css({ "display": "none" });
    $("#customise").css({ "display": "block" });
    $("#products").css({ "display": "none" });
    $("#con").toggleClass("active");
});

$("#prodtab").click(function () {
    $("#home").css({ "display": "none" });
    $("#aboutus").css({ "display": "none" });
    $("#contactus").css({ "display": "none" });
    $("#customise").css({ "display": "none" });
    $("#products").css({ "display": "block" });
    $("#con").toggleClass("active");
});

$("#toggle-button").click(function () {
    $("#con").toggleClass("active");
});

$("#cuslink").click(function () {
    $("#customise").css({ "display": "block" });
    $("#home").css({ "display": "none" });
});

$("#cuslink2").click(function () {
    $("#customise").css({ "display": "block" });
    $("#products").css({ "display": "none" });
});


$("#prodlink").click(function () {
    $("#products").css({ "display": "block" });
    $("#home").css({ "display": "none" });
});