/**
 * Created by danieldihardja on 15/09/16.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import entityListController from './zpmedia-list.controller';
import entityCreateController from './zpmedia-create.controller';
import entityEditController from './zpmedia-edit.controller';
import entityListTpl from './zpmedia-list.html!text';
import entityCreateTpl from './zpmedia-create.html!text';
import entityEditTpl from './zpmedia-edit.html!text';


let zpmediaModule = angular.module('admin.crud-ZpMedia', [])
	.config(['$stateProvider', ($stateProvider) => {
		$stateProvider
			.state(
				'admin.ZpMedia-list', {
					controller: entityListController,
					controllerAs: 'vm',
					template: entityListTpl,
					url: '/ZpMedia'
				})

			.state(
				'admin.ZpMedia-create', {
					controller: entityCreateController,
					controllerAs: 'vm',
					template: entityCreateTpl,
					url: '/ZpMedia/create'
				})

			.state(
				'admin.ZpMedia-edit', {
					controller: entityEditController,
					controllerAs: 'vm',
					template: entityEditTpl,
					url: '/ZpMedia/:id/edit'
				})

	}]);
export default zpmediaModule;