window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {

        document.getElementById("header").style.padding = "5px";

    } else {
        document.getElementById("header").style.padding = "15px";

    }
}