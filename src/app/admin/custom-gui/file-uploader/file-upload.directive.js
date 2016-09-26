/**
 * Created by danieldihardja on 17/08/16.
 */

import appSettings from '../../../app.settings';
import template from './file-upload.html!text';
import uploadController from './dialog-upload.controller';
import uploadTpl from './dialog-upload.html!text';


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

		console.log('scope', scope);

		scope.baseUrl = appSettings.baseUrl + 'files' || '/files/';

		scope.openUploadDialog = function(evt) {
			this.openUploadDialog(evt, this.$mdDialog, scope)
		}.bind(this);


		scope.selectedFile = "";
		scope.selectedFileUrl = "";

		this.ngModelCtrl = ngModelCtrl;
		this.ngModelCtrl.$render = function() {
			scope.selectedFile = scope.modelValue;
			scope.selectedFileUrl = scope.baseUrl + '/' + scope.container + '/' + scope.selectedFile;
		};
	}

	openUploadDialog($event, $mdDialog, scope) {
		$mdDialog.show({
			controller: uploadController,
			controllerAs: 'vm',
			template: uploadTpl,
			parent: angular.element(document.body),
			targetEvent: $event,
			clickOutsideToClose:true,
			fullscreen: false,
			locals: {
				container: scope.container,
				maxWidth: scope.maxWidth,
				maxHeight: scope.maxHeight,
				maxSize: scope.maxSize
			}
		})
		.then(function(fileName) {
			if(! fileName) return;
			console.log('upload complete ...', fileName);
			scope.modelValue = scope.selectedFile = fileName;
			scope.selectedFileUrl = scope.baseUrl + '/' + fileName;
			scope.modelValue = fileName;
			console.log('scope', scope);

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