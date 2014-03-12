(function(){
    angular.module('angularytics').factory('AngularyticsKeenIoHandler', function($log) {
        var service = {};

        var pageView = function(url) {
            return {
                page: url,
                referrer: document.referrer,
                agent: window.navigator.userAgent
            };
        };

        service.trackPageView = function(url) {
            Keen.addEvent('pageView', pageView(url));
        };

        service.trackEvent = function(category, action, opt_label, opt_value, opt_noninteraction) {
            var eventData;
            eventData = angular.extend(data, {'category': category, 'action': action, 'opt_label': opt_label, 'opt_value': opt_value, 'opt_noninteraction': opt_noninteraction});
            eventData = angular.extend(data, pageView());
            Keen.addEvent('trackEvent', eventData);
        };

        return service;
    });
})();
