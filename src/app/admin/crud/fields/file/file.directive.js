/**
 * Created by danieldihardja on 02/10/16.
 */
import template from './file.html!text';

class FileField {

	constructor($app) {
		this.$app = $app;
		this.restrict = 'E';
		this.require = 'ngModel';
		this.template = template;
		this.scope = {
			label: '@',
			modelValue: '=ngModel',
			container: '@',
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
		return new FileField($app);
	}
}
FileField.createInstance.$inject = ['$app'];
export default FileField.createInstance;
