// START - USED SERVICES
/*
 *	StudentService.create
 *		PARAMS: 
 *		
 *
 *	StudentService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	StudentService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	ChecklistService.findBy_Student
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 *	ChecklistService.list
 *		PARAMS: 
 *		
 *
 *	ExamService.findBy_Student
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ChecklistService  
 * ExamService  
 * StudentService  
 */
// END - REQUIRED RESOURCES

app.controller('StudentEditController', ['$scope', '$location', '$routeParams', '$q', 'ChecklistService', 'ExamService', 'StudentService', 'ChecklistService', 'ChecklistService', 'ExamService',
    function ($scope, $location, $routeParams, $q, ChecklistService , ExamService , StudentService , ChecklistService, ChecklistService, ExamService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = StudentService.get({_id: $scope.id});
        	$scope.external._Checklist_Student = ChecklistService.findBy_Student({key: $scope.id});
        	$scope.external._Exam_Student = ExamService.findBy_Student({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new StudentService();
        	$scope.external._Checklist_Student = [];
        	$scope.external._Exam_Student = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/students/');
    		});
    	}
    	
    	$scope.remove = function(){
    		StudentService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/students/');
    		});
    	}
    	
    		
        //manage relation _Checklist
        		
    	$scope.list_Checklist = ChecklistService.query();

    	$scope.contain_Checklist = function(item){
    		if (!$scope.obj._Checklist) return false;
    		return $scope.obj._Checklist.indexOf(item) != -1;
    	}
		    	
		$scope.add_Checklist = function(item){
			if(!$scope.obj._Checklist)
				$scope.obj._Checklist = [];
			$scope.obj._Checklist.push(item);
		}
		
		$scope.remove_Checklist = function(index){
			$scope.obj._Checklist.splice(index, 1);
		}
    		
        //manage External relation _Student
        		
    	$scope.list_Checklist_Student = ChecklistService.query();
    	
    		
        //manage External relation _Student
        		
    	$scope.list_Exam_Student = ExamService.query();
    	
}]);