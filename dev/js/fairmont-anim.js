import { gsap } from "gsap";


gsap.set("#Group_2", {y:"+=70"

})
export const arrowJumpTL = new gsap.timeline();
arrowJumpTL.to("#Group_2", {y:"-=60", repeat:-1, yoyo:true});