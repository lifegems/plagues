var ctrl = new ScrollMagic.Controller();

var height = ctrl.info('size') / 2;

// navigation stuff
$('.nav-link').click(function(e) {
   var href = $(this).attr('href');
   ctrl.scrollTo(href);
   return false;
});

var wipeAnimation = new TimelineMax()
         .fromTo("section.panel#s1", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
         .fromTo("section.panel#s2",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
         .fromTo("section.panel#s3", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
         .fromTo("section.panel#s4", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
         .fromTo("section.panel#s5",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
         .fromTo("section.panel#s6", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
         .fromTo("section.panel#s7", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
         .fromTo("section.panel#s8",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
         .fromTo("section.panel#s9", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
         .fromTo("section.panel#s10", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
         .fromTo("section.panel#s11",    1, {y:  "100%"}, {y: "0%", ease: Linear.easeNone});  // in from right

      // create scene to pin and link animation
new ScrollMagic.Scene({
   triggerElement: "#pinContainer",
   triggerHook: "onLeave",
   duration: "400%"
})
   .setPin("#pinContainer")
   .setTween(wipeAnimation)
   //.addIndicators() // add indicators (requires plugin)
   .addTo(ctrl);