import {gsap} from 'gsap'

const menuBtn = document.querySelector('#menu')
const closeBtn = document.querySelector('#close')
const slider = document.querySelector('.slide')



const tl = gsap.timeline()
tl.from('h1', {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 1
})
tl.from('#menu', {
    x: 100,
    opacity: 0,
    // duration: 1
})

menuBtn.addEventListener('click', ()=> {
    gsap.to(slider, {
        right: 0,
    })
    gsap.from('h2', {
        x: 100,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2
    })
})

closeBtn.addEventListener('click', ()=>{
    gsap.to(slider, {
        right: '-30%',
    })
})