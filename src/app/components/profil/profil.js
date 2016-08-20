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

	.config(['$stateProvider', ($stateProvider) => {
		"ngInject";

		$stateProvider
			.state('profil', {
				controller,
				template,
				url: '/profil'
			});
	}]);

export default profilModule;