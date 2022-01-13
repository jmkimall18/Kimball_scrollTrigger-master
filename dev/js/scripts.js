gsap.registerPlugin(ScrollTrigger);


var squareTimeline = gsap.timeline();
squareTimeline.from("#red-box",{duration:5, xPercent: 300, rotation:360, alpha:0 })
            .from("#orange-box",{duration:5, xPercent: 300, rotation:180, alpha:0 }, "-=0.5")
            .from("#yellow-box",{duration:5, xPercent: 300, rotation:360, alpha:0 }, "-=0.5"); 
            

ScrollTrigger.create({
    trigger: "#orange-box",
    start: "top 50%",
    end: "bottom 50%",
    animation: squareTimeline,
    toggleActions: "restart none reverse none",
    scrub: 1,
    id: "#red",
    markers: true
});




// gsap.to("#yellow-box", {
//     duration: 1,
//     xPercent: 200,
//     rotation:180,
//     scrollTrigger: {
//         trigger:"#orange-box",
//         markers: true,
//         // onEnter, onLeave, onEnterBack, onLeaveBack
//         // options:
//         // play pause resume reverse restart reset complete none
//         toggleActions: "restart pause reverse none",
//         id: "orange-box",
//          // first property of top refers to the yellow box, the 50% property refers to the viewport
//         start: "top 10%",
//         end: "bottom 10%",
//         scrub: 1,
//         pin: true
//     }
// })



















//gsap.to("#yellow-box",{duration:1, x:400, rotation: 360, scrollTrigger:"#yellow-box"});

// Toggle Actions 

// gsap.to("#yellow-box",{
//     duration:1, 
//     x:400, 
//     rotation: 360, 
//     scrollTrigger:{
//         trigger: "#yellow-box",
//         // first property of top refers to the yellow box, the center property refers to the viewport
//         //start: "top 45%",
//         // first property of top refers to the yellow box, the center property refers to the viewport
//         //end: "+=500 50%",
//         //markers: true,
//         //scrub:1,
//         //pin: true,
//         // onEnter, onLeave, onEnterBack, onLeaveBack
//         toggleActions: "restart none none none"
//     }});

// keywords
// play pause resume reverse restart reset complete none