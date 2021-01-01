$(function () {


setInterval(pepperImages, 7000);

setInterval(ironImages, 7000);

function pepperImages(){
      var $active = $('#pepper .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#pepper img:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    };


function ironImages(){
      var $blanket = $('#iron .blanket');
      var $next = ($blanket.next().length > 0) ? $blanket.next() : $('#iron img:first');
      $next.css('z-index',2);//move the next image up the pile
      $blanket.fadeOut(1500,function(){//fade out the top image
	  $blanket.css('z-index',1).show().removeClass('blanket');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('blanket');//make the next image the top one
      });
    };






$("#title").draggable();


})