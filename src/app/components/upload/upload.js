/**
 * Created by danieldihardja on 17/08/16.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import controller from './upload.controller';
import template from './upload.html!text';
import directive from './upload.directive';

let uploadModule = angular.module('app.upload', [uiRouter])
	.config(($stateProvider) => {
		'ngInject';
		$stateProvider
			.state('upload', {
				controller,
				controllerAs: 'vm',
				template,
				url: '/upload'
			});
	})
	.directive('fileModel', directive);

export default uploadModule;