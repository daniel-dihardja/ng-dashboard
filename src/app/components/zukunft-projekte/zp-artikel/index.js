/**
 * Created by danieldihardja on 15/09/16.
 */
import angular from 'angular';

import entityListController from './zpartikel-list.controller';
import entityCreateController from './zpartikel-create.controller';
import entityEditController from './zpartikel-edit.controller';
import entityListTpl from './zpartikel-list.html!text';
import entityCreateTpl from './zpartikel-create.html!text';
import entityEditTpl from './zpartikel-edit.html!text';


let zpartikelModule = angular.module('admin.crud-ZpArtikel', [])
	.config(['$stateProvider', ($stateProvider) => {
		$stateProvider
			.state(
				'admin.ZpArtikel-list', {
					controller: entityListController,
					controllerAs: 'vm',
					template: entityListTpl,
					url: '/ZpArtikel',
					params: {
						belongsToEntity: null
					}
				})

			.state(
				'admin.ZpArtikel-create', {
					controller: entityCreateController,
					controllerAs: 'vm',
					template: entityCreateTpl,
					url: '/ZpArtikel/create',
					params: {
						belongsToEntity: null
					}
				})

			.state(
				'admin.ZpArtikel-edit', {
					controller: entityEditController,
					controllerAs: 'vm',
					template: entityEditTpl,
					url: '/ZpArtikel/:id/edit'
				})

	}]);
export default zpartikelModule;