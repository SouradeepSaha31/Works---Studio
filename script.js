const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


const page2top = document.querySelector("#page2").offsetTop;
document.querySelector("#page1-footer i").addEventListener("click", function(){
    scroll.scrollTo(page2top)
})

const page3top = document.querySelector("#page3").offsetTop;
document.querySelector("#page2-footer i").addEventListener("click", function(){
    scroll.scrollTo(page3top)
})

document.querySelector("#footer1 #box").addEventListener("click", () =>{
    scroll.scrollTo(0)
})



function responsiveallnavbar(){

var plus = document.querySelector("#plus")
var flag = 0

plus.addEventListener("click", function(){

    if(window.innerWidth <= 768){
        if(flag == 0){
            gsap.to("#plus",{
                transform:"rotate(135deg)",
                ease: "power2.in",
                duration:0.6
            })
            gsap.to(".white-nav",{
                transform: "scaleY(1)",
                duration:0.3,
                ease: "power3.in",
            })

            gsap.to(".op:nth-child(1)",{
                transform: "translateX(0%)",
                opacity: 1,
                duration:0.4,
                delay:0.8
            })
            gsap.to(".op:nth-child(2)",{
                transform: "translateX(0%)",
                opacity: 1,
                duration:0.4,
                delay:1
            })
            gsap.to(".op:nth-child(3)",{
                transform: "translateX(0%)",
                opacity: 1,
                duration:0.4,
                delay:1.2
            })
            gsap.to(".op:nth-child(4)",{
                transform: "translateX(0%)",
                opacity: 1,
                duration:0.4,
                delay:1.4
            })
            
            flag = 1
        }
        else{
            gsap.to(".op:nth-child(4)",{
                transform: "translateX(-100%)",
                opacity: 0,
                duration:0.4,
                // delay:1.4
            })
            gsap.to(".op:nth-child(3)",{
                transform: "translateX(-100%)",
                opacity: 0,
                duration:0.4,
                delay:0.2
            })
            gsap.to(".op:nth-child(2)",{
                transform: "translateX(-100%)",
                opacity: 0,
                duration:0.4,
                delay:0.4
            })
            gsap.to(".op:nth-child(1)",{
                transform: "translateX(-100%)",
                opacity: 0,
                duration:0.4,
                delay:0.6
            })
            
            gsap.to("#plus",{
                transform:"rotate(0deg)",
                ease: "power2.in",
                duration:0.6
            })
            gsap.to(".white-nav",{
                transform: "scaleY(0)",
                duration:0.3,
                delay:1,
                ease: "power3.in",
            })
            
            flag = 0
        }
    }
        
    else{
        if(flag == 0){
            gsap.to("#plus",{
                transform:"rotate(135deg)",
                ease: "power2.in",
                duration:0.6
            })
    
            gsap.to("#store",{
                width:"53px",
                duration:0.5,
            },)
            gsap.to("#store",{
                marginLeft:"40px",
                duration:0.5,
                delay:0.1
            },)
    
            gsap.to("#studies",{
                width:"63px",
                duration:0.5,
                delay:0.2
            },)
            gsap.to("#studies",{
                marginLeft:"40px",
                duration:0.5,
                delay:0.3
            },)
    
            gsap.to("#about",{
                width:"50px",
                duration:0.5,
                delay:0.4
            },)
            gsap.to("#about",{
                marginLeft:"40px",
                duration:0.5,
                delay:0.5
            },)
            flag = 1
        }
        else{
            gsap.to("#plus",{
                transform:"rotate(0deg)",
                ease: "power2.in",
                duration:0.6
            })
    
            gsap.to("#about",{
                marginLeft:"8px",
                duration:0.5,
            },)
            gsap.to("#about",{
                width:0,
                duration:0.5,
                delay:0.1
            },)
    
            gsap.to("#studies",{
                marginLeft:"8px",
                duration:0.5,
                delay:0.2
            },)
            gsap.to("#studies",{
                width:0,
                duration:0.5,
                delay:0.3
            },)
    
            gsap.to("#store",{
                marginLeft:"8px",
                duration:0.5,
                delay:0.4
            },)
            gsap.to("#store",{
                width:0,
                duration:0.5,
                delay:0.5
            },)
            flag = 0
        }
    }
})

}
responsiveallnavbar()


function loader(){
    gsap.to("#text-div",{
        transform:"translateY(-100%)",
        duration:0.2,
        delay:0.5
    })
    gsap.to("#video-div",{
        transform:"translateY(-100%)",
        duration:0.2,
        delay:1.6
    })
    gsap.from("#page1 h1",{
        color:"#fff",
        duration:0.5,
        delay:1.7
    })
    gsap.to("#loader",{
        transform:"translateY(-100%)",
        duration:0.5,
        delay:2
    })
}
loader()


function page2anime(){

var elements = document.querySelectorAll(".op-5 h1");
var marquees = document.querySelectorAll(".op-5 .marquee");

elements.forEach(function(element, index) {
    var marquee = marquees[index];

    element.addEventListener("mouseenter", function(){
        element.style.fontStyle = "italic";
        element.style.color = "#000";
        marquee.style.transform = "translateY(-50%) scaleY(1)";
    });

    element.addEventListener("mouseleave", function(){
        element.style.fontStyle = "normal";
        element.style.color = "#fff";
        marquee.style.transform = "translateY(-50%) scaleY(0)";
    });
});


var op5 = document.querySelectorAll(".op-5")
var h1s = document.querySelectorAll(".op-5 h1");
var page2 = document.querySelector("#page2");

h1s.forEach(function(h1, ele){
    var elem = op5[ele]
    h1.addEventListener("mouseenter", function(){
        var image = elem.getAttribute("data-image")
        page2.style.backgroundImage = `url(${image})`
    })
    h1.addEventListener("mouseleave", function(){
        // var image = elem.getAttribute("data-image")
        page2.style.backgroundImage = ``
    })
    
})

}
page2anime()


