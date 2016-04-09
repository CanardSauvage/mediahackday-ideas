export default class HomeController {
    constructor($scope, $state, $resource, $http) {
        this.$scope = $scope;
        this.name = 'World';
        this.$state = $state;
        this.$resource = $resource;
        this.$http = $http;
    }

    changeName() {
        console.info('Change State');
    }
}