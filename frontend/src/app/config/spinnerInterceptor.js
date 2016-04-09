class SpinnerInterceptor {
    constructor(messages) {

        this.request = (config) => {
            angular.element(document.querySelector('#spinner')).removeClass('hidden');
            return config;
        };

        this.requestError = (rejection) => {
            console.error(rejection);
            angular.element(document.querySelector('#spinner')).addClass('hidden');
            messages.errorMessage('Oooops, error on requesting the backend on client side.');
            return rejection;
        };

        this.response = (response) => {
            angular.element(document.querySelector('#spinner')).addClass('hidden');
            return response;
        };

        this.responseError = (rejection) => {
            console.error(rejection);
            angular.element(document.querySelector('#spinner')).addClass('hidden');
            messages.errorMessage('Oooops, error on requesting the backend.');
            return rejection;
        };

    }

}
export default SpinnerInterceptor;
