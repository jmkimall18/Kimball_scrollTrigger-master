



import {arrowJumpTL} from "./fairmont-anim"

import { burgerTL, burgerJumpTL, circleTL} from "./burgerAnimation"

import { displayWindowSize} from "./mobileResizing"

import { menuAnimation} from "./mobileMenu"

import { menuListners} from "./menu"

// import { scrollPage } from "./pageScroll"

import { photoTrigger1 } from "./scrollanimation";




var burgerButton = document.querySelector("#burger-svg")
let canISeeMenu = false;
let menuScrollable = true;



let burgerBtn = document.querySelector("#burger-svg");
burgerBtn.addEventListener("mouseenter", () => {
    console.log("burger mouse enter");
    // code for burger mouse leave..... 
    
    burgerTL.play();
    
})

burgerBtn.addEventListener("mouseleave", () => {
   
    // code for burger mouse leave..... 
    // menuAnimation.reverse();
  
    if(canISeeMenu === false){
        console.log("burger mouse leave");
        
        burgerTL.reverse();
    }
})




function openCloseMenu(){

    if(window.innerWidth <= 1048){
    if(canISeeMenu === false) {
        burgerJumpTL.play();
        menuAnimation.play();
        burgerTL.play();
        circleTL.play();
        screenLocker();
        canISeeMenu = true;
        
    }else{

       
        burgerTL.reverse();
        circleTL.reverse();
        burgerJumpTL.pause();
        menuAnimation.reverse();
        screenLocker();
        canISeeMenu = false;

    }
}
}

window.addEventListener("resize", function(){
    if(canISeeMenu === true){
        openCloseMenu();

    }
});

burgerButton.addEventListener("click", openCloseMenu)

let navButtons = document.querySelectorAll(".nav-btns");
console.log(navButtons);

for (const button of navButtons){
    button.addEventListener("click", openCloseMenu)
    // button.addEventListener("click", checkScrolling);
}

// function checkScrolling(e) {


//     const indexValue = [].indexOf.call(navButtons, e.target);
//     e.stopPropagation();
//     e.preventDefault();
//     if (indexValue != -1) {
//         scrollPage(indexValue - 1);
//     }
// }


function screenLocker(){

    if(menuScrollable === true){

        window.onscroll = function(){window.scrollTo(0,0);};
        menuScrollable = false
    }
    else{
        window.onscroll = function(){};
        menuScrollable = true;
    }
       
    
}


window.addEventListener('load', arrowJumpTL);
window.addEventListener('load',  photoTrigger1);








window.addEventListener('load', menuListners);
window.addEventListener('resize', menuListners);

window.addEventListener('load', displayWindowSize)
window.addEventListener('resize', displayWindowSize)




































// import { demoThing } from "./scrollanimation.js";

// demoThing();


// var squareTimeline = gsap.timeline();
// squareTimeline.from("#red-box",{duration:5, xPercent: 300, rotation:360, alpha:0 })
//             .from("#orange-box",{duration:5, xPercent: 300, rotation:180, alpha:0 }, "-=0.5")
//             .from("#yellow-box",{duration:5, xPercent: 300, rotation:360, alpha:0 }, "-=0.5"); 
            

// ScrollTrigger.create({
//     trigger: "#orange-box",
//     start: "top 50%",
//     end: "bottom 50%",
//     animation: squareTimeline,
//     toggleActions: "restart none reverse none",
//     scrub: 1,
//     id: "#red",
//     markers: true
// });




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