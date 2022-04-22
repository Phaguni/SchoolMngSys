// START - USED SERVICES
/*
 *	ChecklistService.create
 *		PARAMS: 
 *		
 *
 *	ChecklistService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	ChecklistService.get
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
 *	StudentService.findBy_Checklist
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 *	TeacherService.findBy_Checklist
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 *	ExamService.findBy_Checklist
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
 * TeacherService  
 */
// END - REQUIRED RESOURCES

app.controller('ChecklistEditController', ['$scope', '$location', '$routeParams', '$q', 'ChecklistService', 'ExamService', 'StudentService', 'TeacherService', 'StudentService', 'TeacherService', 'ExamService', 'TeacherService', 'StudentService',
    function ($scope, $location, $routeParams, $q, ChecklistService , ExamService , StudentService , TeacherService , StudentService, TeacherService, ExamService, TeacherService, StudentService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = ChecklistService.get({_id: $scope.id});
        	$scope.external._Exam_Checklist = ExamService.findBy_Checklist({key: $scope.id});
        	$scope.external._Teacher_Checklist = TeacherService.findBy_Checklist({key: $scope.id});
        	$scope.external._Student_Checklist = StudentService.findBy_Checklist({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new ChecklistService();
        	$scope.external._Exam_Checklist = [];
        	$scope.external._Teacher_Checklist = [];
        	$scope.external._Student_Checklist = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/checklists/');
    		});
    	}
    	
    	$scope.remove = function(){
    		ChecklistService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/checklists/');
    		});
    	}
    	
    		
        //manage relation _Student
        		
    	$scope.list_Student = StudentService.query();

    		
        //manage relation _Teacher
        		
    	$scope.list_Teacher = TeacherService.query();

    		
        //manage External relation _Checklist
        		
    	$scope.list_Exam_Checklist = ExamService.query();
    	
    		
        //manage External relation _Checklist
        		
    	$scope.list_Teacher_Checklist = TeacherService.query();
    	
    		
        //manage External relation _Checklist
        		
    	$scope.list_Student_Checklist = StudentService.query();
    	
}]);