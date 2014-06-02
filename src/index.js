/**
 * @file
 * main JS file for awesome theme
 *
 */

'use strict';

var $ = require('jquery'); // just refers to window.jQuery for this.
require('bootstrap');
var expand = require('./expand.js');

$(function(){
  expand($); //Call the small module
});
