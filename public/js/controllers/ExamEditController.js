// START - USED SERVICES
/*
 *	ExamService.create
 *		PARAMS: 
 *		
 *
 *	ExamService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	ExamService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	StudentService.list
 *		PARAMS: 
 *		
 *
 *	TeacherService.list
 *		PARAMS: 
 *		
 *
 *	ChecklistService.list
 *		PARAMS: 
 *		
 *
 *	ExamService.validate
 *		PARAMS: 
 *					String id - ID of the exam
 *		RETURN: Boolean
 *				
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ChecklistService  
 * ExamService  
 * StudentService  
 * TeacherService  
 */
// END - REQUIRED RESOURCES

app.controller('ExamEditController', ['$scope', '$location', '$routeParams', '$q', 'ChecklistService', 'ExamService', 'StudentService', 'TeacherService', 'ChecklistService', 'StudentService', 'TeacherService',
    function ($scope, $location, $routeParams, $q, ChecklistService , ExamService , StudentService , TeacherService , ChecklistService, StudentService, TeacherService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = ExamService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new ExamService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/exams/');
    		});
    	}
    	
    	$scope.remove = function(){
    		ExamService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/exams/');
    		});
    	}
    	
    		
        //manage relation _Checklist
        		
    	$scope.list_Checklist = ChecklistService.query();

    		
        //manage relation _Student
        		
    	$scope.list_Student = StudentService.query();

    		
        //manage relation _Teacher
        		
    	$scope.list_Teacher = TeacherService.query();

}]);