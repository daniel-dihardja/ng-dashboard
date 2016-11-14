/**
 * Created by danieldihardja on 24/07/16.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import adminController from './admin.controller';
import adminView from './admin.html!text';

import appSettings from '../app.settings';

// core components
import login 		from '../login/login';
import dashboard 	from './dashboard/dashboard';
import sideMenu 	from './sidemenu/sidemenu';
import profil 		from './profil/profil';
import files 		from './files/files';
import crud   		from './crud/index';
import components 	from '../components/components';


// custom gui
import fileSelector from './custom-gui/file-selector/file-selector.directive';
import fileUploader from './custom-gui/file-uploader/file-upload.directive';
import stateHistory from './state-history/state-history.service';

// froala test
//import froala from './froala-test/froala-test';

let adminModule = angular.module('admin', [
		uiRouter,
		sideMenu.name,
		login.name,
		dashboard.name,
		profil.name,
		files.name,
		crud.name,
		components.name
	])
	.config(['$stateProvider', '$crudProvider', ($stateProvider, $crudProvider)=> {

		// @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
		// #how-to-configure-your-server-to-work-with-html5mode
		//$locationProvider.html5Mode(true).hashPrefix('!');

		$crudProvider.setUrlBase(appSettings.baseApiUrl);

		$stateProvider
			.state('admin', {
				controller: adminController,
				controllerAs: 'vm',
				template: adminView,
				url: '/admin',
				resolve: {
					auth: ['AppUser', '$q', '$app', function(AppUser, $q, $app) {
						var defer = $q.defer();
						AppUser.ping().$promise.then(function(res) {
							if(res.user) {
								$app.username(res.user.username);
							}
							defer.resolve();
						});
						return defer.promise;
					}]
				}
			});
	}])

	.directive('fileSelector', fileSelector)
	.directive('fileUploader', fileUploader)

	.service('$stateHistory', stateHistory)

	// workaround for the audio / ng-src issue
	.filter("trustUrl", ['$sce', function ($sce) {
		return function (recordingUrl) {
			return $sce.trustAsResourceUrl(recordingUrl);
		};
}]);

export default adminModule;


