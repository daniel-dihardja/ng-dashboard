/**
 * Created by danieldihardja on 02/10/16.
 */
import template from './default.html!text';

class DefaultField {

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

		var showOnly = options.showOnly ? options.showOnly : null;
		var username = this.$app.username();

		if(! showOnly) scope.visibleForUser = true;
		else if(showOnly && showOnly == username) scope.visibleForUser = true;
		else if(showOnly && showOnly != username) scope.visibleForUser = false;

		scope.onKeyUp = function() {
			if(! blockRegex) return;
			var value = ngModel.$viewValue;
			value = value.replace(blockRegex, '');
			ngModel.$setViewValue(value);
			ngModel.$render();
		}
	}

	static createInstance($app) {
		return new DefaultField($app);
	}
}
DefaultField.createInstance.$inject = ['$app'];
export default DefaultField.createInstance;