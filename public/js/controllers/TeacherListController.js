// START - USED SERVICES
/*
 *	TeacherService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	TeacherService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * TeacherService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('TeacherListController', ['$scope', 'TeacherService',
    function ($scope, TeacherService ) {
		
    	$scope.list = TeacherService.query();
    	
}]);