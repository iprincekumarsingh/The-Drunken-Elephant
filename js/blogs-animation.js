$(document).ready(function() {
        
     if(window.innerWidth > 800){
       var controller = new ScrollMagic.Controller();
    
       var tween1 = new TimelineMax()
            .staggerFrom('.blogBox', .8, {x: -100, autoAlpha: 0, ease: Power4.easeOut}, .30)
            .from('.offerBannerContainer ', .5, {x: 100, autoAlpha: 0, ease:  Circ.easeOut})
    
        var scene1 = new ScrollMagic.Scene({
            triggerElement: ".blogListContainer",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween1)
//        .addIndicators()  
        .addTo(controller);   
		   
         
   }
    
    
});