$(document).ready(function() {
        
      if(window.innerWidth > 800){
       var controller = new ScrollMagic.Controller();
        
//          var galleryTopLine = CSSRulePlugin.getRule(".galleryTopLine:after");
        
//         var tween1 = new TimelineMax()
//             .add(TweenMax.from(galleryTopLine, 3, {cssRule:{height: 0}, ease: Circ.easeOut}))
    
//         var scene1 = new ScrollMagic.Scene({
//             triggerElement: ".galleryBannerContainer",
//             duration: 1500,
//             triggerHook: 2.5,
//             tweenChanges: true,
// //            reverse: false
//         })
//         .setTween(tween1)
//         .addIndicators()  
//         .addTo(controller);
          
//           var tween1 = new TimelineMax()
//             .from('.galleryTopLine', .8, {y: -100, height:0, autoAlpha: 0, ease:  Circ.easeOut})
           
    
//         var scene1 = new ScrollMagic.Scene({
//             triggerElement: ".galleryBannerContainer",
//             triggerHook: .8,
//             reverse: false
//         })
//         .setTween(tween1)
// //        .addIndicators()  
//         .addTo(controller);  
          
          
//           var tween1 = new TimelineMax()
//             .add(TweenMax.from('.galleryTopLine', 1, {height: 0, ease: Circ.easeOut}))
    
//         var scene1 = new ScrollMagic.Scene({
//             triggerElement: ".galleryBannerContainer",
//             duration: 1500,
//             tweenChanges: true,
//         })
//         .setTween(tween1)
// //        .addIndicators()  
//         .addTo(controller);
          
          var tween2 = new TimelineMax()
             .staggerFrom('.galleryFilterContainer a', 1.5, {x: 100, autoAlpha: 0, ease: Circ.easeOut}, .30)
           
    
        var scene2 = new ScrollMagic.Scene({
            triggerElement: ".galleryFilterContainer",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween2)
//        .addIndicators()  
        .addTo(controller);  
          
        
          var tween3 = new TimelineMax()
             .from('.watchUsContainer .galleryContentBox', .8, {x: 100, autoAlpha: 0, ease:  Circ.easeOut})            
            .staggerFrom('.watchUsContainer .galleryBox', 1.5, {x: -100, autoAlpha: 0, ease: Circ.easeOut}, .20)
    
        var scene3 = new ScrollMagic.Scene({
            triggerElement: ".watchUsContainer",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween3)
//        .addIndicators()  
        .addTo(controller);           
        
          var tween4 = new TimelineMax()
           .from('.followUsContainer .galleryContentBox', .5, {x: -100, autoAlpha: 0, ease:  Circ.easeOut})            
             .staggerFrom('.followUsContainer .galleryBox', .8, {x: -100, autoAlpha: 0, ease: Power4.easeOut}, .20)
   
        var scene4 = new ScrollMagic.Scene({
            triggerElement: ".followUsContainer",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween4)
//        .addIndicators()  
        .addTo(controller);   
         
          
   }
    
    
});