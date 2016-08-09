/**
 * Created by danieldihardja on 09/08/16.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import crud from '../../common/crud/crud';

import controller from './profil.controller';
import template from './profil.html!text';


let profilModule = angular.module('admin.profil', [
	uiRouter,
	crud.name])

	.config(($stateProvider) => {
		"ngInject";

		$stateProvider
			.state('profil', {
				controller,
				template,
				url: '/profil'
			});
	})

	.config(($crudProvider) => {
		"ngInject";

		var userCrud = $crudProvider.addEntity('Users');

		userCrud.relation({
			language: {
				type: 'belongsTo',
				foreignKey: 'languageId',
				apiEndPoint: 'Languages'
			}
		})

		.listView()
			.fields([
				userCrud.field('name'),
				userCrud.field('language.name')
			]);

		userCrud.create();
		userCrud.save();
		userCrud.set('name', 'joe');
		userCrud.save();



	});

export default profilModule;