const fecha = new Date();
let year = fecha.getFullYear();
$(window).on("load",()=>{
    $(".langs").each((l,p)=>{
        let id = $(p).attr("id");
        $(p).click(()=>{
            let nlang = [[75,60,78],[90,75,71],[85,85,80],[60,55,48],[78,52,45],[70,50,40],[80,75,82],[73,69,73]];
            $("#in-lang").text(id);
            $(".mstatA").css({
                "background":`conic-gradient(#6dddff 0% ${(nlang[l][0]+nlang[l][1]+nlang[l][2])/3}%,
                #40119836 ${(nlang[l][0]+nlang[l][1]+nlang[l][2])/3}% 100%)`
            });
            $("#in-lang").css({
                "background":`url(resources/assets/images/svgs/${id}.svg) center 25px / 25px no-repeat`         
            });
            $(".spA1").css({"background":`conic-gradient(#6dddff 0% ${nlang[l][0]}%, #40119836 ${nlang[l][0]}% 100%)`});
            $(".spB1").css({"background":`conic-gradient(#6dddff 0% ${nlang[l][1]}%, #40119836 ${nlang[l][1]}% 100%)`});
            $(".spC1").css({"background":`conic-gradient(#6dddff 0% ${nlang[l][2]}%, #40119836 ${nlang[l][2]}% 100%)`});
        });
    });
});
$(document).ready(()=>{
    $("#loader").fadeOut("slow");
    (function(){
        let canvas = document.getElementById('stars_background');
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < 200; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 1, true);
            ctx.fillStyle = '#eee';
            ctx.fill();
        }
    }(jQuery));
    function ax(){
        $(".langs").each((x,s)=>{
            console.log(s+" - "+x);
        });
    }
    (function(){
        $("#bfont").text(encabezado);
        $("#mfont").text(subtitle);
        $("#ocontainer").html(opciones);
        $(".d-myprofile").html(my_profile);
        $("#title-cont").html(myskillstitle);
        $(".motiv").css("animation","positionA 205s linear 1s infinite alternate");
        $("#motivx").css("animation","positionB 220s linear 1s infinite alternate");
        $("#motivy").css("animation","positionC 180s linear 1s infinite alternate");
    }(jQuery));

    (function(){
        $(".option").each((ind,elem)=>{
            $(elem).click(()=>{
                console.log(ind)
                $(".option").removeClass("active-option");
                $(elem).addClass("active-option");
                $("html,body").animate({
                    scrollTop: $(`#source_${ind}`).offset().top
                },1000);
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
    let mark = 0;
    $(".open-menu-button").click((e)=>{
        if(mark == 0){
            $("#mcontainer").css({"animation":"left-in .5s linear .1s both"});
            $("#mcontainer").css({"display":"flex"});
            $("#mcontainer").html(`
                <span class="close-menu" id="cmenu"></span>
                ${opciones}
                <span class="foot">© Cryptocore ${year}</span>
            `);
            mark = 1;
        }
        $(".option").each((ind,elem)=>{
            $(elem).click(()=>{
                $(".option").removeClass("active-option");
                $(elem).css({"animation":"unset"});
                $(elem).addClass("active-option");
                $("#mcontainer").css({"animation":"left-out .5s linear .1s both"});
                setTimeout(()=>{
                    $("#mcontainer").css({"display":"none"});
                    mark = 0;
                    $("html,body").animate({
                        scrollTop: $(`#source_${ind}`).offset().top-80
                    },700);
                },600);
            });
            $(elem).mouseover(()=>{
                $(elem).css({"animation":"onhover .5s both","color":"#6dddff"});
                $(elem).mouseleave(()=>{
                    $(elem).css({"animation":"outhover .5s both","color":"#eee"});
                });
            });
        });
        $(".close-menu").click(()=>{
            $("#mcontainer").css({"animation":"left-out .5s linear .1s both"});
            setTimeout(()=>{
                $("#mcontainer").css({"display":"none"});
                mark = 0;
            },900);
        });
    });

});