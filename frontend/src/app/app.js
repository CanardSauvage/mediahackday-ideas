import angular from 'angular';

// ng Material
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';

// additional ng stuff
import angularMessages from 'angular-messages';
import angularResource from 'angular-resource';
import uirouter from 'angular-ui-router';

// Config
import routing from './app.config';
import httpConfig from './config/http.config';
import messages from './config/messages';
import spinnerInterceptor from './config/spinnerInterceptor';

// Views
import home from './home';
import impressum from './impressum';


require('../index.html');
require('../stylesheets/app.scss');
require('../stylesheets/angular-material.min.css');


// HINT: If we would use the html loader we would not need this...
require('../images/ideas_logo.png');
require('../images/loading_spinner.gif');

angular.module('app', [uirouter, angularMaterial, angularResource, home, impressum])
    .config(routing)
    .config(httpConfig)
    .service('spinnerInterceptor', spinnerInterceptor)
    .service('messages', messages)
    .controller('navigationController', ($scope, $state) => {
        $scope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                console.info('State changed');
            }
        );
    })
    .run(function ($rootScope, messages) {
        $rootScope.messages = messages;
    });