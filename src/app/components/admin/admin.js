/**
 * Created by danieldihardja on 24/07/16.
 */


import angular from 'angular';
import uiRouter from 'angular-ui-router';

import adminController from './admin.controller';
import adminView from './admin.html!text';

import login from '../login/login';
import dashboard from '../dashboard/dashboard';
import profil from '../profil/profil';

import files from '../files/files';

let adminModule = angular.module('admin', [
		uiRouter,
		login.name,
		dashboard.name,
		profil.name,
		files.name
	])
	.config(['$stateProvider', ($stateProvider)=> {

		// @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
		// #how-to-configure-your-server-to-work-with-html5mode
		//$locationProvider.html5Mode(true).hashPrefix('!');

		$stateProvider
			.state('admin', {
				controller: adminController,
				controllerAs: 'vm',
				template: adminView,
				url: '/admin',
				resolve: {
					auth: function(AppUser) {return AppUser.ping()}
				}
			});
	}]);

export default adminModule;


