/**
 * Created by danieldihardja on 23/08/16.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import admin from '../../admin/admin';

import controller from './zf-hilft.controller';
import template from './zf-hilft.html!text';
import service from './zf-hilft.service';

// image
import imageEditController from './zf-hilt-image-edit.controller';
import imageCreateController from './zf-hilt-image-create.controller';
import imageForm from './zf-hilft-image-form.html!text';

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

			.state(
				'admin.zfhilft-image-create', {
					controller: imageCreateController,
					controllerAs: 'vm',
					template: imageForm,
					url: '/image-create'
				}
			)

			.state(
				'admin.zfhilft-image-edit', {
					controller: imageEditController,
					controllerAs: 'vm',
					template: imageForm,
					url: '/image-edit'
				}
			)
	}])
	.service('$zfHilft', service);

export default zfHilftModule;