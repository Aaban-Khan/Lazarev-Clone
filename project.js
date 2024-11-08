var main=document.querySelector("#main")

function init() {`  
    `
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, 
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
init()

function navAnimation(){
    var nav=document.querySelector("nav")

nav.addEventListener("mouseenter",function(){
    let tl=gsap.timeline()

    tl.to("#nav-bottom",{
        height:"26vh"
    })
    tl.to("#nav-part2 h5",{
        display:"block"
    })
    tl.to(".nav-elem h5 span",{
        y:0,
        // duration:0.3,
        stagger:{
            amount:0.5
        }
    })
})

nav.addEventListener("mouseleave",function(){
    let tl=gsap.timeline()
    tl.to(".nav-elem h5 span",{
        y:25,
        // duration:0.3,
        stagger:{
            amount:0.2
        }
    })
    tl.to(".nav-elem h5",{
        display:"none",
        duration:0.1
    })
    tl.to("#nav-bottom",{
        height:0,
        duration:0.2
    })
})
}
navAnimation()


var sections = document.querySelectorAll(".vid-container")
sections.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
       elem.childNodes[3].style.opacity = 1
       elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
     })
})

