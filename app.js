let container = document.querySelector('.main-wrapper');
let section = container.querySelectorAll('section')

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:container,
        scrub:1,
        pin:true,
        start:'top top',
        end:'+=3300',
    }
})

.to(container,{
    x:()=>
    -(container.scrollWidth - document.documentElement.clientWidth -35) +"px",
    ease:"none",
    duration:1,
})


.to('.side-bar', {
    x:150,
    opacity:1,
    scrollTrigger:{
        trigger:'.side-bar',
        start:'center+=2500 center',
        scrub:2.5,
    }
})
.to({},{duration:1 / section.length + 0.1 })



//inicial images effect
gsap.to('.col-1',{
    y:-350,
    ease:'none',
    duration:2,
    scrollTrigger:{
        trigger:'.image-gallery',
        start:'top center',
        end:'+=4000',
        scrub:true,
    }
})
gsap.to('.col-2',{
    y:350,
    ease:'none',
    duration:2,
    scrollTrigger:{
        trigger:'.image-gallery',
        start:'top center',
        end:'+=4000',
        scrub:true,
        
    }
})
gsap.to('.col-3',{
    y:-350,
    ease:'none',
    duration:2,
    scrollTrigger:{
        trigger:'.image-gallery',
        start:'top center',
        end:'+=4000',
        scrub:true,
    }
})
//inicial images effect



gsap.from('.row-2',{
    height:'0%',
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:'.section-3',
        start:'40% center',
        toggleActions:'play pause reverse reverse',
    }
})

gsap.from('.row li',{
    y:200,
    opacity:0,
    ease:'none',
    duration:1,
    delay:2,
    stagger:{
        amount:1
    },
    scrollTrigger:{
        trigger:'.row li',
        toggleActions:'play pause reverse reverse',
    },
});

gsap.to('.num',{
    x:600,
    duration:2,
    scrollTrigger:{
        trigger:'.num',
        start:'right left',
    }
})
