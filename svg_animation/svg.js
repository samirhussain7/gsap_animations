import { gsap } from "gsap";

// let pathValue = "M 60 150 Q 650 150 1190 150";
const finalPathValue = "M 60 150 Q 650 150 1190 150";
const container = document.querySelector("svg");

  container.addEventListener('mousemove', (e)=>{
    gsap.to("svg path", {
      attr: {
        d: `M 60 150 Q ${e.x} ${e.y} 1190 150`,
      },
    });
  })

  container.addEventListener("mouseout", () => {
    gsap.to('svg path', {
      attr: {
        d: finalPathValue,
      },
      ease: "elastic.out(1.3.0.6)",
      duration: 1.5
    })
    
  });

