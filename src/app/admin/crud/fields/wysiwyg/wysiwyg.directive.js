/**
 * Created by danieldihardja on 03/10/16.
 */

import template from './wysiwyg.html!text';

class WysiwygField {

	constructor() {
		this.restrict = 'E';
		this.require = 'ngModel';
		this.template = template;
		this.scope = {
			label: '@',
			modelValue: '=ngModel'
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
		return new WysiwygField($app);
	}
}
WysiwygField.createInstance.$inject = ['$app'];
export default WysiwygField.createInstance;