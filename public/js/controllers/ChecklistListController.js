// START - USED SERVICES
/*
 *	ChecklistService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	ChecklistService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ChecklistService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('ChecklistListController', ['$scope', 'ChecklistService',
    function ($scope, ChecklistService ) {
		
    	$scope.list = ChecklistService.query();
    	
}]);