angular.module("setentaAdmin", ['ui.router', 'firebase'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/courses');

        $stateProvider.state('courses', {
            url: '/courses',
            controller: 'courseCtrl',
            templateUrl: 'app/courses/courses.tpl.html'
        });
        $stateProvider.state('styles', {
            url: '/styles',
            controller: 'styleCtrl',
            templateUrl: 'app/styles/styles.tpl.html'
        });
        $stateProvider.state('categories', {
            url: '/categories',
            controller: 'categoryCtrl',
            templateUrl: 'app/categories/categories.tpl.html'
        });
        $stateProvider.state('instructors', {
            url: '/instructors',
            controller: 'instructorCtrl',
            templateUrl: 'app/instructors/instructors.tpl.html'
        });
        $stateProvider.state('rooms', {
            url: '/rooms',
            controller: 'roomCtrl',
            templateUrl: 'app/rooms/rooms.tpl.html'
        });
    })

    .controller("courseCtrl", function ($scope, $firebaseArray) {
        $scope.test = "courseCtrl";
        $scope.messages = [];
    })

    .controller("styleCtrl", function ($scope) {
        $scope.test = "styleCtrl";
    })

    .controller("categoryCtrl", function ($scope) {
        $scope.test = "categoryCtrl";
    })

    .controller("instructorCtrl", function ($scope) {
        $scope.test = "instructorCtrl";
    })

    .controller("roomCtrl", function ($scope, roomFactory) {
        $scope.test = "roomCtrl";
		$scope.messages = roomFactory.findAll();
		$scope.newMsg = "";
		
		$scope.remove = function(msg) {
			roomFactory.remove(msg);
		}
		$scope.send = function(e) {
			if (e.keyCode != 13) return;
			roomFactory.add({
				author: 'testowy_dupek',
				text: $scope.newMsg,
				dateTime: Date.now()
			});
			$scope.newMsg = "";
		}
    })
	
	.factory("messageFactory", function(firebaseComponent) {
        firebaseComponent.init("messages");
        return firebaseComponent;
    })

	.factory("roomFactory", function(firebaseComponent) {
        firebaseComponent.init("rooms");
        return firebaseComponent;
    })

	.factory("instructorFactory", function(firebaseComponent) {
        firebaseComponent.init("instructors");
        return firebaseComponent;
	})

	.factory("categoryFactory", function(firebaseComponent) {
        firebaseComponent.init("categories");
		return firebaseComponent;
	})

    .factory("firebaseComponent", function ($firebaseArray) {
        var FIREBASE = "https://shining-fire-1146.firebaseio.com/setenta";
        var ref, collection;
        return {
            init: function (node) {
                ref = new Firebase(FIREBASE).child(node);
                collection = $firebaseArray(ref);
            },
            findAll: function() {
                return collection;
            },
            add: function(obj) {
                collection.$add(obj);
            },
            remove: function(obj) {
                collection.$remove(obj);
            }
        }
    })