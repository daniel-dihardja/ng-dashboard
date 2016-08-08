/**
 * Created by danieldihardja on 24/07/16.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import components from './components/components';
import common from './common/common';
import appComponent from './app.component';

import 'angular-material/angular-material.css!'
import './assets/main.css!'

angular.module('app', [
		uiRouter,
		"ngMaterial",
		components,
		common
	])
	.config(($locationProvider)=> {
		"ngInject";

		// @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
		// #how-to-configure-your-server-to-work-with-html5mode
		$locationProvider.html5Mode(true).hashPrefix('!');
	})
	.component('app', appComponent);

