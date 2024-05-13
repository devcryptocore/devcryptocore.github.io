$(window).on("load",()=>{
    $("#loader").fadeOut("slow");
});

$(document).ready(()=>{
    (function(){
        let number = Math.floor(Math.random() * (100-50+1))+50;
        let x = document.querySelector(".main-background");
        $(".main-background").html(``);
        for(let i=0;i<number;i++){
            let span = $("<span></span>").addClass("point");
            $(".main-background").append(span);
            $(".point").each((i,e)=>{
                $(e).css({
                    "transform":`translate(${Math.random()*(x.offsetWidth-20)}px,${Math.random()*(x.offsetHeight-20)}px)`,
                    "animation":`bright 15s cubic-bezier(0.075, 0.82, 0.165, 1) ${i}s infinite alternate both running`
                });
            });
        }
        $("#bfont").text(encabezado);
        $("#mfont").text(subtitle);
        $("#ocontainer").html(opciones);
        $(".d-myprofile").html(my_profile);

        setTimeout(()=>{
            $(".motiv").css("animation","positionA 220s linear 1s infinite alternate");
            $("#motivx").css("animation","positionB 200s linear 1s infinite alternate");
            $("#motivy").css("animation","positionC 180s linear 1s infinite alternate");
        },2000);

    }(jQuery));

    (function(){
        $(".option").each((ind,elem)=>{
            $(elem).click(()=>{
                $(".option").removeClass("active-option");
                $(elem).css({"animation":"unset"});
                $(elem).addClass("active-option");
                $("html,body").animate({
                    scrollTop: $(`#source_${ind}`).offset().top
                },1000);
            });
            $(elem).mouseover(()=>{
                $(elem).css({"animation":"onhover .5s both","color":"#6dddff"});
                $(elem).mouseleave(()=>{
                    $(elem).css({"animation":"outhover .5s both","color":"#eee"});
                });
            });
        });
    }(jQuery));

    //scroll control
    $(window).on("scroll",()=>{
        let mark = 0;
        let tp = $(window).scrollTop();
        $(".source").each((index,elemento)=>{
            let elem = $(`#source_${index}`).offset().top-300;
            if(tp >= elem){
                $(elemento).removeClass("active-source");
                $(`.option`).removeClass("active-option");
                $(`#source_${index}`).removeClass("inactive-source");
                $(`#source_${index}`).addClass("active-source");
                $(`#option_${index}`).addClass("active-option");
            }
            else {
                $(`#source_${index}`).addClass("inactive-source");
            }
        });
    });

});