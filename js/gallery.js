/*********** Image link *************/ 
var $links = $('[id^=galleryLink]'),
    $content = $('[id^=galleryWindow]');

$links.click(function(){
    $content.hide().eq( $links.index(this) ).show();        
});



/*************** Gallery images ************/

$( '#outlet' ).click( function( e ) {
	e.preventDefault();
	$.swipebox( [
		{ href:'img/gallery/outlet/image1.jpg' }, 
		{ href:'img/gallery/outlet/image2.jpg' }, 
		{ href:'img/gallery/outlet/image3.jpg' }, 
		{ href:'img/gallery/outlet/image4.jpg' }, 
		{ href:'img/gallery/outlet/image5.jpg' },
		{ href:'img/gallery/outlet/image6.JPG' },
		{ href:'img/gallery/outlet/image7.JPG' },
		{ href:'img/gallery/outlet/image8.JPG' },
		{ href:'img/gallery/outlet/image9.JPG' },
		{ href:'img/gallery/outlet/image10.jpg' },
		{ href:'img/gallery/outlet/image11.jpg' }
	] );
} );

$( '#office' ).click( function( e ) {
	e.preventDefault();
	$.swipebox( [
		{ href:'img/gallery/office/image_1.JPG' }, 
		{ href:'img/gallery/office/image_2.JPG' }, 
		{ href:'img/gallery/office/image_3.JPG' }, 
		{ href:'img/gallery/office/image_4.jpg' },
		{ href:'img/gallery/office/image_5.JPG' },
		{ href:'img/gallery/office/image_6.JPG' },
		{ href:'img/gallery/office/image_7.JPG' },
		{ href:'img/gallery/office/image_8.JPG' },
		{ href:'img/gallery/office/image_9.JPG' }
	] );
} );

$( '#kiosk' ).click( function( e ) {
	e.preventDefault();
	$.swipebox( [
		{ href:'img/gallery/kiosk/kiosk1.jpg' }, 
		{ href:'img/gallery/kiosk/kiosk2.jpg' }, 
		{ href:'img/gallery/kiosk/kiosk3.jpg' }, 
		{ href:'img/gallery/kiosk/kiosk4.jpg' },
		{ href:'img/gallery/kiosk/kiosk5.jpg' },
		{ href:'img/gallery/kiosk/kiosk6.jpg' },
		{ href:'img/gallery/kiosk/kiosk7.jpg' },
		{ href:'img/gallery/kiosk/kiosk8.jpg' }
	] );
} );


$( '#trending' ).click( function( e ) {
	e.preventDefault();
	$.swipebox( [
		{ href:'img/gallery/trending/trending1.jpg' }, 
		{ href:'img/gallery/trending/trending2.jpg' }, 
		{ href:'img/gallery/trending/trending3.jpeg' }, 
		{ href:'img/gallery/trending/trending4.jpeg' },
		{ href:'img/gallery/trending/trending5.jpeg' },
		{ href:'img/gallery/trending/trending6.jpeg' },
		{ href:'img/gallery/trending/trending7.jpg' },
		{ href:'img/gallery/trending/trending8.jpg' },
		{ href:'img/gallery/trending/trending9.jpg' },
		{ href:'img/gallery/trending/trending10.jpg' },
		{ href:'img/gallery/trending/trending11.gif' },
		{ href:'img/gallery/trending/trending12.jpg' }
	] );
} );



