'use strict';

var labArray = []

function Lab(rawDataObj) {
  this.labImage = rawDataObj.labImage;
  this.title = rawDataObj.title;
  this.year = rawDataObj.year;
  this.description = rawDataObj.description;
  this.labURL = rawDataObj.labURL;
}

Lab.prototype.toHTML = function() {
  var template = Handlebars.compile($('#lab-content').html());
  return template(this);
}
//
// labData.forEach(function(labObject) {
//   labArray.push(new Lab(labObject));
// });
//
// labArray.forEach(function(labObject) {
//   $('#lab-individuals').append(labObject.toHTML());
// });


function handleShowLabs() {
  $.getJSON('scripts/rawData.json')
  .then(
    function(data) {
      return labArray.map(function(data) {
        return data.labImage;
      })


      // data.forEach(function(labObject) {
      //   labArray.push(new Lab(labObject));
      // });
      // data.forEach(function(labObject){
      //   $('#lab-individuals').append(labObject.toHtml());
      // });
    },

    function(err) {
      console.error(err);
    });
}

handleShowLabs();
