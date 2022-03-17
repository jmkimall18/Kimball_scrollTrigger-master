import { gsap } from "gsap";

import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set("#sec2",{transformOrigin:"right center"});
gsap.set("#Line_3",{transformOrigin:"right center"});
gsap.set("#Group_21",{transformOrigin:"left center", scale: 1.2});

export function photoTrigger1(){

    gsap.from("#Line_3", {
       alpha: 0,
       scale: .2,
        scrollTrigger:{ 
        start: "top center",
        end: "bottom center",
        trigger: "#Group_21",
        toggleActions: "restart none resume none",
        scrub: true,
        markers: true
        }
    
      });



    gsap.from("#Group_21", {
        
        // duration:4, 
        translateX: "-=550px",
        scrollTrigger:{ 
            yoyo:true,
        start: "top center",
        end: "bottom center",
        trigger: "#Group_21",
        toggleActions: "restart none resume none",
        scrub: true,
        markers: true
        }
    
      });



    gsap.from("#sec2", {
      // duration:4, 
      translateX: "+=200px",
      scrollTrigger:{ 
      start: "top center",
      end: "bottom 70%",
      trigger: "#sec2",
      toggleActions: "restart none resume none",
      scrub: true,
      markers: true
      }
  
    });
  }
