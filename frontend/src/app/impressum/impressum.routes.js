routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('impressum', {
            url: '/impressum',
            templateUrl: require('./impressum.html').toString(),
            controller: 'ImpressumController',
            controllerAs: 'impressum',
            requireLogin: false
        });
}