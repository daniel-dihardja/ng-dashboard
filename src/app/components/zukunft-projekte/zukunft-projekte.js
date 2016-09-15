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
import articleCreateTpl from './zp-artikel/zpartikel-create.html!text';

import imageCreateController from './zp-item-image/zpitemimage-create.controller';
import imageEditController from './zp-item-image/zpitemimage-edit.controller';
import imageEditTpl from './zp-item-image/zpitemimage-edit.html!text';

import videoCreateController from './zp-item-video/zpitemvideo-create.controller';
import videoEditController from './zp-item-video/zpitemvideo-edit.controller';
import videoEditTpl from './zp-item-video/zpitemvideo-edit.html!text';

import zpMedia from './zp-media/index';


let zukunftProjekte = angular.module('admin.zukunftProjekte', [uiRouter, zpMedia.name])
	.config(['$stateProvider', ($stateProvider) => {
		$stateProvider
			.state(
				'admin.zukunft-projekte-station', {
					controller: articleListController,
					controllerAs: 'vm',
					template: articleListTpl,
					url: '/zukunft-projekte/stations/:stationId/articles'
				})
			.state(
				'admin.zukunft-projekte-create-article', {
					controller: articleCreateController,
					controllerAs: 'vm',
					template: articleCreateTpl,
					url: '/zukunft-projekte/stations/:stationId/articles/create'
				})
			.state('admin.zukunft-projekte-edit-article', {
					controller: articleEditController,
					controllerAs: 'vm',
					template: articleEditTpl,
					url: '/zukunft-projekte/stations/:stationId/articles/:articleId',

			})

			.state('admin.zukunft-projekte-create-image', {
				controller: imageCreateController,
				controllerAs: 'vm',
				template: imageEditTpl,
				url: '/zukunft-projekte/stations/:stationId/articles/:articleId/images/create'
			})

			.state('admin.zukunft-projekte-edit-image', {
				controller: imageEditController,
				controllerAs: 'vm',
				template: imageEditTpl,
				url: '/zukunft-projekte/stations/:stationId/articles/:articleId/images/:id',
				params: {
					entity: null
				}
			})

			.state('admin.zukunft-projekte-create-video', {
				controller: videoCreateController,
				controllerAs: 'vm',
				template: videoEditTpl,
				url: '/zukunft-projekte/stations/:stationId/articles/:articleId/videos/create'
			})

			.state('admin.zukunft-projekte-edit-video', {
				controller: videoEditController,
				controllerAs: 'vm',
				template: videoEditTpl,
				url: '/zukunft-projekte/stations/:stationId/articles/:articleId/videos/:id',
				params: {
					entity: null
				}
			})

	}]);

export default zukunftProjekte;