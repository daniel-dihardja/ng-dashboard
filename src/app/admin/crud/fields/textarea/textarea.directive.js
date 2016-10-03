/**
 * Created by danieldihardja on 03/10/16.
 */

import template from './textarea.html!text';

class TextareaField {

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
		return new TextareaField();
	}
}

export default TextareaField.createInstance;