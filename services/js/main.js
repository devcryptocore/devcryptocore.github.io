const fecha = new Date();
let year = fecha.getFullYear();
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
        $("#title-cont").html(myskillstitle);

        setTimeout(()=>{
            $(".motiv").css("animation","positionA 205s linear 1s infinite alternate");
            $("#motivx").css("animation","positionB 220s linear 1s infinite alternate");
            $("#motivy").css("animation","positionC 180s linear 1s infinite alternate");
        },2000);

        $(".langs").each((x,s)=>{
            let lg = $(s).attr("id");
            $(s).css({
                "background":`linear-gradient(0deg, transparent, #40119875),url(resources/assets/images/svgs/${lg}.svg) center no-repeat`,
                "background-size":"100%,20px"
            });
            $(s).mouseover(()=>{
                let lgs;
                setTimeout(()=>{
                    $("#in-lang").css({"transition":"all .3s ease-in-out"});
                    $("#in-lang").text(lg);
                },500);
                let lenguages = {
                    python: [75,60,78],
                    javascript: [90,75,71],
                    php: [85,85,80],
                    java: [60,55,48],
                    angular: [78,52,45],
                    node: [70,50,40],
                    flask: [80,75,82],
                    django: [73,69,73]
                };
                switch (lg) {
                    case 'python':
                        lgs = lenguages.python;
                        break;
                    case 'javascript':
                        lgs = lenguages.javascript;
                        break;
                    case 'php':
                        lgs = lenguages.php;
                        break;
                    case 'java':
                        lgs = lenguages.java;
                        break;
                    case 'angular':
                        lgs = lenguages.angular;
                        break;
                    case 'node':
                        lgs = lenguages.node;
                        break;
                    case 'flask':
                        lgs = lenguages.flask;
                        break;
                    case 'django':
                        lgs = lenguages.django;
                        break;
                    default:
                        break;
                }
                $(".spA1",".spB1",".spC1").css({"transition":"all .7s ease-in-out"});
                setTimeout(()=>{
                    $("#in-lang").css({
                        "transition":"all .3s ease-in-out",
                        "background":`url(resources/assets/images/svgs/${lg}.svg) 50% 20% no-repeat`,
                        "background-size":"30px"
                    });
                    $(".mstatA").css({"background":`conic-gradient(#6dddff 0% ${(lgs[0]+lgs[1]+lgs[2])/3}%, #40119836 ${(lgs[0]+lgs[1]+lgs[2])/3}% 100%)`});
                    $(".spA1").css({"background":`conic-gradient(#6dddff 0% ${lgs[0]}%, #40119836 ${lgs[0]}% 100%)`});
                    $(".spB1").css({"background":`conic-gradient(#6dddff 0% ${lgs[1]}%, #40119836 ${lgs[1]}% 100%)`});
                    $(".spC1").css({"background":`conic-gradient(#6dddff 0% ${lgs[2]}%, #40119836 ${lgs[2]}% 100%)`});
                },500);
            });
        });

    }(jQuery));

    (function(){
        $(".option").each((ind,elem)=>{
            $(elem).click(()=>{
                console.log(ind)
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
                console.log(ind)
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
                },900);
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