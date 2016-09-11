/**
 * Created by danieldihardja on 11/09/16.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';


import articleListController from './zp-artikel/zpartikel-list.controller';
import articleEditController from './zp-artikel/zpartikel-edit.controller';
import articleCreateController from './zp-artikel/zpartikel-create.controller';
import articleListTpl from './zp-artikel/zpartikel-list.html!text';
import articleEditTpl from './zp-artikel/zpartikel-edit.html!text';

let zukunftProjekte = angular.module('admin.zukunftProjekte', [uiRouter])
	.config(['$stateProvider', ($stateProvider) => {
		$stateProvider
			.state(
				'admin.zukunft-projekte-station', {
					controller: articleListController,
					controllerAs: 'vm',
					template: articleListTpl,
					url: '/zukunft-projekte/stations/:stationId/articles'
				})
			.state('admin.zukunft-projekte-create-article', {
				controller: articleCreateController,
				controllerAs: 'vm',
				template: articleEditTpl,
				url: '/zukunft-projekte/stations/:stationId/articles/create'
			})
			.state('admin.zukunft-projekte-edit-article', {
				controller: articleEditController,
				controllerAs: 'vm',
				template: articleEditTpl,
				url: '/zukunft-projekte/stations/:stationId/articles/:articleId',
				params: {
					entity: null
				}
			})

	}]);

export default zukunftProjekte;