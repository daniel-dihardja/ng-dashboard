/**
 * Created by danieldihardja on 02/10/16.
 */
import template from './select.html!text';

class SelectField {

	constructor() {
		this.restrict = 'E';
		this.require = 'ngModel';
		this.template = template;
		this.scope = {
			label: '@',
			modelValue: '=ngModel',
			values: '='
		};
	}

	static createInstance() {
		return new SelectField();
	}
}

export default SelectField.createInstance;
