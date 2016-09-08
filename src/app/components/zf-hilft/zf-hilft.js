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

// project image
import pimageCreateController from './zf-hilft-pimage-create.controller';
import pimageEditController from './zf-hilft-pimage-edit.controller';
import pimageForm from './zf-hilft-pimage-form.html!text';


// project video
import pvideoCreateController from './zf-hilft-pvideo-create.controller';
import pvideoEditController from './zf-hilft-pvideo-edit.controller';
import pvideoForm from './zf-hilft-pvideo-form.html!text';

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
					url: '/image-create/:zfhilftId'
				}
			)

			.state(
				'admin.zfhilft-image-edit', {
					controller: imageEditController,
					controllerAs: 'vm',
					template: imageForm,
					url: '/image-edit',
					params: {
						data: null
					}
				}
			)

			.state(
				'admin.zfhilft-pimage-create', {
					controller: pimageCreateController,
					controllerAs: 'vm',
					template: pimageForm,
					url: '/zfhilft/:zfhilftId/project/:zfHilfsprojektId/image'
				}
			)


			.state(
				'admin.zfhilft-pimage-edit', {
					controller: pimageEditController,
					controllerAs: 'vm',
					template: pimageForm,
					url: '/zfhilft/:zfhilftId/project/:zfHilfsprojektId/image/:id',
					params: {
						data: null
					}
				}
			)

			.state(
				'admin.zfhilft-pvideo-create', {
					controller: pvideoCreateController,
					controllerAs: 'vm',
					template: pvideoForm,
					url: '/zfhilft/:zfhilftId/project/:zfHilfsprojektId/video'
				}
			)

			.state(
				'admin.zfhilft-pvideo-edit', {
					controller: pvideoEditController,
					controllerAs: 'vm',
					template: pvideoForm,
					url: '/zfhilft/:zfhilftId/project/:zfHilfsprojektId/video/:id',
					params: {
						data: null
					}
				}
			)

	}])
	.service('$zfHilft', service);

export default zfHilftModule;