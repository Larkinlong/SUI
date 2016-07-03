//$(document).on("pageshow", "#page_index", function () {
$(document).ready(function () {
    $(".col-1").click(function () {
        $(".col-1").removeClass("col-click");
        $(this).addClass("col-click");

    });

    $(".evaluate_yoga .left a").click(function () {
        var title = $(this).attr("title");
        if (title == 1) {
            $(".evaluate_yoga .current-rating").css({width: "40px"});
            $("#evaluate_star").val("1");
        }
        if (title == 2) {
            $(".evaluate_yoga .current-rating").css({width: "80px"});
            $("#evaluate_star").val("2");
        }
        if (title == 3) {
            $(".evaluate_yoga .current-rating").css({width: "120px"});
            $("#evaluate_star").val("3");
        }
        if (title == 4) {
            $(".evaluate_yoga .current-rating").css({width: "160px"});
            $("#evaluate_star").val("4");
        }
        if (title == 5) {
            $(".evaluate_yoga .current-rating").css({width: " 200px"});
            $("#evaluate_star").val("5");
        }
    });
});
