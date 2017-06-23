import './home.styl';
import angular from 'angular';
import _ from 'lodash';

<<<<<<< HEAD
=======
// placing an export in front of ar var is the same
// as exporting the var at the end of the file
// using export {varname}
>>>>>>> 4be970c6a405597e1c58ea7eb1760ca077d9fbe6
export const home = angular.module('home', [])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    template: `
      <section class="home">
        <div class="title">
          <h1>{{ title }}</h1>
        </div>

        <div class="items">
          <ul>
            <li ng-repeat="item in items">
              {{ item }}
            </li>
          </ul>
        </div>
      </section>
    `,
    controller: 'HomeController'
  });
})
.controller('HomeController', function($scope) {
  $scope.title = 'Welcome to the blog!'
  $scope.items = _.times(5, i => {
    return `I am item ${i}`;
  });
});
