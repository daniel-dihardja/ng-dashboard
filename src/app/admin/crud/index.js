/**
 * Created by danieldihardja on 19/09/16.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import listController from './list/controller';
import listTemplate from './list/template.html!text';

import createController from './create/controller';
import createTemplate from './create/template.html!text';

import editController from './edit/controller';
import editTemplate from './edit/template.html!text';

import crudProvider from './crud-provider';

import defaultField from './fields/default/default.directive';
import textareaField from './fields/textarea/textarea.directive';
import checkboxField from './fields/checkbox/checkbox.directive';
import selectField from './fields/select/select.directive';
import fileField from './fields/file/file.directive';



let crudModule = angular.module('crud', [uiRouter])
	.config(['$stateProvider', ($stateProvider) => {
		$stateProvider
			.state(
				'admin.crud-list', {
					controller: listController,
					controllerAs: 'vm',
					template: listTemplate,
					url: '/crud-list/:model',
					params: {
						filter: null,
						title: null,
						prevTitle: null
					}
				}
			)
			.state(
				'admin.crud-create', {
					controller: createController,
					controllerAs: 'vm',
					template: createTemplate,
					url: '/crud-create/:model',
					params: {
						filter: null,
						title: null,
						prevTitle: null
					}
				}
			)
			.state(
				'admin.crud-edit', {
					controller: editController,
					controllerAs: 'vm',
					template: editTemplate,
					url: '/crud-edit/:model/:id',
					params: {
						title: null,
						prevTitle: null,
						entity: null
					}
				}
			)

	}])
	.provider('$crud', crudProvider)
	.directive('crudInput', defaultField)
	.directive('crudText', textareaField)
	.directive('crudCheckbox', checkboxField)
	.directive('crudSelect', selectField)
	.directive('crudFile', fileField)

export default crudModule;