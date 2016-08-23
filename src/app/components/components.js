/**
 * Created by danieldihardja on 23/08/16.
 */
import angular from 'angular';

//

import zfHilft from './zf-hilft/zf-hilft';

let componentsModule = angular.module('admin.components', [
	zfHilft.name
]);
export default componentsModule;