/**
 * Created by danieldihardja on 18/08/16.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './login.controller';
import template from './login.html!text';
import authService from './auth.service';

let loginModule = angular.module('login', [uiRouter])
	.config(['$stateProvider',($stateProvider) => {
		$stateProvider
			.state('login', {
				controller,
				controllerAs: 'vm',
				template,
				url: '/login'
			})
		}])
	.service('$auth', authService);
export default loginModule;