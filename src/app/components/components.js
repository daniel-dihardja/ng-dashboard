/**
 * Created by danieldihardja on 23/08/16.
 */
import angular from 'angular';
import crud from '../admin/crud/index';

import zpMediaConfig from './zukunft-projekte/media.config';
import zpArtikelConfig from './zukunft-projekte/artikel.config';
import zpArtikelMediaConfig from './zukunft-projekte/artikel-media.config';

import  aebCategory from './auf-einem-blick/aeb-category.config';
import  aebContent from './auf-einem-blick/aeb-content.config';
import  aebMedia from './auf-einem-blick/aeb-media.config';

// social resp
import stiftung from './social-resp/stiftung.config';
import stipendiaten from './social-resp/stipendiaten.config';
import stipendiat from './social-resp/stipendiat.config';
import kultur from './social-resp/kultur.config';
import kulturItem from './social-resp/kultur-item.config';


let componentsModule = angular.module('admin.components', [crud.name])
	.config(['$crudProvider', ($crudProvider) => {

		zpMediaConfig($crudProvider);
		zpArtikelConfig($crudProvider);
		zpArtikelMediaConfig($crudProvider);

		aebCategory($crudProvider);
		aebContent($crudProvider);
		aebMedia($crudProvider);

		stiftung($crudProvider);
		stipendiaten($crudProvider);
		stipendiat($crudProvider);
		kultur($crudProvider);
		kulturItem($crudProvider);

	}]);
export default componentsModule;