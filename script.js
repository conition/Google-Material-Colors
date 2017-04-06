var currentState = "none";
var textOpen = "";
var firstBack = true;
var colorValues = ["-50", "-100", "-200" , "-300", "-400" , "-500", "-600" , "-700", "-800" , "-900", "info", "info", "-a-100" , "-a-200", "-a-400" , "-a-700"];
var allColors = ["red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange"];

$('.button-collapse').sideNav();

var ch = $('.c-container').height();
$('.c-container').css({'width' :ch+'px'});
var cw = $('.color-box').width();
$('.cw').css({'height' :cw+'px'});
$('.close').css( 'left', (($(window).width() - ch) / 2) );
$('.close').hide();


jQuery.fn.originalColors = function(color) {
  currentState = "none";

  $( '.color-box ').each(function( index ) {
    if (index == 10) {
      $(this).removeClass();
      $(this).addClass("color-box 11 light-green-500");
    }
    else if (index == 11) {
      $(this).removeClass();
      $(this).addClass("color-box 12 lime-500");
    }
    else {
      $( this ).toggleClass( allColors[index] + '-500 ' + color + colorValues[index]);
      $( this ).css('color', 'transparent');
    }
  });

  $( '.close' ).hide( "fast" );
  $( '.6' ).removeClass("bordered");

  // Show information about the menu button if this is the first time.
  if (firstBack) {
    setTimeout(function() {
      $( '.tap-target').tapTarget('open');
    }, 2000);
    firstBack = false;
  }
};

jQuery.fn.changeColor = function(color) {
  if(currentState == "none"){
    currentState = color;
    $( '.color-box' ).each(function(index) {
      if(index == 10) {
        $(this).removeClass();
        $(this).addClass("color-box 11 " + $.fn.getAccent(color) + "-a-200");
      }
      else if(index == 11) {
        $(this).removeClass();
        $(this).addClass("color-box 12 " + $.fn.getAccent(color) + "-a-400");
      }
      else {
        $( this ).toggleClass( allColors[index] + '-500 ' + color + colorValues[index]);
        $( this ).css('color', '#fff');
      }
    });
    $( '.close' ).show( "fast" );
    $( '.6' ).addClass( "bordered" );
  }
};

jQuery.fn.getAccent = function(color){
  switch (color) {
    case "deep-purple":
      color = "deeppurple";
      break;
    case "light-blue":
      color = "lightblue";
      break;
    case "light-green":
      color = "lightgreen";
      break;
    case "deep-orange":
      color = "deeporange";
      break;

  }
  accents = {
    "red" : "teal",
    "pink" : "green",
    "purple" : "light-green",
    "deeppurple" : "lime",
    "indigo" : "yellow",
    "blue" : "amber",
    "lightblue" : "orange",
    "cyan" : "deep-orange",
    "teal" : "red",
    "green" : "pink",
    "lightgreen" : "purple",
    "lime" : "deep-purple",
    "yellow" : "indigo",
    "amber" : "blue",
    "orange" : "light-blue",
    "deeporange" : "cyan"
  };
  var code = "accents." + color;
  console.log(code);
  return eval(code);
};

$(".color-box").click(function() {
  new Clipboard(".color-box");
  if (currentState != "none") {
    var tc = tinycolor($(this).css("background-color"));
    // Find copied color and convert it to hex
    var copiedColor = null;
    if ($('#hex').is(':checked')) {
      copiedColor = tc.toString("hex6");
    }
    else if ($('#rgb').is(':checked')) {
      copiedColor = tc.toString("rgb");
    }
    else if ($('#hsl').is(':checked')) {
      copiedColor = tc.toString("hsl");
    }
    else if ($('#hsv').is(':checked')) {
      copiedColor = tc.toString("hsv");
    }

    // Copy it to clipboard
    $(this).attr("data-clipboard-text", copiedColor);

    // Log to console and show toast
    var message = "Copied " + copiedColor + " to clipboard";
    console.log(message);
    Materialize.toast(message, 3000);
    $('.toast').css( 'background-color', tc.toString("hex") );

    // Change color of text if background is too bright
    if (tc.getBrightness() > 150) {
      $('.toast').css( 'color', '#000');
    }
  }
});

$(".close").click(function() {
  $.fn.originalColors(currentState);
});

$('.color-box').each(function(index) {
  $(this).click(function(){
    $(this).changeColor(allColors[index]);
  });
});
