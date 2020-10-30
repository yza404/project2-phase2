$(".sub-navbar a").click(function(e){
    e.preventDefault();
    $(".toggle").hide();
    var toShow = $(this).attr('href');
    $(toShow).show();
});

function myFunction(x) {
    x.classList.toggle("change");
};