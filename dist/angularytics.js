/**
 * The solution to tracking page views and events in a SPA with AngularJS
 * @version v0.2.3 - 2014-03-12
 * @link https://github.com/mgonto/angularytics
 * @author Martin Gontovnikas <martin@gonto.com.ar>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function () {
  angular.module('angularytics', []).provider('Angularytics', function () {
    var eventHandlersNames = ['Google'];
    this.setEventHandlers = function (handlers) {
      if (angular.isString(handlers)) {
        handlers = [handlers];
      }
      eventHandlersNames = [];
      angular.forEach(handlers, function (handler) {
        eventHandlersNames.push(capitalizeHandler(handler));
      });
    };
    var capitalizeHandler = function (handler) {
      return handler.charAt(0).toUpperCase() + handler.substring(1);
    };
    var pageChangeEvent = '$locationChangeSuccess';
    this.setPageChangeEvent = function (newPageChangeEvent) {
      pageChangeEvent = newPageChangeEvent;
    };
    this.$get = [
      '$injector',
      '$rootScope',
      '$location',
      function ($injector, $rootScope, $location) {
        // Helper methods
        var eventHandlers = [];
        angular.forEach(eventHandlersNames, function (handler) {
          eventHandlers.push($injector.get('Angularytics' + handler + 'Handler'));
        });
        var forEachHandlerDo = function (action) {
          angular.forEach(eventHandlers, function (handler) {
            action(handler);
          });
        };
        var service = {};
        // Just dummy function so that it's instantiated on app creation
        service.init = function () {
        };
        service.trackEvent = function (category, action, opt_label, opt_value, opt_noninteraction) {
          forEachHandlerDo(function (handler) {
            if (category && action) {
              handler.trackEvent(category, action, opt_label, opt_value, opt_noninteraction);
            }
          });
        };
        service.trackPageView = function (url) {
          forEachHandlerDo(function (handler) {
            if (url) {
              handler.trackPageView(url);
            }
          });
        };
        // Event listening
        $rootScope.$on(pageChangeEvent, function () {
          service.trackPageView($location.path());
        });
        return service;
      }
    ];
  });
}());
(function () {
  angular.module('angularytics').factory('AngularyticsConsoleHandler', [
    '$log',
    function ($log) {
      var service = {};
      service.trackPageView = function (url) {
        $log.log('URL visited', url);
      };
      service.trackEvent = function (category, action, opt_label, opt_value, opt_noninteraction) {
        $log.log('Event tracked', category, action, opt_label, opt_value, opt_noninteraction);
      };
      return service;
    }
  ]);
}());
(function () {
  angular.module('angularytics').factory('AngularyticsGoogleHandler', [
    '$log',
    function ($log) {
      var service = {};
      service.trackPageView = function (url) {
        _gaq.push([
          '_set',
          'page',
          url
        ]);
        _gaq.push([
          '_trackPageview',
          url
        ]);
      };
      service.trackEvent = function (category, action, opt_label, opt_value, opt_noninteraction) {
        _gaq.push([
          '_trackEvent',
          category,
          action,
          opt_label,
          opt_value,
          opt_noninteraction
        ]);
      };
      return service;
    }
  ]).factory('AngularyticsGoogleUniversalHandler', function () {
    var service = {};
    service.trackPageView = function (url) {
      ga('set', 'page', url);
      ga('send', 'pageview', url);
    };
    service.trackEvent = function (category, action, opt_label, opt_value, opt_noninteraction) {
      ga('send', 'event', category, action, opt_label, opt_value, { 'nonInteraction': opt_noninteraction });
    };
    return service;
  });
}());
(function () {
  angular.module('angularytics').factory('AngularyticsKeenIoHandler', [
    '$log',
    function ($log) {
      var service = {};
      var pageView = function (url) {
        return {
          page: url,
          referrer: document.referrer,
          agent: window.navigator.userAgent
        };
      };
      service.trackPageView = function (url) {
        Keen.addEvent('pageView', pageView(url));
      };
      service.trackEvent = function (category, action, opt_label, opt_value, opt_noninteraction) {
        var eventData;
        eventData = angular.extend(data, {
          'category': category,
          'action': action,
          'opt_label': opt_label,
          'opt_value': opt_value,
          'opt_noninteraction': opt_noninteraction
        });
        eventData = angular.extend(data, pageView());
        Keen.addEvent('trackEvent', eventData);
      };
      return service;
    }
  ]);
}());
(function () {
  angular.module('angularytics').filter('trackEvent', [
    'Angularytics',
    function (Angularytics) {
      return function (entry, category, action, opt_label, opt_value, opt_noninteraction) {
        Angularytics.trackEvent(category, action, opt_label, opt_value, opt_noninteraction);
        return entry;
      };
    }
  ]);
}());
