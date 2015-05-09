Posts = new Mongo.Collection('posts');

(function () {
    "use strict";

    Posts.allow({
        insert: function (userId, doc) {
            return true;
        }
    });

    Posts.list = function () {
        return Posts.find({}, {});
    };

})();
