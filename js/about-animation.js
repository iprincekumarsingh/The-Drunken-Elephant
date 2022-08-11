$(document).ready(function() {
        
      if(window.innerWidth > 800){
       var controller = new ScrollMagic.Controller();
    
       var tween1 = new TimelineMax()
            .from('.whatIsDmContainer .titleNameLine', 1.5, {y: -100, height:0, autoAlpha: 0, ease:  Bounce.easeOut})
            .from('.whatIsDmContainer .titleName', 1.5, {y: -100, autoAlpha: 0, rotation:45, transformOrigin:"left 50%", ease:  Elastic.easeOut.config(1, 0.3)},"-=1.5")
            .from('.whatIsDmContent', 1.0, {y: 300, autoAlpha: 0, ease:  Power4.easeOut})
    
        var scene1 = new ScrollMagic.Scene({
            triggerElement: ".whatIsDmContainer",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween1)
//        .addIndicators()  
        .addTo(controller);           
        
          var tween2 = new TimelineMax()
           .from('.aboutProductsTitleBox .titleNameLine', 1.5, {y: -100, height:0, autoAlpha: 0, ease:  Bounce.easeOut})
           .from('.aboutProductsTitleBox .titleName', 1.5, {y: -100, autoAlpha: 0, rotation:45, transformOrigin:"left 50%", ease:  Elastic.easeOut.config(1, 0.3)},"-=1.5")
           .staggerFrom('.aboutProductsContent', 1.0, {y: 300, autoAlpha: 0, ease:  Circ.easeOut}, .15)
           .staggerFrom('.aboutProductsLeft img', 1, {x: -350, autoAlpha: 0, ease:  Circ.easeOut}, .15,"-=1.5")
           .staggerFrom('.aboutProductsRight img', 1, {x: 350, autoAlpha: 0, ease:  Circ.easeOut}, .15,"-=1.5")
    
        var scene2 = new ScrollMagic.Scene({
            triggerElement: ".aboutProductsContainer",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween2)
//        .addIndicators()  
        .addTo(controller);   
          
        var tween3 = new TimelineMax()
            .from('.commandosContainerTitleBox .titleNameLine', 1.5, {y: -100, height: 0, autoAlpha: 0, ease: Bounce.easeOut})
            .from('.commandosContainerTitleBox .titleName', 1.5, {y: 0, autoAlpha: 0, rotation:45, transformOrigin:"left 50%", ease:  Elastic.easeOut.config(1, 0.3)},"-=1.5")
           .from('.commondosBox:first-of-type .commondosImgBox', .8, {x: -100, rotation:180, autoAlpha: 0, ease:  Circ.easeOut})  
           .from('.commondosBox:first-of-type  .commondosName', .5, {y: -100, autoAlpha: 0, ease:  Circ.easeOut}, "-=.5")  
           .from('.commondosBox:first-of-type  .commondoContent', .5, {x: 100, autoAlpha: 0, ease:  Circ.easeOut}, "-=.5") 
           .from('.commondosBox:nth-of-type(2) .commondosImgBox', .8, {x: -100, rotation:180, autoAlpha: 0, ease:  Circ.easeOut})  
           .from('.commondosBox:nth-of-type(2)  .commondosName', .5, {y: -100, autoAlpha: 0, ease:  Circ.easeOut}, "-=.5")  
           .from('.commondosBox:nth-of-type(2)  .commondoContent', .5, {x: 100, autoAlpha: 0, ease:  Circ.easeOut}, "-=.5") 
           .from('.commondosBox:nth-of-type(3) .commondosImgBox', .8, {x: -100, rotation:180, autoAlpha: 0, ease:  Circ.easeOut})  
           .from('.commondosBox:nth-of-type(3)  .commondosName', .5, {y: -100, autoAlpha: 0, ease:  Circ.easeOut}, "-=.5")  
           .from('.commondosBox:nth-of-type(3)  .commondoContent', .5, {x: 100, autoAlpha: 0, ease:  Circ.easeOut}, "-=.5") 
           .from('.commondosBox:nth-of-type(4) .commondosImgBox', .8, {x: -100, rotation:180, autoAlpha: 0, ease:  Circ.easeOut})  
           .from('.commondosBox:nth-of-type(4)  .commondosName', .5, {y: -100, autoAlpha: 0, ease:  Circ.easeOut}, "-=.5")  
           .from('.commondosBox:nth-of-type(4)  .commondoContent', .5, {x: 100, autoAlpha: 0, ease:  Circ.easeOut}, "-=.5") 
           .from('.commondosBox:nth-of-type(5) .commondosImgBox', .8, {x: -100, rotation:180, autoAlpha: 0, ease:  Circ.easeOut})  
           .from('.commondosBox:nth-of-type(5)  .commondosName', .5, {y: -100, autoAlpha: 0, ease:  Circ.easeOut}, "-=.5")  
           .from('.commondosBox:nth-of-type(5)  .commondoContent', .5, {x: 100, autoAlpha: 0, ease:  Circ.easeOut}, "-=.5") 
        
           //.from('.commondoContent', 1.0, {x: 100, autoAlpha: 0, ease:  Circ.easeOut})
    
        var scene3 = new ScrollMagic.Scene({
            triggerElement: ".commandosContainer",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween3)
//        .addIndicators()  
        .addTo(controller);           
        
          
   }
    
    
});