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

	static createInstance() {
		return new CheckboxField();
	}
}

export default CheckboxField.createInstance;
