let leftLeaves = document.querySelector('.leafL');
let rightLeaves = document.querySelector('.leafR');



let tween = gsap.timeline()

tween.to('.leafL', {
    duration: 2,
    y: 10,
    rotation: 30,
    ease: "power1.out",
    width: 150,
    stagger: 0.3
}, 0)

.to('.leafR', {
    duration: 2,
    y: 10,
    rotation: 150,
    ease: "power1.out",
    width: 150,
    stagger: 0.3
}, 0)



const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
        triggerElement: '.plants-home',
        duration: '100%',
        triggerHook: 0
    })
    .setTween(tween)
    .addTo(controller)


let strategy = brand = ux = web = marketing = false

function showText(e) {
    const text = document.querySelector(`#${e}-text`);
    const chevron = document.querySelector(`#${e}-chevron`);


    if (text.style.maxHeight != '800px' || text.style.maxHeight === null) {
        chevron.style.rotate = '180deg'
        text.style.maxHeight = '800px';
        text.style.opacity = 1;
    } else {
        chevron.style.rotate = '0deg'

        text.style.maxHeight = '0';
        text.style.opacity = 0;

    }
}


new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: 0.9 // show, when scrolled 10% into view

    })
    .setClassToggle("#about", "visible") // add class to reveal
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: "#work",
        triggerHook: 0.9 // show, when scrolled 10% into view

    })
    .setClassToggle("#work", "visible") // add class to reveal
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: "#meetteam",
        triggerHook: 0.9 // show, when scrolled 10% into view

    })
    .setClassToggle("#meetteam", "visible") // add class to reveal
    .addTo(controller);