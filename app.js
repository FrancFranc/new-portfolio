'use strict'

var labsArray = []

function Lab(rawDataObj) {
  this.labImage = rawDataObj.labImage;
  this.title = rawDataObj.title;
  this.year = rawDataObj.year;
  this.description = rawDataObj.description;
  this.labURL = rawDataObj.labURL;
}


$( "#cross" ).hide();
$( "#menu" ).hide();

$( "#hamburger" ).on("click", function() {
  $( "#menu" ).slideToggle( "slow", function() {
    $( "#hamburger" ).hide();
    $( "#cross" ).show();
  });
});

$( "#cross" ).on("click", function() {
  $( "#menu" ).slideToggle( "slow", function() {
    $( "#cross" ).hide();
    $( "#hamburger" ).show();
  });
});
