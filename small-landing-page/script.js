import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()

tl.from('.grid-1 div', {
    x: -300,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.2
}, "sameTime")
tl.from('.grid-2', {
    x: 1000,
    opacity: 0,
    duration: 0.5,
}, "sameTime")

tl.from('.grid-3', {
    y: -200,
    opacity: 0,
    duration: 0.5,
    delay: 0.6,
}, "sameTime")

tl.from('.grid-6', {
    y: 200,
    opacity: 0,
    duration: 0.3
})

tl.from('.grid-7', {
    x: 600,
    opacity: 0,
}, "sameTime")


tl.from('.grid-4, .grid-5', {
    opacity: 0,
    duration: 1
})