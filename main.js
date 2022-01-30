$(document).ready(function(){
    $('.search-icon a').hover(function(){
        $('.search-text').show("slow",function(){
            $('.search-icon').hide("slow");
        });
    });

    $('#like').on({
        mouseenter: function(){
            $("#like i").removeClass("far fa-heart");
            $("#like i").addClass("fas fa-heart");
        },
        mouseleave: function(){
            $("#like i").removeClass("fas fa-heart");
            $("#like i").addClass("far fa-heart");
        },
        click:function(event){
            $("#like").unbind();
            $("#like i").removeClass("far fa-heart");
            $("#like i").addClass("fas fa-heart");
            event.preventDefault();
        }
      });
    // $(window).scroll(function() {
    //     if ($(document).scrollTop() > 200) {
    //       $("#navbar").css("background-color", "var(--dark)");
    //     } else {
    //       $("#navbar").css("background-color", "hsla(253, 70%, 8%, 0.227)"); 
    //     }
    //   });
 
})
