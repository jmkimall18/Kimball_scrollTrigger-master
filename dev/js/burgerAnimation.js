import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#burger1",{transformOrigin:"center"});
// gsap.set("#top",{drawSVG: "0% 37%"});
// gsap.set("#bottom1",{drawSVG: "50% 50%"});
// gsap.set("#circle-svg",{scale: .2, transformOrigin:"right center", y: "-=400", x: ""});
// gsap.set("#circle-svg",{scale: 1, y: "-=30", x: "+=30"});
gsap.set("#circle-svg",{y: "-=140vh", scale: 4});
gsap.set("#circle-svg2",{y: "-=167vh", scale: 4});

    






// gsap.set("#burger",{rotate:90});



// export const circleNone = new gsap.timeline({paused:true});
// circleNone.to("#circle-svg", {display: "none"});

// export const circleShow = new gsap.timeline({paused:true});
// circleShow.to("#circle-svg", {display: "list-item"});


export const circleTL = new gsap.timeline({paused:true});
circleTL.set(".circle-stagger", {alpha:1})
circleTL.to("#circle-svg2", {duration:2.5, y: "+=200vh", scale: 4})
circleTL.to("#circle-svg", {duration:1.5, y: "+=200vh", scale: 3}, "-=2.3")
// circleTL.to("#circle-cover", {duration: 2, color: '#E3BCBA'})

// circleTL.to("#circle-top", {duration:2, y: "+=70vh", scale: 1.5});
// circleTL.to("#circle-svg", {duration:1, scale: 50});


const bottomTL = new gsap.timeline();
bottomTL.to("#bottom1",{duration:1.5, drawSVG: "50% 50%"}, "same")


export const burgerTL = new gsap.timeline({paused:true});

burgerTL
   
    .add(bottomTL,"burger");
    




    
export const burgerJumpTL = new gsap.timeline({paused:true});
burgerJumpTL.to("#burger1", {y:"5", repeat:-1, yoyo:true});









    
