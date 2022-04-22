/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE ImpiegatiService PLEASE EDIT js/services/custom/ExamCustomService.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */


app.factory('ExamService', ['$resource', '$rootScope', 'ExamServiceCustom',
  function($resource, $rootScope, ExamServiceCustom){
    return $resource( $rootScope.baseUrl + "/exam/:_id", {_id:'@_id'}, $.extend({
        'findBy_Checklist': { 
        	url: $rootScope.baseUrl + '/exam/findBy_Checklist/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		key: '@key',
        		 
        	}
        },
        'findBy_Student': { 
        	url: $rootScope.baseUrl + '/exam/findBy_Student/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		key: '@key',
        		 
        	}
        },
        'findBy_Teacher': { 
        	url: $rootScope.baseUrl + '/exam/findBy_Teacher/:key',
        	method: 'GET',
        	isArray: true,
        	params: {
        		key: '@key',
        		 
        	}
        },
        'validate': { 
        	url: $rootScope.baseUrl + '/exam/:id/validate',
        	method: 'POST',
        	isArray: false,
        	params: {
        		id: '@id',
        		 
        	}
        },
    }, ExamServiceCustom));
}]);