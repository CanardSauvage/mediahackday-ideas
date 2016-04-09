// Why is this file called index.js? Thanks to that we can import a folder and this file will be the one that runs.

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './impressum.routes.js';
import ImpressumController from './impressum.controller.js';

export default angular.module('app.impressum', [uirouter])
    .config(routing)
    .controller('ImpressumController', ImpressumController)
    .name;