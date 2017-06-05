'use strict'

var labsArray = []

function Lab(rawDataObj) {
  this.labImage = rawDataObj.labImage;
  this.title = rawDataObj.title;
  this.year = rawDataObj.year;
  this.description = rawDataObj.description;
  this.labURL = rawDataObj.labURL;
}
