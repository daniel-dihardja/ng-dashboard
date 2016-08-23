/**
 * Created by danieldihardja on 21/08/16.
 */
import controller from './controller';
import template from './template.html!text';

let directive = () => {

	return {
		restrict: 'E',
		scope: {
			heading: '@mdHeading',
			icon: '@?mdIcon',
			svgIcon: '@?mdSvgIcon',
			arrow: '@?mdArrow',
			uiSref: '@?'
		},
		replace: true,
		transclude: true,
		template,
		controller,
		controllerAs: '$mdSidemenuContent',
		bindToController: true
	};

};

export default {
	name: 'mdSidemenuContent',
	directive
};