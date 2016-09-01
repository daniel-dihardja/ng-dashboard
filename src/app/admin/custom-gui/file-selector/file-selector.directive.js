/**
 * Created by danieldihardja on 17/08/16.
 */

import template from './file-selector.html!text';

class FileSelector {

	constructor($mdDialog) {

		this.restrict = 'E';
		this.template = template;
		this.scope = {
			files: '=',
			container: '@',
			selectedFile: '@',
			baseUrl: '@'
		};

		this.$mdDialog = $mdDialog;
	}

	link(scope, element, attrs) {

		console.log('scope', scope);

		scope.baseUrl = scope.baseUrl || '/assets/images/';

		scope.selectedFile = scope.selectedFile || 'dummy.jpg';

		scope.selectedFileUrl = scope.baseUrl + scope.selectedFile;

		var _this = this;
		scope.openDialog = function($event) {
			_this.openDialog(_this.$mdDialog, $event);
		}
	}

	openDialog($mdDialog, $event) {
		$mdDialog.show(
			$mdDialog.alert()
				.parent(angular.element(document.body))
				.clickOutsideToClose(true)
				.title('This is an alert title')
				.textContent('You can specify some description text in here.')
				.ariaLabel('Alert Dialog Demo')
				.ok('Got it!')
				.targetEvent($event)
		);
	}

	static directiveFactory($parse) {
		return new FileSelector($parse);
	}
}

FileSelector.directiveFactory.$inject = ['$mdDialog'];
export default FileSelector.directiveFactory;