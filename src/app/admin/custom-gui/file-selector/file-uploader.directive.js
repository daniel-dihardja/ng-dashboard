/**
 * Created by danieldihardja on 17/08/16.
 */

import template from './file-selector.html!text';
import dialogController from './dialog-controller';
import dialogTemplate from './dialog-template.html!text';

import uploadController from './dialog-upload.controller';
import uploadTpl from './dialog-upload.html!text';

import appSettings from '../../../app.settings';



class FileUploader {

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
			modelValue: '=ngModel',
			type: '@',
			maxWidth: '@',
			maxHeight: '@',
			maxSize: '@'
		};

		this.$mdDialog = $mdDialog;
		this.$files = $files;
		this.ngModelCtrl = null;
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

		scope.baseUrl = appSettings.baseUrl + 'assets' || '/assets/';

		scope.openUploadDialog = this.openUploadDialog.bind(this);

		scope.selectedFile = "";
		scope.selectedFileUrl = "";

		this.ngModelCtrl = ngModelCtrl;
		this.ngModelCtrl.$render = function() {
			scope.selectedFile = scope.modelValue;
			scope.selectedFileUrl = scope.baseUrl + '/' + scope.container + '/' + scope.selectedFile;
		};

		console.log(scope);
	}

	openUploadDialog($event) {
		this.$mdDialog.show({
			controller: uploadController,
			controllerAs: 'vm',
			template: uploadTpl,
			parent: angular.element(document.body),
			targetEvent: $event,
			clickOutsideToClose:true,
			fullscreen: false,
			locals: {

			}
		})
		.then(function(res) {
			console.log('upload complete ...', res);
		}.bind(this),
		function() {
			console.log('cancel upload');
		}.bind(this))
	}

	static directiveFactory($mdDialog, $files) {
		return new FileUploader($mdDialog, $files);
	}
}

FileUploader.directiveFactory.$inject = ['$mdDialog', '$files'];
export default FileUploader.directiveFactory;