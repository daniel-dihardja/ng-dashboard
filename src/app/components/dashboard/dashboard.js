/**
 * Created by danieldihardja on 09/08/16.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import controller from './dashboard.controller';
import template from './dashboard.html!text';

let dashboardModule = angular.module('admin.dashboard', [
	uiRouter])

	.config(['$stateProvider', ($stateProvider) => {
		$stateProvider
			.state('dashboard', {
				template,
				controller,
				url: '/dashboard'
			});
	}]);

export default dashboardModule;