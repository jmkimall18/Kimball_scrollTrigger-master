import { gsap } from "gsap";

import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set("#sec2",{transformOrigin:"right center"});
gsap.set("#img9",{transformOrigin:"right center"});
gsap.set("#sec22",{transformOrigin:"right center"});
gsap.set("#Line_3",{transformOrigin:"right center"});
gsap.set("#Group_21",{transformOrigin:"left center", scale: 1.2});
gsap.set("#Group_22",{transformOrigin:"left center", scale: 1.2});

gsap.set("#Group_32",{y: "-=24"});


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
        translateX: "-=590px",
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
      translateX: "+=800px",
      scrollTrigger:{ 
      start: "top center",
      end: "bottom 70%",
      trigger: "#sec2",
      toggleActions: "restart none resume none",
      scrub: true,
      markers: true
      }
  
    });


    gsap.from("#sec22", {
        // duration:4, 
        translateX: "-=800px",
        scrollTrigger:{ 
        start: "top center",
        end: "bottom center",
        trigger: "#sec22",
        toggleActions: "restart none resume none",
        scrub: true,
        markers: true
        }
    
      });


      gsap.from("#sec3", {
        // duration:4, 
        translateX: "-=200px",
        scrollTrigger:{ 
        start: "top center",
        end: "bottom 50%",
        trigger: "#sec22",
        toggleActions: "restart none resume none",
        scrub: true,
        markers: true
        }
    
      });

      gsap.from("#heading1", {
        // duration:4, 
        translateX: "-=1300px",
        
        scrollTrigger:{ 
            yoyo:2,
        start: "top center",
        end: "bottom center",
        trigger: "#heading1",
        toggleActions: "restart none resume none",
        scrub: true,
        markers: true
        }
    
      });

      gsap.from("#heading2", {
        // duration:4, 
        translateX: "-=1300px",
        
        scrollTrigger:{ 
            yoyo:2,
        start: "top center",
        end: "bottom center",
        trigger: "#heading2",
        toggleActions: "restart none resume none",
        scrub: true,
        markers: true
        }
    
      });

      gsap.from("#heading3", {
        // duration:4, 
        translateX: "-=1300px",
        
        scrollTrigger:{ 
            yoyo:2,
        start: "top center",
        end: "bottom center",
        trigger: "#heading3",
        toggleActions: "restart none resume none",
        scrub: true,
        markers: true
        }
    
      });



      gsap.from("#heading4", {
        // duration:4, 
        translateX: "-=1300px",
        
        scrollTrigger:{ 
            yoyo:2,
        start: "top center",
        end: "bottom center",
        trigger: "#heading4",
        toggleActions: "restart none resume none",
        scrub: true,
        markers: true
        }
    
      });


      gsap.from("#img9", {
        // duration:4, 
        translateX: "+=700px",
        
        scrollTrigger:{ 
            yoyo:2,
        start: "top center",
        end: "bottom center",
        trigger: "#Group_26",
        toggleActions: "restart none resume none",
        scrub: true,
        markers: true
        }
    
      });





    

  }

  export function photoTrigger2(){

    gsap.from("#Group_32", {
        // duration:4, 
        translateX: "-=890px",
        scrollTrigger:{ 
            yoyo:true,
        start: "top center",
        end: "bottom center",
        trigger: "#Group_32",
        toggleActions: "restart none resume none",
        scrub: true,
        markers: true
        }
    
      });


      gsap.from("#Line_4", {
        alpha: 0,
        scale: .2,
        translateX: "+=850px",
         scrollTrigger:{ 
         start: "top center",
         end: "bottom center",
         trigger: "#Line_4",
         toggleActions: "restart none resume none",
         scrub: true,
         markers: true
         }
     
       });



    gsap.from("#Line_5", {
        alpha: 0,
        scale: .2,
         scrollTrigger:{ 
         start: "top center",
         end: "bottom center",
         trigger: "#Line_5",
         toggleActions: "restart none resume none",
         scrub: true,
         markers: true
         }
     
       });


       gsap.from("#sec13", {
        // duration:4, 
        translateX: "-=890px",
        scrollTrigger:{ 
            yoyo:true,
        start: "top center",
        end: "bottom center",
        trigger: "#sec13",
        toggleActions: "restart none resume none",
        scrub: true,
        markers: true
        }
    
      });
 
 
 
 
     gsap.from("#sec5", {
       // duration:4, 
       translateX: "+=800px",
       scrollTrigger:{ 
       start: "top center",
       end: "bottom 70%",
       trigger: "#sec5",
       toggleActions: "restart none resume none",
       scrub: true,
       markers: true
       }
   
     });
 


  }

