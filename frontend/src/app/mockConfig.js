mockConfig.$inject = ['$httpProvider'];

// We are exporting a function
export default function mockConfig($httpProvider) {
    console.info('MOCK!');


    var answer = function (data) {
        return {
            data: data,
            status: 200,
            statusText: 'OK'
        };
    };

    var imagesResponse = answer([{key: 1, url: "//placehold.it/200"}, {key: 2, url: "//placehold.it/200"}, {key: 3, url: "//placehold.it/200"}]);

    $httpProvider.interceptors.push(function ($q, $timeout, $log) {
        return {
            'request': function (config) {
                $log.log('Requesting ' + config.url, config);
                return config;
            },
            //'requestError': function (requestError) {
            //    // Pass-through the rejection.
            //    return ( $q.reject(rejection) );
            //},
            'response': function (response) {
                var deferred = $q.defer();

                if (response.config.url.indexOf('app/') === 0) {
                    $log.log('Response passed directly from: ' + response.config.url);
                    return response; // Let through views immideately
                }

                //Fake delay on response from APIs and other urls in MS
                $timeout(function () {
                    deferred.resolve(response);
                }, 500);

                return deferred.promise;
            },
            'responseError': function (response) {
                var deferred = $q.defer();

                function containsUrl(value) {
                    if (response.config && response.config.url) {
                        return (response.config.url.indexOf(value) > -1);
                    }
                    return false;
                }

                if (containsUrl('app/')) {
                    $log.log('Response passed directly');
                    return response; // Let through views immideately
                }


                if (containsUrl('/images')) {
                    $log.log('Return MOCK-Images response.');
                    deferred.resolve(imagesResponse);
                }  else {
                    deferred.resolve(response);
                }

                return deferred.promise;
            }
        }
    })
}