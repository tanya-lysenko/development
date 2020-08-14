$(function () {
    // Пустые ссылки
    $("a[href='#']").click(function (e) {
        e.preventDefault();
    });

    // Мобильное меню
    $("#menu").click(function () {
        $("#header nav").toggleClass("visible");
    });
});
