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
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
gsap.to("#nav-part1 svg",{
    transform:"translatey(-100%)",
    scrollTrigger: {
        trigger:"#page1",
        scroller:"#main",
        markers:true,
        start:"top 0",
        end:"top -5%",
        scrub: true  
    }
})
gsap.to("#nav-part2 #links a",{
    transform:"translatey(-100%)",
    opacity:0,
    scrollTrigger: {
        trigger:"#page1",
        scroller:"#main",
        markers:true,
        start:"top 0",
        end:"top -5%",
        scrub: true  
    }
})


function videoconAnimation(){
    let videocon = document.querySelector("#video-Container")
let playbtn = document.querySelector("#play")

videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})

videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-90,
        top : dets.y-90
    
    })
})
}
videoconAnimation()

function loadinganimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity: 0,
        delay:0.5,
        duration:0.8,
        stagger:0.3
    
    })
    gsap.from("#page1 #video-Container",{
        scale:0.9,
        opacity: 0,
        delay:1.5,
        duration:0.6,
        stagger:0.3
    
    })
    
}
loadinganimation()

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y  
    })
})

document.querySelector('#child1').addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: `translate(-50,-50)  scale(1)`

    })
})

document.querySelector('#child1').addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        transform: `translate(-50,-50)  scale(0)`

    })
})

























