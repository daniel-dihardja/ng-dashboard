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

		ngModel.$render = function() {
			var textarea = element.find('textarea');
			textarea.froalaEditor({toolbarButtons: ['paragraphFormat', 'bold', 'italic', 'formatUL', 'html']})
				.froalaEditor('html.set', ngModel.$viewValue);

			textarea.on('froalaEditor.contentChanged', function(e, editor){
				var html = textarea.froalaEditor('html.get');
				if(angular.isString(html)) {
					scope.$apply(function() {
						ngModel.$setViewValue(html);
					})
				}
			})
		}
	}

	static createInstance($app) {
		return new WysiwygField($app);
	}
}
WysiwygField.createInstance.$inject = ['$app'];
export default WysiwygField.createInstance;