/**
 * Created by danieldihardja on 02/10/16.
 */
import template from './default.html!text';

class DefaultField {

	constructor() {
		this.restrict = 'E';
		this.require = 'ngModel';
		this.template = template;
		this.scope = {
			label: '@',
			modelValue: '=ngModel',
			options: '='
		};
	}

	link(scope, element, attrs, ngModel) {
		var options = scope.options || {};
		var blockRegex = options.blockRegex;
		scope.onKeyUp = function() {
			if(! blockRegex) return;
			var value = ngModel.$viewValue;
			value = value.replace(blockRegex, '');
			ngModel.$setViewValue(value);
			ngModel.$render();
		}
	}

	static createInstance() {
		return new DefaultField();
	}
}

export default DefaultField.createInstance;