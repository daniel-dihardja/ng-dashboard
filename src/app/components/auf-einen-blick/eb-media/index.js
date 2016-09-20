/**
 * Created by danieldihardja on 15/09/16.
 */
import angular from 'angular';

import entityListController from './ebmedia-list.controller';
import entityCreateController from './ebmedia-create.controller';
import entityEditController from './ebmedia-edit.controller';
import entityListTpl from './ebmedia-list.html!text';
import entityCreateTpl from './ebmedia-create.html!text';
import entityEditTpl from './ebmedia-edit.html!text';


let ebmediaModule = angular.module('admin.crud-EbMedia', [])
	.config(['$stateProvider', ($stateProvider) => {
		$stateProvider
			.state(
				'admin.EbMedia-list', {
					controller: entityListController,
					controllerAs: 'vm',
					template: entityListTpl,
					url: '/EbMedia',
					params: {
						belongsToEntity: null
					}
				})

			.state(
				'admin.EbMedia-create', {
					controller: entityCreateController,
					controllerAs: 'vm',
					template: entityCreateTpl,
					url: '/EbMedia/create',
					params: {
						belongsToEntity: null
					}
				})

			.state(
				'admin.EbMedia-edit', {
					controller: entityEditController,
					controllerAs: 'vm',
					template: entityEditTpl,
					url: '/EbMedia/:id/edit',
					params: {
						belongsToEntity: null
					}
				})

	}]);
export default ebmediaModule;