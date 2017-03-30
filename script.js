var currentState = "none";
var textOpen = "";

$('.button-collapse').sideNav();

var ch = $('.c-container').height();
$('.c-container').css({'width' :ch+'px'});
var cw = $('.color-group').width();
$('.cw').css({'height' :cw+'px'});

$('.close').css( 'left', (($(window).width() - ch) / 2) );
$('.close').hide();

jQuery.fn.originalColors = function(color) {
  // TODO change to forloop over an array (.each() [50, 100, 200, etc.])
  currentState = "none";
  $( '.close' ).hide( "fast" );
  $( '.color-group').css('color', 'transparent')
  $( '.1' ).toggleClass('red-500 ' + color + '-50');
  $( '.2' ).toggleClass('pink-500 ' + color + '-100');
  $( '.3' ).toggleClass('purple-500 ' + color + '-200');
  $( '.4' ).toggleClass('deep-purple-500 ' + color + '-300');
  $( '.5' ).toggleClass('indigo-500 ' + color + '-400');
  $( '.6' ).toggleClass('blue-500 ' + color + '-500');
  $( '.6' ).removeClass('bordered');
  $( '.7' ).toggleClass('light-blue-500 ' + color + '-600');
  $( '.8' ).toggleClass('cyan-500 ' + color + '-700');
  $( '.9' ).toggleClass('teal-500 ' + color + '-800');
  $( '.10' ).toggleClass('green-500 ' + color + '-900');

  $( '.11' ).toggleClass('light-green-500 info');
  $( '.12' ).toggleClass('lime-500 info');

  $( '.13' ).toggleClass('yellow-500 ' + color + '-a-100');
  $( '.14' ).toggleClass('amber-500 ' + color + '-a-200');
  $( '.15' ).toggleClass('orange-500 ' + color + '-a-400');
  $( '.16' ).toggleClass('deep-orange-500 ' + color + '-a-700');
};

jQuery.fn.changeColor = function(color) {
  if(currentState == "none"){
    currentState = color;
    $( '.close' ).show( "fast" );
    $( '.1' ).toggleClass('red-500 ' + color + '-50');
    $( '.2' ).toggleClass('pink-500 ' + color + '-100');
    $( '.3' ).toggleClass('purple-500 ' + color + '-200');
    $( '.4' ).toggleClass('deep-purple-500 ' + color + '-300');
    $( '.5' ).toggleClass('indigo-500 ' + color + '-400');
    $( '.6' ).toggleClass('blue-500 ' + color + '-500');
    $( '.6' ).addClass('bordered')
    $( '.7' ).toggleClass('light-blue-500 ' + color + '-600');
    $( '.8' ).toggleClass('cyan-500 ' + color + '-700');
    $( '.9' ).toggleClass('teal-500 ' + color + '-800');
    $( '.10' ).toggleClass('green-500 ' + color + '-900');

    $( '.11' ).toggleClass('light-green-500 info');
    $( '.12' ).toggleClass('lime-500 info');

    $( '.13' ).toggleClass('yellow-500 ' + color + '-a-100');
    $( '.14' ).toggleClass('amber-500 ' + color + '-a-200');
    $( '.15' ).toggleClass('orange-500 ' + color + '-a-400');
    $( '.16' ).toggleClass('deep-orange-500 ' + color + '-a-700');

    $( '.color-group').css('color', '#fff');
  }
};

//Converts rgb to hex http://wowmotty.blogspot.co.uk/2009/06/convert-jquery-rgb-output-to-hex-color.html
jQuery.fn.rgb2hex = function(orig){
 var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;
};

$(".color-group").click(function() {
  new Clipboard(".color-group");
  if (currentState != "none") {
    var tinycolorcolor = tinycolor($(this).css("background-color"));
    // Find copied color and convert it to hex
    if ($('#hex').is(':checked')) {
      var copiedColor = tinycolorcolor.toString("hex6");
    }
    else if ($('#rgb').is(':checked')) {
      var copiedColor = tinycolorcolor.toString("rgb");
    }
    else if ($('#hsl').is(':checked')) {
      var copiedColor = tinycolorcolor.toString("hsl");
    }
    else if ($('#hsv').is(':checked')) {
      var copiedColor = tinycolorcolor.toString("hsv");
    }
    else {

    }

    // Copy it to clipboard
    $(this).attr("data-clipboard-text", copiedColor);

    // Log to console and show toast
    var message = "Copied " + copiedColor + " to clipboard";
    console.log(message);
    Materialize.toast(message, 3000);
    $('.toast').css( 'background-color', tinycolorcolor.toString("hex") );
    // Change color of text if background is too bright
    if (tinycolorcolor.getBrightness() > 150) {
      $('.toast').css( 'color', '#000');
    }
  }

});

$(".close").click(function() {
  $(this).originalColors(currentState);
});

$(".1").click(function(){
  $(this).changeColor("red");
});

$(".2").click(function(){
  $(this).changeColor("pink");
});

$(".3").click(function() {
  $(this).changeColor("purple");
});

$(".4").click(function() {
  $(this).changeColor("deep-purple");
});

$(".5").click(function() {
  $(this).changeColor("indigo");
});

$(".6").click(function() {
  $(this).changeColor("blue");
});

$(".7").click(function() {
  $(this).changeColor("light-blue");
});

$(".8").click(function() {
  $(this).changeColor("cyan");
});

$(".9").click(function() {
  $(this).changeColor("teal");
});

$(".10").click(function() {
  $(this).changeColor("green");
});

$(".11").click(function() {
  $(this).changeColor("light-green");
});

$(".12").click(function() {
  $(this).changeColor("lime");
});

$(".13").click(function() {
  $(this).changeColor("yellow");
});

$(".14").click(function() {
  $(this).changeColor("amber");
});

$(".15").click(function() {
  $(this).changeColor("orange");
});

$(".16").click(function() {
  $(this).changeColor("deep-orange");
});
