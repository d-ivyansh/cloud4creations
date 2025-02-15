var tl = gsap.timeline()

tl.from(".navbar",{
    y:-200,
    opacity:0,
    duration:1,
})

tl.from(".mainDivHeading",{
    rotateX: 90,
    duration:0.7
})

gsap.from(".mainDivHeadingDescription",{
    x:-1000,
    delay:1.4,
    duration:0.5
})

gsap.from(".mainMission",{
    rotateX: 90,
    duration:1,
    scrollTrigger:{
        trigger : ".mainMission",
        scroller:"body",
        start: "top 80%",
    }
})

gsap.from(".missionAndVisionStatement .missionBox",{
    x:1000,
    duration:1,
        stagger:0.8,
    scrollTrigger:{
        trigger : ".mainMission",
        scroller:"body",
        start: "top 70%",
    }
})

var a =0;
var b = 0; // Define b globally
var c = 0; // Define c globally

function time() {
    setInterval(function() {
        a = Math.min(100, a + Math.floor(Math.random() * 20)); // Use Math.min to ensure a doesn't exceed 100
        b = Math.min(5, b + Math.floor(Math.random() * 2)); // Update b
        c = Math.min(5, c + Math.floor(Math.random() * 2)); // Update c
        
        document.querySelector(".clients .percent").innerHTML = a + "%";
        document.querySelector(".printing .printingValue").innerHTML = "+" + b;
        document.querySelector(".reviews .reviewsValue").innerHTML = c + ".0";
    }, 150);
}

// time(); // Call time function immediately

// Set up GSAP animation
tl.to(".clients .percent, .printing .printingValue, .reviews .reviewsValue", {
    delay: 0.5,
    duration: 1,
});

// Set up ScrollTrigger
gsap.to(".clients .percent, .printing .printingValue, .reviews .reviewsValue", {
    scrollTrigger: {
        trigger: ".clients",
        scroller: "body",
        scrub: true,
        start: "top 80%",
        end: "bottom 20%",
        // markers: true,
        onToggle: function(trigger) {
            if (trigger.isActive) {
                time();
            }
        }
    }
});


gsap.from(".printingServices .printingServicesInsideDiv",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger : ".printingServices",
        scroller:"body",
        start: "top 70%",
    }
})

gsap.from(".discussProject .discussProjectInsideDiv",{
    x:-1000,
      duration:1,
      stagger:0.5,
      scrollTrigger:{
          trigger : ".discussProject .discussProjectInsideDiv",
          scroller:"body",
          start: "top 80%",
      }
  })

  gsap.from(".outerServicesDiv .innerServiceDiv" , {
    opacity:0,
    delay:0.2,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger : ".outerServicesDiv .innerServiceDiv",
        scroller:"body",
        start: "top 80%",
    }
  })
