$.fn.clicktoggle = function(a, b) {
    return this.each(function() {
        var clicked = false;
        $(this).click(function() {
            if (clicked) {
                clicked = false;
                return b.apply(this, arguments);
            }
            clicked = true;
            return a.apply(this, arguments);
        });
    });
};


$ ( function () {


$('#main').append("<img src= 'cell.jpg'  alt= 'Click to grow'  id= 'myCell'/>");

$('#button').clicktoggle( function() {
    $("#myCell").animate({height: '600px'},4000,'linear', function(){$('#brick').show('fast');});

}, function() {
  $('#message').show('fast');
  $('#myCell').attr('src','cell-8.png');
  $('#mase').show(3000);


});

})