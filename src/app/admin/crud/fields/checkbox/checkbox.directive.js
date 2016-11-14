/**
 * Created by danieldihardja on 02/10/16.
 */
import template from './checkbox.html!text';

class CheckboxField {

	constructor($app) {
		this.$app = $app;
		this.restrict = 'E';
		this.require = 'ngModel';
		this.template = template;
		this.scope = {
			label: '@',
			modelValue: '=ngModel'
		};
	}

	link(scope, element, attrs, ngModelCtrl) {

		var options = scope.options || {};
		scope.visibleForUser = true;
		if(options.showOnly) {
			var showOnly = options.showOnly;
			var username = this.$app.username();
			if(showOnly == username) scope.visibleForUser = true;
			else scope.visibleForUser = false;
		}



		ngModelCtrl.$render = function() {
			if(scope.modelValue == 1) scope.modelValue = true;
			else if(scope.modelValue == 0) scope.modelValue = false;
		}
	}

	static createInstance($app) {
		return new CheckboxField($app);
	}
}
CheckboxField.createInstance.$inject = ['$app'];
export default CheckboxField.createInstance;
