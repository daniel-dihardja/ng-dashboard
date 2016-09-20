/**
 * Created by danieldihardja on 15/09/16.
 */
import angular from 'angular';

import entityListController from './ebcontent-list.controller';
import entityCreateController from './ebcontent-create.controller';
import entityEditController from './ebcontent-edit.controller';
import entityListTpl from './ebcontent-list.html!text';
import entityCreateTpl from './ebcontent-create.html!text';
import entityEditTpl from './ebcontent-edit.html!text';


let ebcontentModule = angular.module('admin.crud-EbContent', [])
	.config(['$stateProvider', ($stateProvider) => {
		$stateProvider
			.state(
				'admin.EbContent-list', {
					controller: entityListController,
					controllerAs: 'vm',
					template: entityListTpl,
					url: '/EbContent',
					params: {
						belongsToEntity: null
					}
				})

			.state(
				'admin.EbContent-create', {
					controller: entityCreateController,
					controllerAs: 'vm',
					template: entityCreateTpl,
					url: '/EbContent/create',
					params: {
						belongsToEntity: null
					}
				})

			.state(
				'admin.EbContent-edit', {
					controller: entityEditController,
					controllerAs: 'vm',
					template: entityEditTpl,
					url: '/EbContent/:id/edit',
					params: {
						belongsToEntity: null
					}
				})

	}]);
export default ebcontentModule;