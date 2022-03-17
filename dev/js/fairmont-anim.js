import { gsap } from "gsap";


gsap.set("#Group_2", {y:"+=70"

})
export const arrowJumpTL = new gsap.timeline();
arrowJumpTL.to("#Group_2", {y:"-=60", repeat:-1, yoyo:true});


gsap.set("#sec11", {y:"+=70"

})
export const oneJumpTL = new gsap.timeline();
oneJumpTL.to("#sec11", {y:"-=60", repeat:-1, yoyo:true});