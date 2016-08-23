/**
 * Created by danieldihardja on 21/08/16.
 */
import angular from 'angular';
import mdSidemenu from './md-sidemenu/index.js';
import mdSidemenuGroup from './md-sidemenu-group/index.js';
import mdSidemenuContent from './md-sidemenu-content/index.js';
import mdSidemenuButton from './md-sidemenu-button/index.js';


let sidemenuModule = angular.module('sidemenu', ['ngMaterial'])
	.directive('mdSidemenu', mdSidemenu.directive)
	.directive('mdSidemenuGroup', mdSidemenuGroup.directive)
	.directive('mdSidemenuContent', mdSidemenuContent.directive)
	.directive('mdSidemenuButton', mdSidemenuButton.directive);

export default sidemenuModule;