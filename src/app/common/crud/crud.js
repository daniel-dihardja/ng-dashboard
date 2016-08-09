/**
 * Created by danieldihardja on 09/08/16.
 */
import angular from 'angular';
import CrudService from './crud.service';
import TextDirective from './fields/text/text';

import ListViewController from './_list/list-view.controller';
import ListViewTemplate from './_list/list-view.html!text';

let crudModule = angular.module('crud', [])
	.config(($stateProvider) => {
		'ngInject';
		$stateProvider
			.state('list', {
				url: 'crud-list/:entity',
				controller: ListViewController,
				template: ListViewTemplate
			})
			.state('create', {
				url: 'crud-create/:entity'
			})
			.state('edit', {
				url: 'crud-edit/:entity/:entry'
			})
			.state('show', {
				url: 'crud-show/:entity/:entry'
			})
			.state('delete', {
				url: 'crud-delete/:entity/:entry'
			})
	})
	.provider('$crud', CrudService)
	.directive('text', TextDirective);

export default crudModule;
