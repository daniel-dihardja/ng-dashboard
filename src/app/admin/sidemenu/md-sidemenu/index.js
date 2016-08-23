/**
 * Created by danieldihardja on 21/08/16.
 */
import template from './template.html!text';
import link from './link';

let directive = () => {
	return {
		restrict: 'E',
		scope: {
			locked: '@?mdLocked'
		},
		replace: true,
		transclude: true,
		template,
		link
	};
};

export default {
	name: 'mdSidemenu',
	directive
};