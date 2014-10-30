(function () {
    'use strict';

    // scaffold widget
    angular.module('app').directive('scaffold', scaffoldDirective);
    scaffoldDirective.$inject = ['themeService'];
    function scaffoldDirective(themeService) {
        var theme = themeService.getTheme();

        var directive = {
            link: link,
            templateUrl: theme.url + '/scaffold.html',
            restrict: 'E',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

    // navigation widget
    angular.module('app').directive('widgetNav', navDirective);
    navDirective.$inject = ['themeService'];
    function navDirective(themeService) {
        var theme = themeService.getTheme();

        var directive = {
            link: navDirectiveLink,
            templateUrl: theme.url + '/nav.html',
            restrict: 'E',
            scope: true
        };

        return directive;

        function navDirectiveLink(scope, element, attrs) {
            // todo: get from service
            scope.menuItems = [
                {
                    id: 1,
                    name: 'menu 1'
                },
                {
                    id: 2,
                    name: 'menu 2'
                },
                {
                    id: 3,
                    name: 'menu 3'
                }
            ];
            scope.navStacked = attrs.hasOwnProperty('widgetNavStacked');
        }
    }
})();