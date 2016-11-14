/**
 * Created by danieldihardja on 02/10/16.
 */
import template from './select.html!text';

class SelectField {

	constructor($app) {
		this.$app = $app;
		this.restrict = 'E';
		this.require = 'ngModel';
		this.template = template;
		this.scope = {
			label: '@',
			modelValue: '=ngModel',
			values: '='
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
		return new SelectField($app);
	}
}
SelectField.createInstance.$inject = ['$app'];
export default SelectField.createInstance;
