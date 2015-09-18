angular.module("setentaAdmin", ['ui.router'])

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

    .controller("courseCtrl", function ($scope) {
        $scope.test = "courseCtrl";
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

    .controller("roomCtrl", function ($scope, messageFactory) {
        $scope.test = "roomCtrl";
		$scope.messages = messageFactory.findAll();
		$scope.newMsg = "";
		
		$scope.remove = function(msg) {
			messageFactory.remove(msg);
		}
		$scope.send = function(e) {
			if (e.keyCode != 13) return;
			messageFactory.add({
				author: 'testowy_dupek',
				text: $scope.newMsg,
				dateTime: Date.now()
			});
			$scope.newMsg = "";
		}
    })
	
	.factory("messageFactory", function($firebaseArray) {
		var ref = new Firebase('https://shiring-fire-1146.firebaseio.com/messages');
		var messages = $firebaseArray(ref);
		return {
			findAll: function() {
				return messages;
			},
			add: function(message) {
				messages.$add(message);
			},
			remove: function(message) {
				messages.$remove(message);
			}
		}
	})