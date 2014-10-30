(function () {
    'use strict';
   
    angular.module('app', [
        // Angular modules 
        
        // Custom modules 

        // 3rd Party Modules
        
    ]);

    angular.module('app').run(['themeService', function (themeService) {
        // todo:  display startup progress bar
        // todo:  load user settings async
        // todo:  after user settings load theme
        // todo:  remove progress bar and start app
        themeService.setTheme(3); // possible themes 1,2,3

    }]);
})();