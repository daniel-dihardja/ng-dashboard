/**
 * Created by danieldihardja on 12/10/16.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import controller from './froala-test.controller';
import template from './froala-test.html!text';

let froala = angular.module('admin.froalatest', [uiRouter])

	.config(['$stateProvider', ($stateProvider) => {
		$stateProvider
			.state('admin.froalatest', {
				controller,
				template,
				url: '/froalatest'
			});
	}]);

export default froala;