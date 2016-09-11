/**
 * Created by danieldihardja on 23/08/16.
 */
import angular from 'angular';

//
import zfHilft from './zf-hilft/zf-hilft';
import zukunftProjekte from './zukunft-projekte/zukunft-projekte';

let componentsModule = angular.module('admin.components', [
	zfHilft.name,
	zukunftProjekte.name
]);
export default componentsModule;