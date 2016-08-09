/**
 * Created by danieldihardja on 24/07/16.
 */

import 'angular-material/angular-material.css!'
import './assets/main.css!'

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import appComponent from './app.component';
import dashboard from './components/dashboard/dashboard';
import profile from './components/profile/profile';

angular.module('admin', [
		uiRouter,
		"ngMaterial",
		dashboard.name,
		profile.name
	])
	.config(($locationProvider, $urlRouterProvider)=> {
		"ngInject";

		// @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
		// #how-to-configure-your-server-to-work-with-html5mode
		//$locationProvider.html5Mode(true).hashPrefix('!');

		$urlRouterProvider.otherwise('/profile');
	})
	.component('app', appComponent);

