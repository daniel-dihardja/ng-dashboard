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
			modelValue: '=ngModel'
		};
	}

	link(scope, element, attrs) {

	}

	static createInstance() {
		return new DefaultField();
	}
}

export default DefaultField.createInstance;