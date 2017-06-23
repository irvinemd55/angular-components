<<<<<<< HEAD
import 'normalize.css';
import './app.styl';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

=======
// we don't need to use a variable
// or the from keyword when importing a css/styl file
// thanks the the styles loader it gets added as a
// <style> tag in the head by default but can be changed
import 'normalize.css';
import './app.styl';
// the angular libs are just common js
// and therefore we can assume they were
// exported using the default keyword in ES2015
// so we can import each module
// with any name we see fit.
// Note that the actual value are just strings except angular itself
// because that's how angular decided to export
// their auxillary modules
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
// because we exported a named variable
// without using default keyword
// we must import it with the brackets
>>>>>>> 4be970c6a405597e1c58ea7eb1760ca077d9fbe6
import {home} from './components/home/home';

angular.module('app', [
  uiRouter,
  ngAnimate,
<<<<<<< HEAD
=======
  // home is the module, the angular module
  // because that's what we exported in home.js
  // all angular modules have a name
  // property who's value is the name you set the
  // module to be
>>>>>>> 4be970c6a405597e1c58ea7eb1760ca077d9fbe6
  home.name
]);
