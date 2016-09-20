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
						filter: null
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
						filter: null
					}
				}
			)
			.state(
				'admin.crud-edit', {
					controller: editController,
					controllerAs: 'vm',
					template: editTemplate,
					url: '/crud-edit/:model/:id'
				}
			)

	}])
	.provider('$crud', crudProvider)

export default crudModule;