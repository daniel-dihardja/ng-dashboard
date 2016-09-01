/**
 * Created by danieldihardja on 23/08/16.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import admin from '../../admin/admin';

import controller from './zf-hilft.controller';
import template from './zf-hilft.html!text';
import service from './zf-hilft.service';

let zfHilftModule = angular.module('admin.zfHilft', [uiRouter])
	.config(['$stateProvider', ($stateProvider) => {
		$stateProvider
			.state(
				'admin.zfhilft', {
					controller,
					controllerAs: 'vm',
					template,
					url: '/zfhilft'
				}
			)
	}])
	.service('$zfHilft', service);

export default zfHilftModule;