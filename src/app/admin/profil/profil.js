/**
 * Created by danieldihardja on 09/08/16.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import controller from './profil.controller';
import template from './profil.html!text';


let profilModule = angular.module('admin.profil', [
	uiRouter])

	.config(['$stateProvider', ($stateProvider) => {

		$stateProvider
			.state('profil', {
				controller,
				template,
				url: '/profil'
			});
	}]);

export default profilModule;