/**
 * Created by danieldihardja on 23/08/16.
 */
import angular from 'angular';

//
import zfHilft from './zf-hilft/zf-hilft';
import zpMedia from '../components/zukunft-projekte/zp-media/index';
import zpArtikel from '../components/zukunft-projekte/zp-artikel/index';
import zpArtikelMedia from '../components/zukunft-projekte/zp-artikel-media/index';


let componentsModule = angular.module('admin.components', [
	zfHilft.name,
	zpMedia.name,
	zpArtikel.name,
	zpArtikelMedia.name
]);
export default componentsModule;