$(document).ready(function() {
        
     if(window.innerWidth > 800){
       var controller = new ScrollMagic.Controller();
    
       var tween1 = new TimelineMax()
            .from('#name', .8, {x: -100, autoAlpha: 0, ease:  Circ.easeOut})            
            .from('#email', .8, {x: 100, autoAlpha: 0, ease:  Circ.easeOut})            
            .from('#contact', .8, {x: -100, autoAlpha: 0, ease:  Circ.easeOut})            
            .from('#state_option', .8, {x: 100, autoAlpha: 0, ease:  Circ.easeOut})            
            .from('#city', .8, {x: -100, autoAlpha: 0, ease:  Circ.easeOut})                 
            .from('#message', .8, {y: 100, autoAlpha: 0, ease:  Circ.easeOut})
            .from('.submit', .5, {x: -100, autoAlpha: 0, ease:  Circ.easeOut})            
            .from('.git_mail_to', .5, {x: 100, autoAlpha: 0, ease:  Circ.easeOut},"-=.5")            
    
        var scene1 = new ScrollMagic.Scene({
            triggerElement: ".fran_contact_bg",
            triggerHook: .8,
            reverse: false
        })
        .setTween(tween1)
//        .addIndicators()  
        .addTo(controller);   
         
   }
    
    
});