/**
 * Created by danieldihardja on 21/08/16.
 */
import controller from './controller';
import template from './template.html!text';

let directive = () => {

	return {
		restrict: 'E',

		scope: {
			uiSref: '@?',
			uiSrefActive: '@?',
			href: '@?',
			target: '@?',
			icon: '@?mdIcon',
			heading: '@mdHeading'
		},

		transclude: true,
		template,
		controller,
		controllerAs: '$mdSidemenuButton',
		bindToController: true
	};
};

export default {
	name: 'mdSidemenuButton',
	directive
}