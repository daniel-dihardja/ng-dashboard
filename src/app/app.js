/**
 * Created by danieldihardja on 18/08/16.
 */

import 'angular-material/angular-material.css!'
import 'angular-material-data-table/dist/md-data-table.css!';
import './assets/main.css!'

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'angular-resource';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-translate';

import './components/loopback/lb-services';

import dataTable from 'angular-material-data-table';

import zfLogin from './components/login/login';
import zfAdmin from './components/admin/admin';

import appText from './app.text';

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

.config(['$urlRouterProvider', '$httpProvider', ($urlRouterProvider, $httpProvider) => {

	function authInterceptor($injector) {
		return  {
			responseError: function(res) {
				if(res.status == 401) {
					var $state = $injector.get('$state');
					$state.go('login');
				}
				return res;
			}
		}
	}

	$httpProvider.interceptors.push(authInterceptor);

	$urlRouterProvider.otherwise('/login');
}])

.config(appText);

export default appModule;