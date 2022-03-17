import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#section-1", "#section-2", "#section-3", "#section-4"];






export function scrollPage(index){

gsap.to(window, {duration: 3, scrollTo:{y:idArray[index],offsetY: 120}});


}