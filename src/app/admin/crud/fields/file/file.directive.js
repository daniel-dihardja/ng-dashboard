/**
 * Created by danieldihardja on 02/10/16.
 */
import template from './file.html!text';

class FileField {

	constructor() {
		this.restrict = 'E';
		this.require = 'ngModel';
		this.template = template;
		this.scope = {
			label: '@',
			modelValue: '=ngModel',
			container: '@',
			params: '='
		};
	}

	link(scope, element, attrs) {

	}

	static createInstance() {
		return new FileField();
	}
}

export default FileField.createInstance;
