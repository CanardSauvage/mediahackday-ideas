// There is no need of using $inject like I did in here, there is a Webpack loader for ng-annotate that you can use to let webpack annotate for you.
spinner.$inject = ['$httpProvider'];

// We are exporting a function
export default function spinner($httpProvider) {
    $httpProvider.interceptors.push('spinnerInterceptor');
}