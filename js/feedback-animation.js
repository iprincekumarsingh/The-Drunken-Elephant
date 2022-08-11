$(document).ready(function() {
        
     if(window.innerWidth > 800){
       var controller = new ScrollMagic.Controller();
    
       var tween1 = new TimelineMax()
            .from('.contactHeader', .5, {y: -100, autoAlpha: 0, ease:  Circ.easeOut})            
            .from('#name', .5, {x: -100, autoAlpha: 0, ease:  Circ.easeOut})            
            .from('#contact', .5, {x: 100, autoAlpha: 0, ease:  Circ.easeOut})            
            .from('#email', .5, {x: -100, autoAlpha: 0, ease:  Circ.easeOut}) 
            .from('.radioBtnContainer', .5, {x: 100, autoAlpha: 0, ease:  Circ.easeOut}) 
            .from('#subject', .5, {x: 100, autoAlpha: 0, ease:  Circ.easeOut})            
            .from('#message', .5, {y: 100, autoAlpha: 0, ease:  Circ.easeOut})
            .from('#Submit', .5, {x: -100, autoAlpha: 0, ease:  Circ.easeOut})            
            .from('.git_mail_to', .5, {x: 100, autoAlpha: 0, ease:  Circ.easeOut},"-=.5")            
    
        var scene1 = new ScrollMagic.Scene({
            triggerElement: ".contact_form_container",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween1)
//        .addIndicators()  
        .addTo(controller);  
         
         var tween2 = new TimelineMax()
            .from('.collaborate', .5, {x: 100, autoAlpha: 0, ease: Circ.easeOut})
            .from('.join', .5, {x: -100, autoAlpha: 0, ease: Circ.easeOut},"-=.5")
    
        var scene2 = new ScrollMagic.Scene({
            triggerElement: ".joinMonkeyContainer",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween2)
//        .addIndicators()  
        .addTo(controller);  
         
         var tween3 = new TimelineMax()
            .staggerFrom('.feedBack', .8, {x: -100, autoAlpha: 0, ease: Circ.easeOut}, .20)
    
        var scene3 = new ScrollMagic.Scene({
            triggerElement: ".git_zomato_swiggy",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween3)
//        .addIndicators()  
        .addTo(controller);   
         
   }
    
    
});