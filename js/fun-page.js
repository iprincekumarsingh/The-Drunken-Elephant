$(document).ready(function(){
    $(".textHover").click(function () {
            $(".funPageMessage").fadeToggle();
        });
    
    
 
});


    
    function generalFunPageScript(){
        
             $(".fullPage").css("visibility","hidden");
             $(".funPageImage").css("visibility", "visible");   
             $(".funPageImage").css("opacity", ".2");         
             $(".funPageNextContent").css("visibility","visible");
             $(".funPageNextContent").css("transition",".5s");             
             $(".funPageMessage").fadeToggle();
             $(".funPageTitle").hide(); 

    }
    
    $('#urawsome').click(function () {
        
           
             generalFunPageScript();  
             $(".funPageImage").css("background-image", "url(../img/fun-page/you-are-awesome.jpg)");                                 
             var forTitle='send you are awesome to:';   
          
             var forMessage= 'youareawesome';
        
             $(".funPageNameSendTo").val(forTitle);
             $(".funPageNameSendTo").html(forTitle);
          
             console.log($(".funPageNameSendTo").val());
             $("#funPageMessage").val(forMessage); 
           

        });
    
       $('#hugs').click(function () {
           
             $(".funPageImage").css("background-image", "url(../img/fun-page/hugs.jpg)");
             var forTitle='send hugs to:';     
             var forMessage= 'hugs';
             $(".funPageNameSendTo").html(forTitle);
             $("#funPageMessage").val(forMessage);            
             generalFunPageScript();

        }); 
    
  
   
        $('#cheers').click(function () {
            
             $(".funPageImage").css("background-image", "url(../img/fun-page/cheers.jpg)");

             var forTitle='send cheers to:';     
            $(".funPageNameSendTo").html(forTitle);            
             var forMessage= 'cheers';
             $("#funPageMessage").val(forMessage);            
             generalFunPageScript();
        
        }); 
    

        $('#youass').click(function () {
            
             $(".funPageImage").css("background-image", "url(../img/fun-page/you-ass.jpg)");
            
             var forTitle='send you ass to:';            
             $(".funPageNameSendTo").html(forTitle);            
             
             var forMessage= 'youass';
             $("#funPageMessage").val(forMessage); 
             generalFunPageScript();

        }); 
    
    
        $('#wannahangout').click(function () {
        $(".funPageImage").css("background-image", "url(../img/fun-page/wanna-hang-out.jpg)");

            var forTitle='send wanna hangout to:';                 
            $(".funPageNameSendTo").html(forTitle);
            
            var forMessage= 'wannahangout';
            $("#funPageMessage").val(forMessage); 
            generalFunPageScript();

        }); 
    
    
        $('#youmonkey').click(function () {
         $(".funPageImage").css("background-image", "url(../img/fun-page/you-monkey.jpg)");
            
            var forTitle='send you monkey to:';               
            $(".funPageNameSendTo").html(forTitle);
            
            var forMessage= 'youmonkey';
            $("#funPageMessage").val(forMessage);             
            generalFunPageScript(); 
        }); 


        $('input').keyup(function () {
            console.log('KeyUp Funtion');
            if ($.trim(this.value).length > 0) $('.submitGetUrl').fadeIn()
            else $('.submitGetUrl').hide()
        });
    

$('.submitGetUrl').on('click',function(event){
    
    var $funPageName = $(".funPageNextContent").find('#fname').val();	
    
      $funPageName = $funPageName.replace(/\s/g,"%20");
      
     var origin   = window.location.origin;
//        $(".funPageNextContent").css("display","none");
   $(".funPageNextContent").css("display","none");
     $(".funPageUrlContent").css("display","block");
    
    if($("#funPageMessage").val()=="youareawesome"){

          $(".funPageNameSendTo").css("display","none");
        var url=origin+ "/funpageresult.php?name=" +$funPageName+ "&secretCode=" +"y";
        var fb="https://www.facebook.com/sharer/sharer.php?u="+url;
        var twitter="https://twitter.com/home?status="+url;
        $('.funPageNextContent').append("<p></p>").addClass("newp").append(url); 
        $('.fb').attr('href', fb);
        $('.twitter').attr('href', twitter);
        $('.something p').append(url);      
        
        $(".funpagesocialLinks").css("visibility","visible");
        
    }
    
    if($("#funPageMessage").val()=="hugs"){
        var url=origin +"/funpageresult.php?name=" +$funPageName+ "&secretCode=" +"h";
        $('.funPageNextContent').append("<p></p>").addClass("newp").append(url);    
        var fb="https://www.facebook.com/sharer/sharer.php?u="+url;
        var twitter="https://twitter.com/home?status="+url;
        $('.twitter').attr('href', twitter);
        $('.funPageNextContent').append("<p></p>").addClass("newp").append(url); 
        $('.fb').attr('href', fb);
        $('.something p').append(url);      
        
        $(".funpagesocialLinks").css("visibility","visible");
        
    }
    
    if($("#funPageMessage").val()=="cheers"){
        var url= origin + "/funpageresult.php?name=" +$funPageName+ "&secretCode=" +"c";
        var fb="https://www.facebook.com/sharer/sharer.php?u="+url;
        $('.funPageNextContent').append("<p></p>").addClass("newp").append(url); 
        var twitter="https://twitter.com/home?status="+url;
        $('.twitter').attr('href', twitter);        
        $('.fb').attr('href', fb);
        $('.something p').append(url);      
        
        $(".funpagesocialLinks").css("visibility","visible");
    }    
    
    if($("#funPageMessage").val()=="youass"){
        var url= origin + "/funpageresult.php?name=" +$funPageName+ "&secretCode=" +"o";
        var fb="https://www.facebook.com/sharer/sharer.php?u="+url;
        var twitter="https://twitter.com/home?status="+url;
        $('.twitter').attr('href', twitter);

        $('.funPageNextContent').append("<p></p>").addClass("newp").append(url); 
        $('.fb').attr('href', fb);
        $('.something p').append(url);      
        
        $(".funpagesocialLinks").css("visibility","visible");   
    }    

    if($("#funPageMessage").val()=="wannahangout"){
        var url= origin + "/funpageresult.php?name=" +$funPageName+ "&secretCode=" +"w";
        var fb="https://www.facebook.com/sharer/sharer.php?u="+url;
        $('.funPageNextContent').append("<p></p>").addClass("newp").append(url); 
        var twitter="https://twitter.com/home?status="+url;
        $('.twitter').attr('href', twitter);        
        $('.fb').attr('href', fb);
        $('.something p').append(url);      
        
        $(".funpagesocialLinks").css("visibility","visible");
        
    }    
    
    
    if($("#funPageMessage").val()=="youmonkey"){
        var url= origin + "/funpageresult.php?name=" +$funPageName+ "&secretCode=" +"k";
        var fb="https://www.facebook.com/sharer/sharer.php?u="+url;
        $('.funPageNextContent').append("<p></p>").addClass("newp").append(url); 
        var twitter="https://twitter.com/home?status="+url;
        $('.twitter').attr('href', twitter);
        
        $('.fb').attr('href', fb);
        $('.something p').append(url);      
        
        $(".funpagesocialLinks").css("visibility","visible");
        
    }    
            
        
       $(".funPageTitle").hide();
   
        $(".funPageUrlContent").css("visibility","visible");

    });
    

// funpage results jquery

			var queryString = new Array();
		
			$(function () {
				if (queryString.length == 0) {
					if (window.location.search.split('?').length > 1) {
						var params = window.location.search.split('?')[1].split('&');
						for (var i = 0; i < params.length; i++) {
							var key = params[i].split('=')[0];
							var value = decodeURIComponent(params[i].split('=')[1]);
							queryString[key] = value;
							
							console.log(queryString[key]);
						}
					}
				}
				if (queryString["name"] != null && queryString["secretCode"] != null) {
				
					var data=  queryString["name"];
					$("#lblData").html(data);
				
				}
                
                if(queryString["secretCode"]=="y"){
                    
                        
                     $(".funPageNameurawesome").css("background-image", "url(img/fun-page/messages/you-are-awesome.png)"); 
                     $(".funPageNameurawesome").css("height", "25vh"); 
                     $(".funPageResultImage").css("background-image", "url(img/fun-page/gif/you-are-awesome.gif)");
                    
                   }
                
              if(queryString["secretCode"]=="h"){
                   console.log("you r hugging");
                     $(".funpagehugs").css("background-image", "url(../img/fun-page/messages/hugs.png)");   
                     $(".funpagehugs").css("height", "25vh"); 
                     $(".funPageResultImage").css("background-image", "url(../img/fun-page/gif/hugs.gif)");
                   }           
                
              if(queryString["secretCode"]=="c"){
                   console.log("you r cheers");
                    $(".funpagecheers").css("background-image", "url(../img/fun-page/messages/cheers.png)");  
                    $(".funpagecheers").css("height", "25vh"); 
                     $(".funPageResultImage").css("background-image", "url(../img/fun-page/gif/cheers.gif)");
                   }                
                
              if(queryString["secretCode"]=="o"){
                   console.log("you r ass");
                     $(".funpageyouass").css("background-image", "url(../img/fun-page/messages/you-ass.png)");
                     $(".funpageyouass").css("height", "25vh"); 
                     $(".funPageResultImage").css("background-image", "url(../img/fun-page/gif/you-ass.gif)");
                   }
                
              if(queryString["secretCode"]=="w"){
                   console.log("you r hangout");
                     $(".funpagewannahangout").css("background-image", "url(../img/fun-page/messages/wanna-hang-out.png)");  
                     
                     $(".funpagewannahangout").css("height", "25vh"); 
                     $(".funPageResultImage").css("background-image", "url(../img/fun-page/gif/hang-Out.gif)");
                   }  

                
              if(queryString["secretCode"]=="k"){
                   console.log("you r fk u monkey");                  
                    $(".funpageyoumonkey").css("background-image", "url(../img/fun-page/messages/you-monkey.png)"); 
                    
                     $(".funpageyoumonkey").css("height", "25vh"); 
                    $(".funPageResultImage").css("background-image", "url(../img/fun-page/gif/you-monkey.gif)");
                   }                  
			});



  function copyClipboard() {
              var elm = document.getElementById("divClipboard");
              // for Internet Explorer


                var isiOSDevice = navigator.userAgent.match(/ipad|iphone/i);

                if (isiOSDevice) {

                    var editable = input.contentEditable;
                    var readOnly = input.readOnly;

                    input.contentEditable = true;
                    input.readOnly = false;

                    var range = document.createRange();
                    range.selectNodeContents(elm);

                    var selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);

                    input.setSelectionRange(0, 999999);
                    input.contentEditable = editable;
                    input.readOnly = readOnly;

                }
              if(document.body.createTextRange) {
                var range = document.body.createTextRange();
                range.moveToElementText(elm);
                range.select();
                document.execCommand("Copy");
//                alert("Copied div content to clipboard");
              }
              else if(window.getSelection) {
                // other browsers

                var selection = window.getSelection();
                var range = document.createRange();
                range.selectNodeContents(elm);
                selection.removeAllRanges();
                selection.addRange(range);
                document.execCommand("Copy");
//                alert("Copied div content to clipboard");
              }
            }        
        