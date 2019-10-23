$(document).ready(function () {
    $("div:first")
        .nextAll()
        .hide();
});

$(document).ready(function () {
    $("#login_btn").click(function (e) {
        var username = $("#s1").val();
        var password = $("#p1").val();
        e.preventDefault();
        if (username == "user" && password == "demo") {
            $("div:first").hide();
            $("div:first")
              .next()
              .show()
              .animate({fontSize: "2em" });
        } else {
            $("#p2")
                .text("Incorrect details, try again")
                .css("color", "red");
        }
    });
});

$(document).ready(function () {
    $("#start").click(function (e) {
        e.preventDefault();
        $("#instr").hide();
        $("#q1")
          .show()
          .animate({fontSize: "1.5em" });
    });
});

$(document).ready(function () {
    $("#b1").click(function (e) {
        e.preventDefault();
        var radioValue = $("input.c:checked").val();
        if (radioValue) {
            $("#q1").hide();
            $("#q2")
              .show()
              .animate({ fontSize: "1.5em" });
        } else {
            $("#q1").hide();
            $("div:last")
              .show();
        }
    });
});

$(document).ready(function () {
    $("#b2").click(function (e) {
        e.preventDefault();
        var radioValue = $("input.a:checked").val();
        if (radioValue) {
            $("#q2").hide();
            $("#q3")
              .show()
              .animate({fontSize: "1.5em"});
        } else {
            $("#q2").hide();
            $("div:last")
              .show();
        }
    });
});

$(document).ready(function () {
    $("#b3").click(function (e) {
        e.preventDefault();
        var radioValue = $("input.c:checked").val();
        if (radioValue) {
            $("#q3").hide();
            $("#q4").show()
            .animate({ fontSize: "1.5em" });
        } else {
            $("#q3").hide();
            $("div:last").show();
        }
    });
});

$(document).ready(function () {
    $("#b4").click(function (e) {
        e.preventDefault();
        var radioValue = $("input.a:checked").val();
        if (radioValue) {
            $("#q4").hide();
            $("#q5")
              .show()
              .animate({ fontSize: "1.5em" });
        } else {
            $("#q4").hide();
            $("div:last").show();
        }
    });
});

$(document).ready(function () {
    $("#b5").click(function (e) {
        e.preventDefault();
        var radioValue = $("input.c:checked").val();
        if (radioValue) {
            $("#q5").hide();
            $("#q6")
              .show()
              .animate({ fontSize: "1.5em" });
        } else {
            $("#q5").hide();
            $("div:last").show();
        }
    });
});

$(document).ready(function () {
    $("#b6").click(function (e) {
        e.preventDefault();
        var radioValue = $("input.a:checked").val();
        if (radioValue) {
            $("#q6").hide();
            $("#q7")
              .show()
              .animate({ fontSize: "1.5em" });
        } else {
            $("#q6").hide();
            $("div:last").show();
        }
    });
});

$(document).ready(function () {
    $("#b7").click(function (e) {
        e.preventDefault();
        var radioValue = $("input.d:checked").val();
        if (radioValue) {
            $("#q7").hide();
            $("#q8")
              .show()
              .animate({ fontSize: "1.5em" });
        } else {
            $("#q7").hide();
            $("div:last").show();
        }
    });
});

$(document).ready(function () {
    $("#b8").click(function (e) {
        e.preventDefault();
        var radioValue = $("input.d:checked").val();
        if (radioValue) {
            $("#q8").hide();
            $("#q9")
              .show()
              .animate({ fontSize: "1.5em" });
        } else {
            $("#q9").hide();
            $("div:last").show();
        }
    });
});

$(document).ready(function () {
    $("#b9").click(function (e) {
        e.preventDefault();
        var radioValue = $("input.a:checked").val();
        if (radioValue) {
            $("#q9").hide();
            $("#q10")
              .show()
              .animate({ fontSize: "1.5em" });
        } else {
            $("#q9").hide();
            $("div:last").show();
        }
    });
});

$(document).ready(function () {
    $("#b10").click(function (e) {
        e.preventDefault();
        var radioValue = $("input.c:checked").val();
        if (radioValue) {
            $("#q10").hide();
            $("#win")
                .show()
                .animate({ fontSize: "5.5em" });
        } else {
            $("#q10").hide();
            $("div:last").show();
        }
    });
});

$(document).ready(function () {
    $('#reset').click(function (e){
        $('div:last').hide();
        $("#instr").show();
    });
});