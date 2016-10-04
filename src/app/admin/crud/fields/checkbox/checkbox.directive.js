/**
 * Created by danieldihardja on 02/10/16.
 */
import template from './checkbox.html!text';

class CheckboxField {

	constructor() {
		this.restrict = 'E';
		this.require = 'ngModel';
		this.template = template;
		this.scope = {
			label: '@',
			modelValue: '=ngModel'
		};
	}

	link(scope, element, attrs, ngModelCtrl) {
		ngModelCtrl.$render = function() {
			if(scope.modelValue == 1) scope.modelValue = true;
			else if(scope.modelValue == 0) scope.modelValue = false;
		}
	}

	static createInstance() {
		return new CheckboxField();
	}
}

export default CheckboxField.createInstance;
