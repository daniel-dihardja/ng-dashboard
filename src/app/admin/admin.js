/**
 * Created by danieldihardja on 24/07/16.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import adminController from './admin.controller';
import adminView from './admin.html!text';

// core components
import login 		from '../login/login';
import dashboard 	from './dashboard/dashboard';
import sideMenu 	from './sidemenu/sidemenu';
import profil 		from './profil/profil';
import files 		from './files/files';
import components 	from '../components/components';


// custom gui
import fileSelector from './custom-gui/file-selector/file-selector.directive';

let adminModule = angular.module('admin', [
		uiRouter,
		sideMenu.name,
		login.name,
		dashboard.name,
		profil.name,
		files.name,
		components.name
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
					auth: ['AppUser', function(AppUser) {return AppUser.ping()}]
				}
			});
	}])
	.directive('fileSelector', fileSelector)

export default adminModule;


