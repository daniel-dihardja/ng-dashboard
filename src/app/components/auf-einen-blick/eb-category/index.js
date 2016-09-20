/**
 * Created by danieldihardja on 15/09/16.
 */
import angular from 'angular';

import entityListController from './ebcategory-list.controller';
import entityCreateController from './ebcategory-create.controller';
import entityEditController from './ebcategory-edit.controller';
import entityListTpl from './ebcategory-list.html!text';
import entityCreateTpl from './ebcategory-create.html!text';
import entityEditTpl from './ebcategory-edit.html!text';


let ebcategoryModule = angular.module('admin.crud-EbCategory', [])
	.config(['$stateProvider', ($stateProvider) => {
		$stateProvider
			.state(
				'admin.EbCategory-list', {
					controller: entityListController,
					controllerAs: 'vm',
					template: entityListTpl,
					url: '/EbCategory',
					params: {
						belongsToEntity: null
					}
				})

			.state(
				'admin.EbCategory-create', {
					controller: entityCreateController,
					controllerAs: 'vm',
					template: entityCreateTpl,
					url: '/EbCategory/create',
					params: {
						belongsToEntity: null
					}
				})

			.state(
				'admin.EbCategory-edit', {
					controller: entityEditController,
					controllerAs: 'vm',
					template: entityEditTpl,
					url: '/EbCategory/:id/edit',
					params: {
						belongsToEntity: null
					}
				})

	}]);
export default ebcategoryModule;