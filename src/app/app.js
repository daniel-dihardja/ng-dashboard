/**
 * Created by danieldihardja on 18/08/16.
 */

// froala editor
import '../assets/font-awesome/font-awesome.css!'
import '../../jspm_packages/bower/froala@2.3.4/css/froala_editor.css!'
import '../../jspm_packages/bower/froala@2.3.4/css/froala_style.css!'
import '../../jspm_packages/bower/froala@2.3.4/css/plugins/code_view.css!'
import '../../jspm_packages/bower/froala@2.3.4/css/plugins/colors.css!'

import '../../jspm_packages/bower/jquery@3.1.1';
import '../../jspm_packages/bower/froala@2.3.4/js/froala_editor.min';

import '../../jspm_packages/bower/froala@2.3.4/js/plugins/lists.min';
import '../../jspm_packages/bower/froala@2.3.4/js/plugins/paragraph_format.min';
import '../../jspm_packages/bower/froala@2.3.4/js/plugins/code_view.min';



import 'angular-material/angular-material.css!'
import 'angular-material-data-table/dist/md-data-table.css!';

import '../assets/iconfont/material-icons.css!'
import '../assets/main.css!'

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'angular-resource';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-translate';


import './lib/lb-services/lb-services';

import dataTable from 'angular-material-data-table';

import zfLogin from './login/login';
import zfAdmin from './admin/admin';

import appText from './app.text';
import appSettings from './app.settings';
import appService from './app.service';



let appModule = angular.module('app', [
	uiRouter,
	'pascalprecht.translate',
	'ngMaterial',
	'ngResource',
	'lbServices',
	dataTable,
	zfLogin.name,
	zfAdmin.name
])

.config(['$urlRouterProvider',
	'$httpProvider',
	'LoopBackResourceProvider',
	'$filesProvider',
	'$mdThemingProvider',
	($urlRouterProvider, $httpProvider, LoopBackResourceProvider, $filesProvider, $mdThemingProvider) => {

	// set API base URL
	LoopBackResourceProvider.setUrlBase(appSettings.baseApiUrl);

	// set files base URL
	$filesProvider.setUrlBase(appSettings.baseApiUrl);

	// set 401 interceptor to redirect to the login page

	$httpProvider.interceptors.push(['$injector', function authInterceptor($injector) {
		return  {
			responseError: function(res) {
				if(res.status == 401) {
					console.log('login fail');
					var $state = $injector.get('$state');
					$state.go('login');
				}
				return res;
			}
		}
	}]);

	// theming
	$mdThemingProvider.theme('default')
		.primaryPalette('light-blue')
		.accentPalette('grey', {'default': '600'});


	$urlRouterProvider.otherwise('/login');
}])

.config(appText)
.service('$app', appService)

export default appModule;