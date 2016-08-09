/**
 * Created by danieldihardja on 09/08/16.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './profile.controller';
import template from './profile.html!text';

let profileModule = angular.module('admin.profile', [uiRouter])
	.config(($stateProvider) => {
		"ngInject";

		$stateProvider
			.state('profile', {
				controller,
				template,
				url: '/profile'
			});

	});

export default profileModule;