// A module for home
// Why is this file called index.js? Thanks to that we can import a folder and this file will be the one that runs.

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

import routing from './home.routes';
import HomeController from './home.controller';

export default angular.module('app.home', [uirouter, ngResource])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;