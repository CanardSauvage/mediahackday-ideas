// There is no need of using $inject like I did in here, there is a Webpack loader for ng-annotate that you can use to let webpack annotate for you.
routing.$inject = ['$urlRouterProvider', '$locationProvider'];

// We are exporting a function
export default function routing($urlRouterProvider, $locationProvider) {
     $locationProvider.html5Mode(true);
     $urlRouterProvider.otherwise('/');
}