/**
 * Created by danieldihardja on 23/08/16.
 */
import angular from 'angular';
import crud from '../admin/crud/index';

import zpMediaConfig from './zukunft-projekte/media.config';
import zpMediaWrapperConfig from './zukunft-projekte/media-wrapper.config';
import zpArtikelConfig from './zukunft-projekte/artikel.config';
import zpArtikelMediaConfig from './zukunft-projekte/artikel-media.config';

import  aebCategory from './auf-einem-blick/aeb-category.config';
import  aebContent from './auf-einem-blick/aeb-content.config';
import  aebMedia from './auf-einem-blick/aeb-media.config';
import  aebText from './auf-einem-blick/aeb-text.config';

// social resp
import socialresp from './social-resp/social-responsibility';
import socialRespMedia from './social-resp/social-responsibility-media';

import stiftung from './social-resp/stiftung.config';
import stipendiaten from './social-resp/stipendiaten.config';
import stipendiat from './social-resp/stipendiat.config';
import kultur from './social-resp/kultur.config';
import kulturItem from './social-resp/kultur-item.config';
import musikPreis from './social-resp/musikpreis.config';
import musikPreisItem from './social-resp/musikpreis-item.config';
import kunstStiftung from './social-resp/kunststiftung.config';
import kunstStiftungItem from './social-resp/kunststiftung-item.config';
import hilfsproject from './social-resp/hilfsprojekt.config';
import hilfsprojectItem from './social-resp/hilfsprojekt-item.config';
import zfHilft from './social-resp/zf-hilft.config';
import zfHilftItem from './social-resp/zf-hilft-item.config';
import ledPool from './led-ring/led-pool.config';
import ledContent from './led-ring/led-content.config';
import motorspprtStory from './motorsport/story';
import motorspprtFact from './motorsport/fact';


let componentsModule = angular.module('admin.components', [crud.name])
	.config(['$crudProvider', ($crudProvider) => {

		zpMediaWrapperConfig($crudProvider);
		zpMediaConfig($crudProvider);
		zpArtikelConfig($crudProvider);
		zpArtikelMediaConfig($crudProvider);

		aebCategory($crudProvider);
		aebContent($crudProvider);
		aebMedia($crudProvider);
		aebText($crudProvider);

		socialresp($crudProvider);
		socialRespMedia($crudProvider);

		stiftung($crudProvider);
		stipendiaten($crudProvider);
		stipendiat($crudProvider);
		kultur($crudProvider);
		kulturItem($crudProvider);
		musikPreis($crudProvider);
		musikPreisItem($crudProvider);
		kunstStiftung($crudProvider);
		kunstStiftungItem($crudProvider);

		hilfsproject($crudProvider);
		hilfsprojectItem($crudProvider);

		zfHilft($crudProvider);
		zfHilftItem($crudProvider);

		ledPool($crudProvider);
		ledContent($crudProvider);


		motorspprtStory($crudProvider);
		motorspprtFact($crudProvider);

	}]);
export default componentsModule;