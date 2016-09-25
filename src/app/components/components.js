/**
 * Created by danieldihardja on 23/08/16.
 */
import angular from 'angular';
import crud from '../admin/crud/index';

import zpMediaConfig from './zukunft-projekte/media.config';
import zpArtikelConfig from './zukunft-projekte/artikel.config';

let componentsModule = angular.module('admin.components', [crud.name])
	.config(['$crudProvider', ($crudProvider) => {

		zpMediaConfig($crudProvider);
		zpArtikelConfig($crudProvider);

	}]);
export default componentsModule;