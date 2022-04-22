// START - USED SERVICES
/*
 *	TeacherService.create
 *		PARAMS: 
 *		
 *
 *	TeacherService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	TeacherService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	ChecklistService.findBy_Teacher
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 *	ChecklistService.list
 *		PARAMS: 
 *		
 *
 *	ExamService.findBy_Teacher
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
 * TeacherService  
 */
// END - REQUIRED RESOURCES

app.controller('TeacherEditController', ['$scope', '$location', '$routeParams', '$q', 'ChecklistService', 'ExamService', 'TeacherService', 'ChecklistService', 'ChecklistService', 'ExamService',
    function ($scope, $location, $routeParams, $q, ChecklistService , ExamService , TeacherService , ChecklistService, ChecklistService, ExamService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = TeacherService.get({_id: $scope.id});
        	$scope.external._Checklist_Teacher = ChecklistService.findBy_Teacher({key: $scope.id});
        	$scope.external._Exam_Teacher = ExamService.findBy_Teacher({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new TeacherService();
        	$scope.external._Checklist_Teacher = [];
        	$scope.external._Exam_Teacher = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/teachers/');
    		});
    	}
    	
    	$scope.remove = function(){
    		TeacherService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/teachers/');
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
    		
        //manage External relation _Teacher
        		
    	$scope.list_Checklist_Teacher = ChecklistService.query();
    	
    		
        //manage External relation _Teacher
        		
    	$scope.list_Exam_Teacher = ExamService.query();
    	
}]);