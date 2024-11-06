gsap.from(".cont1 .box1 h2",{
    x:"-52rem",
    duration:2,
    delay:1,

})
gsap.from(".cont1 .box2 ",{
    opacity:0,
    duration:2,
    delay:3,

})

gsap.from(".cont2 h2 ",{
    transform: "scale(55)",
    opacity:0,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:".cont2",
        scroller:"body",
        scrub:2,
        pin:true
    }

})


gsap.to(".cont3 img ",{
    transform: "scale(35)",
    opacity:0,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:".cont3 img",
        scroller:"body",
        start:"top 50%",
        scrub:2,
    }

})
gsap.to(".cont3 p ",{
    transform: "scale(35)",
    opacity:0,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:".cont3 img",
        scroller:"body",
        start:"top 50%",
        scrub:2,
    }

})
gsap.from(".cont4",{
    x:555,
    opacity:0,
    duration:1,
    delay:0,
    scrollTrigger:{
        trigger:".cont4",
        scroller:"body",
        start:"top 85%",
        scrub:2,
    }

})
gsap.from(".cont5",{
    x:-555,
    opacity:0,
    duration:1,
    delay:0,
    scrollTrigger:{
        trigger:".cont5",
        scroller:"body",
        start:"top 85%",
        scrub:2,
    }

})
gsap.from(".cont6",{
    x:555,
    opacity:0,
    duration:1,
    delay:0,
    scrollTrigger:{
        trigger:".cont6",
        scroller:"body",
        start:"top 85%",
        scrub:2,
    }

})
gsap.from(".about",{
    y:555,
    opacity:0,
    duration:1,
    delay:0,
    scrollTrigger:{
        trigger:".about",
        scroller:"body",
        start:"top 85%",
        scrub:1,
        
    }

})

gsap.from(".l1",{
    x:555,
    opacity:0,
    duration:1,
    delay:0,
    scrollTrigger:{
        trigger:".l1",
        scroller:"body",
        start:"top 85%",
        scrub:1,
        
    }

})

gsap.from(".l2",{
    x:-555,
    opacity:0,
    duration:1,
    delay:0,
    scrollTrigger:{
        trigger:".l2",
        scroller:"body",
        start:"top 85%",
        scrub:1,
        
    }

})

gsap.from(".l3",{
    x:555,
    opacity:0,
    duration:1,
    delay:0,
    scrollTrigger:{
        trigger:".l3",
        scroller:"body",
        start:"top 85%",
        scrub:1,
        
    }

})

gsap.from(".l4",{
    y:155,
    opacity:0,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:".l4",
        scroller:"body",
        start:"top 85%",
        scrub:1,
        
    }

})