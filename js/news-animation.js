$(document).ready(function() {
        
//     if(window.innerWidth > 800){
//       var controller = new ScrollMagic.Controller();
//    
//       var tween1 = new TimelineMax()
//            .staggerFrom('.news', .8, {x: -100, autoAlpha: 0, ease: Power4.easeOut}, .40)
////            .from('.blogBoxContentContainer', .5, {x: 100, autoAlpha: 0, ease:  Circ.easeOut})
//    
//        var scene1 = new ScrollMagic.Scene({
//            triggerElement: ".newsPageContianer",
//            triggerHook: .8,
//            reverse: false
//        })
//        .setTween(tween1)
////        .addIndicators()  
//        .addTo(controller);  
//		   
//         
//   }
       
    
$('#newsList').easyPaginate({
    paginateElement: 'div.news.flex',
    elementsPerPage: 10,
    effect: 'climb'
});
    
});

