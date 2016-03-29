var ctrl = new ScrollMagic.Controller();

var height = ctrl.info('size') / 2;

// navigation stuff
$('.nav-link').click(function(e) {
   var href = $(this).attr('href');
   ctrl.scrollTo(href);
   return false;
});

new TweenMax.from($("#s0 > .panel-number"), 2, {x: "-100%"});
new TweenMax.from($("#s0 > .panel-title"), 2, {x: "100%"});

var wipeAnimation = new TimelineMax()
   .fromTo("section.panel#s1", 2, {scale: 3, alpha: 0}, {scale: 1, alpha: 1, ease: Linear.easeNone})
   .fromTo("section.panel#s2",    1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
   .fromTo("section.panel#s3", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
   .fromTo("section.panel#s4", 1, {alpha: 0}, {alpha: 1, ease: Linear.easeNone})
   .fromTo("section.panel#s5",    1, {rotation: -90, transformOrigin: "left bottom"}, {rotation: 0, ease: Expo.easeOut})
   .fromTo("section.panel#s6", 1, {scale: 0}, {scale: 1, rotation: 360, ease: Linear.easeNone})
   .fromTo("section.panel#s7", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
   .fromTo("section.panel#s8",    1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
   .fromTo("section.panel#s9", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
   .fromTo("section.panel#s10", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
   .fromTo("section.panel#s11",    1, {y: "100%"}, {y: "0%", ease: SlowMo.ease.config(0.7, 0.7, false)})

new ScrollMagic.Scene({
   triggerElement: "#pinContainer",
   triggerHook: "onLeave",
   duration: "400%"
})
.setPin("#pinContainer")
.setTween(wipeAnimation)
//.addIndicators() // add indicators (requires plugin)
.addTo(ctrl);