/**
 * Created by danieldihardja on 17/08/16.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dataTable from 'angular-material-data-table';

import controllerList from './file-list.controller';
import templateList from './file-list.html!text';

import controllerUpload from './file-upload.controller';
import templateUpload from './file-upload.html!text';

import controllerDelete from './file-delete.controller';
import templateDelete from './file-delete.html!text';

import directiveUpload from './file-upload.directive';
import fileService from './files.service';

let fileModule = angular.module('app.files', [uiRouter, dataTable])

	.config(($stateProvider) => {
		'ngInject';

		$stateProvider

			.state('filelist', {
				controller: controllerList,
				controllerAs: 'vm',
				template: templateList,
				url: '/file-list/:container'
			})

			.state('fileupload', {
				controller: controllerUpload,
				controllerAs: 'vm',
				template: templateUpload,
				url: '/file-upload/:container'
			})

			.state('filedelete', {
				controller: controllerDelete,
				controllerAs: 'vm',
				template: templateDelete,
				url: '/file-delete/:container/:file'
			})
	})

	.service('$files', fileService)
	.directive('fileModel', directiveUpload);

export default fileModule;