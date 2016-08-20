/**
 * Created by danieldihardja on 09/08/16.
 */
import angular from 'angular';
import CrudService from './crud.service';
import TextDirective from './fields/text/text';

import ListViewController from './_list/list-view.controller';
import ListViewTemplate from './_list/list-view.html!text';

let crudModule = angular.module('crud', [])
	.config(['$stateProvider', ($stateProvider) => {

		$stateProvider
			.state('list', {
				url: 'crud-list/:entity',
				controller: ListViewController,
				template: ListViewTemplate
			})
			.state('entity-create', {
				url: 'entity-create/:entity'
			})
			.state('entity-edit', {
				url: 'entity-edit/:entity/:entry'
			})
			.state('entity-show', {
				url: 'entity-show/:entity/:entry'
			})
			.state('entity-delete', {
				url: 'entity-delete/:entity/:entry'
			})
	}])
	.provider('$crud', CrudService)
	.directive('text', TextDirective);

export default crudModule;
