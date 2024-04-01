
function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init ()

gsap.from(".nav ",{
    y:-50,
    duration: 1
})
gsap.from(".hero h1",{
    x:-700,
    duration: 1.5
})
gsap.from(".hero h2",{
    x:700,
    duration: 1.5
})



var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".about",
        scroller:".main",
        start:"top 65%",
        end:"top 20%",
        scrub:2
    }
})

tl.from(".about h1",{
    x:-100
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        start:"top 85%",
        end:"top 70%",
        scrub:2
    }
})

tl2.from(".photo1 h1, h3",{
    x:-520
},"a")
tl2.from(".photo1 h2",{
    x:520
},"a")

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".last",
        scroller:".main",
        start:"top 85%",
        end:"top 70%",
        scrub:2
    }
})

tl3.from(".last h1",{
    x:-520
},"b")
tl3.from(".last h2",{
    x:520
},"b")
