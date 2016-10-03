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

	link(scope, element, attrs) {
		console.log('scope', scope);
		scope.modelValue = true;
	}

	static createInstance() {
		return new CheckboxField();
	}
}

export default CheckboxField.createInstance;
