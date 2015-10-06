angular.module("setentaAdmin", ['ui.router', 'firebase', 'ui.bootstrap'])

    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/courses');
    })

    .factory("roomFactory", function ($firebaseArray) {
        var FIREBASE = "https://shining-fire-1146.firebaseio.com/setenta";
        var ref = new Firebase(FIREBASE).child("rooms");
        var collection = $firebaseArray(ref);
        return {
            findAll: function () {
                return collection;
            },
            save: function (obj) {
                collection.$add(obj);
            },
            delete: function (obj) {
                collection.$remove(obj);
            }
        }
    })

    .factory("instructorFactory", function ($firebaseArray) {
        var FIREBASE = "https://shining-fire-1146.firebaseio.com/setenta";
        var ref = new Firebase(FIREBASE).child("instructors");
        var collection = $firebaseArray(ref);
        return {
            findAll: function () {
                return collection;
            },
            save: function (obj) {
                collection.$add(obj);
            },
            delete: function (obj) {
                collection.$remove(obj);
            }
        }
    })

    .factory("categoryFactory", function ($firebaseArray) {
        var FIREBASE = "https://shining-fire-1146.firebaseio.com/setenta";
        var ref = new Firebase(FIREBASE).child("categories");
        var collection = $firebaseArray(ref);
        return {
            findAll: function () {
                return collection;
            },
            save: function (obj) {
                collection.$add(obj);
            },
            delete: function (obj) {
                collection.$remove(obj);
            }
        }
    })

    .factory("courseFactory", function ($firebaseArray) {
        var FIREBASE = "https://shining-fire-1146.firebaseio.com/setenta";
        var ref = new Firebase(FIREBASE).child("courses");
        var collection = $firebaseArray(ref);
        return {
            findAll: function () {
                return collection;
            },
            save: function (obj) {
                collection.$add(obj);
            },
            delete: function (obj) {
                collection.$remove(obj);
            }
        }
    })

    .factory("styleFactory", function ($firebaseArray) {
        var FIREBASE = "https://shining-fire-1146.firebaseio.com/setenta";
        var ref = new Firebase(FIREBASE).child("styles");
        var collection = $firebaseArray(ref);
        return {
            findAll: function () {
                return collection;
            },
            save: function (obj) {
                collection.$add(obj);
            },
            delete: function (obj) {
                collection.$remove(obj);
            }
        }
    });
