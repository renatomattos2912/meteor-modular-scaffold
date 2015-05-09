(function() {
    "use strict";

    Router.onBeforeAction(function () {
        this.next();
        // TODO
    });

    Router.onAfterAction(function() {
        // TODO
    });

    if(Meteor.isClient) {
        // Show the loading screen on desktop
        Router.onBeforeAction('loading', {});
        Router.onBeforeAction('dataNotFound', {});
    }

})();