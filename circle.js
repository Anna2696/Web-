$ ( function () {


setTimeout(showPage, 3000);


function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
};

setInterval(farsImages, 3000);

function farsImages(){
      var $active = $('#fars .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#fars img:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }

 
$("#tabs").tabs();
$("#tabs").resizable({ aspectratio: true });
$("li:even").draggable({ revert: true });
$( "#draggable1" ).draggable();
$("#dragon").draggable();

$("#droppable").droppable({
   accept: "#draggable1"
});

$( "#droppable" ).droppable({
  drop: function() {
    alert( "Correct!" );
   }
});
  $("#drag").draggable();
  $("#sand").draggable();

$("#stoppable").droppable({
   accept: "#drag"
});

$("#stoppable").droppable({
   drop: function () {
    alert("Correct")
}

});
  $("#bag").draggable();
  $("#lunch").draggable();

$("#globble").droppable({
  accept: "#bag"
});

$("#globble").droppable({
   drop: function () {
    alert("Correct")
}

});

$("#me").draggable();
$("#you").draggable();

$("#duel").droppable({
  accept: "#me"
});

$("#duel").droppable({
   drop: function () {
     alert("Correct!")

}


});
 
$("#mouse, #bin, #pencil, #wood, #table, #bottle,#soap,#bodywash,#drawer, #bench,#floor,#carpet").draggable();

$("#thermos").droppable({
  accept: "#mouse"
});

$("#thermos").droppable({
   drop: function () {
     alert("Correct!")
}
});

$("#eraser").droppable({
  accept: "#pencil"
});

$("#eraser").droppable({
   drop: function () {
     alert("Correct!")
}
});

$("#keyboard").droppable({
  accept: "#table"
});

$("#keyboard").droppable({
   drop: function () {
     alert("Correct!")
}
});

$("#plastic").droppable({
  accept: "#soap"
});

$("#plastic").droppable({
   drop: function () {
     alert("Correct!")
}
});

$("#icecream").droppable({
  accept: "#bench"
});

$("#icecream").droppable({
   drop: function () {
     alert("Correct!")
}
});

$("#chair").droppable({
  accept: "#carpet"
});

$("#chair").droppable({
   drop: function () {
     alert("Correct!")
}
});



  

$('#cess').click(function() {
 $("#fars").show("fast");
});
 
$("#wind").click(function() {
$("#computer").show(400);

});

$("#leaf").click(function() {
$("#clock").show(400);

});

$("#juice").click(function() {
$("#mustang").show(400);

});


})