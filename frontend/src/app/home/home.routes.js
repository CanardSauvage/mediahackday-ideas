routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: require('./home.html').toString(),
            controller: 'HomeController',
            controllerAs: 'home'
        });
}