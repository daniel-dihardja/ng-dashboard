/**
 * Created by danieldihardja on 21/08/16.
 */
import template from './template.html!text';

let directive = () => {

	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		template
	};
};

export default {
	name: 'mdSidemenuGroup',
	directive
};