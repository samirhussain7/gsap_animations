import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

// Smooth Scrolling Using Lenis. ( for smoothScrolling function )
function smoothScrolling() {
  // 1. Initialize Lenis
  const lenis = new Lenis({
    duration: 1.2, // Scroll ki speed (jitna zyada utna slow)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
    smoothWheel: true, // Mouse wheel ke liye smooth scroll
  });

  // 2. Lenis aur ScrollTrigger ko sync karna
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Isse ScrollTrigger ko pata chalta hai ki page scroll ho raha hai
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}
smoothScrolling();

// The middle of the webpage (Hello!) Text hover effect using gsap, It will change after user hovering of the element with random background color. - ( for hoverEffect function)
function hoverEffect() {
  const elems = document.querySelectorAll("h2 span");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color = color + letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  elems.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      
      const newColor = getRandomColor();
      gsap.to(e, {
        color: newColor,
        scale: 1.2,
        duration: 0.2,
      });
    });

    e.addEventListener("mouseleave", () => {
      gsap.to(e, {
        color: "#666",
        scale: 1,
        duration: 0.3,
      });
    });
  });
}
hoverEffect();

// here is basics GSAP Animations - ( for Header )
function basicGsapAnimations() {
  const tl = gsap.timeline();
  tl.from("h1", {
    y: -60,
    opacity: 0,
    delay: 1,
    duration: 0.3,
  });

  tl.from("h4", {
    y: -60,
    opacity: 0,
    stagger: {
      amount: 0.5,
      from: "start",
    },
  });

  tl.from("h2 span", {
    x: 600,
    opacity: 0,
    rotate: 360,
    color: "yellow",
    stagger: {
      amount: 0.8,
      from: "start",
    },
  });
  gsap.to(".rotate", {
    duration: 2,
    delay: 10,
    repeat: 5,
    repeatDelay: 10,
    rotateX: 360,
    // yoyo: true,
    ease: "power1.inOut",
  });
}
basicGsapAnimations()

// Stop-div scroll Animaton
gsap.to('.stop-div h1', {
  // transform: 'translateX(-5%)',
  x: '-50vw',
  scrollTrigger: {
    trigger: '.stop-div',
    scroller: 'body',
    start: 'top 0%',
    end: 'top -200%',
    scrub: 1,
    pin: true,
  }
})


// ScrollTrigger Animations - ( for scrollTriggerElems function)
function scrollTriggerElems() {
  const divs = document.querySelectorAll(".sec div");

  divs.forEach((elem, index) => {
    const bgColor = ["green", "yellow"];
    elem.style.backgroundColor = bgColor[index];

    gsap.from(elem, {
      duration: 0.8,
      scale: 0,
      scrollTrigger: {
        trigger: elem,
        start: "top 50%",
        // markers: true
      },
    });
  });
}
scrollTriggerElems();
