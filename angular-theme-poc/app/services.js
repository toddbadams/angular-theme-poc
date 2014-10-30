(function () {
    'use strict';

    angular
        .module('app')
        .service('themeService', themeService);

    themeService.$inject = [];
    function themeService() {
        var _themes = [
                {
                    id: 1,
                    name: 'base',
                    url: 'themes/base'
                },
                {
                    id: 2,
                    name: 'theme a',
                    url: 'themes/themea'
                },
                {
                    id: 3,
                    name: 'theme b',
                    url: 'themes/themeb'
                }
        ],
            _current = null,

            _service = {
                getThemes: getThemes,
                getTheme: getTheme,
                setTheme: setTheme
            };

        activate();

        return _service;

        function activate() {
            setTheme(3);
        }

        function getThemes() {
            return _themes;
        }

        function getTheme() {
            return _current;
        }

        function setTheme(id) {
            _current = getById(_themes, id);
            getCss(_current.url);
        }

        function getById(arr, id) {
            var _i, _l = arr.length;
            for (_i = 0; _i < _l; _i++) {
                if (arr[_i].id === id) return arr[_i];
            }
            return null;
        }

        function getCss(url) {
            var link = document.createElement("link");
            link.href = url + "/theme.css";
            link.type = "text/css";
            link.rel = "stylesheet";
            link.media = "screen,print";

            document.getElementsByTagName("head")[0].appendChild(link);
        }
    }


})();