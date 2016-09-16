/**
 * Created by danieldihardja on 15/09/16.
 */
import angular from 'angular';

import entityListController from './zpartikelmedia-list.controller';
import entityCreateController from './zpartikelmedia-create.controller';
import entityEditController from './zpartikelmedia-edit.controller';
import entityListTpl from './zpartikelmedia-list.html!text';
import entityCreateTpl from './zpartikelmedia-create.html!text';
import entityEditTpl from './zpartikelmedia-edit.html!text';


let zpartikelmediaModule = angular.module('admin.crud-ZpArtikelMedia', [])
	.config(['$stateProvider', ($stateProvider) => {
		$stateProvider
			.state(
				'admin.ZpArtikelMedia-list', {
					controller: entityListController,
					controllerAs: 'vm',
					template: entityListTpl,
					url: '/ZpArtikelMedia',
					params: {
						belongsToEntity: null
					}
				})

			.state(
				'admin.ZpArtikelMedia-create', {
					controller: entityCreateController,
					controllerAs: 'vm',
					template: entityCreateTpl,
					url: '/ZpArtikelMedia/create',
					params: {
						belongsToEntity: null
					}
				})

			.state(
				'admin.ZpArtikelMedia-edit', {
					controller: entityEditController,
					controllerAs: 'vm',
					template: entityEditTpl,
					url: '/ZpArtikelMedia/:id/edit',
					params: {
						belongsToEntity: null
					}
				})

	}]);
export default zpartikelmediaModule;