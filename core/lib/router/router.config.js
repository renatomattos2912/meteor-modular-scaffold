(function() {
    "use strict";

    Router.configure({
        layoutTemplate: 'defaultLayout',
        notFoundTemplate: 'notFoundLayout',
        loadingTemplate: 'loadingLayout',
        waitOn: function() {
            return [

            ];
        }
    });

})();