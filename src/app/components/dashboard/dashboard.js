/**
 * Created by danieldihardja on 09/08/16.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import crud from '../../common/crud/crud';

import controller from './dashboard.controller';
import template from './dashboard.html!text';

let dashboardModule = angular.module('admin.dashboard', [
	uiRouter,
	crud.name])

	.config(($stateProvider) => {
		"ngInject";

		$stateProvider
			.state('dashboard', {
				template,
				controller,
				url: '/dashboard'
			});
	})

	.config(($crudProvider) => {
		"ngInject";

	});

export default dashboardModule;