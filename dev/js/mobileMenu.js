import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle");




export const menuAnimation = new gsap.timeline({paused:true});
menuAnimation





.to(".nav-btns-li",{duration:1, x:0, alpha:1, stagger: .1})

.to("#nav-container",{duration:1, y:0, alpha:1, stagger: .1})
.to(".stagger-in-nav",{duration:0.01, x:0, y:"+=15", alpha:1, ease: "elastic", stagger: .1}, "-=1")
// .to(".move-nav",{duration:0.5, x:-menuWidth, alpha:1}, "-=.5");




