/**
 * Created by danieldihardja on 03/10/16.
 */

import template from './textarea.html!text';

class TextareaField {

	constructor($app) {
		this.$app = $app;
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
		scope.visibleForUser = true;
		if(options.showOnly) {
			var showOnly = options.showOnly;
			var username = this.$app.username();
			if(showOnly == username) scope.visibleForUser = true;
			else scope.visibleForUser = false;
		}
	}

	static createInstance($app) {
		return new TextareaField($app);
	}
}
TextareaField.createInstance.$inject = ['$app'];
export default TextareaField.createInstance;