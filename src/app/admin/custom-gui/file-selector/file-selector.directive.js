/**
 * Created by danieldihardja on 17/08/16.
 */

import template from './file-selector.html!text';
import dialogController from './dialog-controller';
import dialogTemplate from './dialog-template.html!text';

class FileSelector {

	/**
	 * init file selector
	 * @param $mdDialog
	 */
	constructor($mdDialog, $files) {

		this.restrict = 'E';
		this.template = template;
		this.require = 'ngModel';
		this.scope = {
			container: '@',
			baseUrl: '@'
		};

		this.$mdDialog = $mdDialog;
		this.ngModelCtrl = null;

		this.$files = $files;
	}

	/**
	 * handle file selector events
	 * @param scope
	 * @param element
	 * @param attrs
	 * @param ngModelCtrl
	 */
	link(scope, element, attrs, ngModelCtrl) {

		var _this = this;

		scope.baseUrl = scope.baseUrl || '/assets/images/';
		scope.openDialog = function($event) {
			_this.openDialog(_this.$mdDialog, $event, scope);
		};

		this.ngModelCtrl = ngModelCtrl;
		this.ngModelCtrl.$render = function() {
			scope.selectedFile = ngModelCtrl.$viewValue;
			scope.selectedFileUrl = scope.baseUrl + '/' + scope.container + '/' + scope.selectedFile;
		};

		// get files from trhe given container
		this.$files.getList(scope.container).then(function(res) {
			scope.files = res.data;
		});

		console.log(scope);
	}

	/**
	 * open file select dialog
	 * @param $mdDialog
	 * @param $event
	 * @param scope
	 */
	openDialog($mdDialog, $event, scope) {
		var _this = this;
		$mdDialog.show({
			controller: dialogController,
			controllerAs: 'vm',
			template: dialogTemplate,
			parent: angular.element(document.body),
			targetEvent: $event,
			clickOutsideToClose:true,
			fullscreen: false,
			locals: {
				files: scope.files,
				selectedFile: scope.selectedFile
			},
		})
		.then(function(answer) {
			scope.selectedFile = answer;
			scope.selectedFileUrl = scope.baseUrl + '/' + scope.container + '/' + scope.selectedFile;
			_this.ngModelCtrl.$setViewValue(answer);

		}, function(){
			console.log('cancel');
		})
	}

	static directiveFactory($mdDialog, $files) {
		return new FileSelector($mdDialog, $files);
	}
}

FileSelector.directiveFactory.$inject = ['$mdDialog', '$files'];
export default FileSelector.directiveFactory;