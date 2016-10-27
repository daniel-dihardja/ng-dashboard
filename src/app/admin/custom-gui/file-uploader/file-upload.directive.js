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
			maxSize: '@',
			options: '='
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

		scope.baseUrl = appSettings.baseUrl + 'files' || '/files/';
		scope.openUploadDialog = function(evt) {
			this.openUploadDialog(evt, this.$mdDialog, scope)
		}.bind(this);

		scope.delete = function() {
			scope.modelValue = null;
			scope.selectedFile = null;
			scope.selectedFileUrl = null;
		};



		scope.selectedFile = "";
		scope.selectedFileUrl = "";

		this.ngModelCtrl = ngModelCtrl;
		this.ngModelCtrl.$render = function() {
			scope.selectedFile = scope.modelValue;
			scope.selectedFileUrl = scope.baseUrl + '/' + scope.container + '/' + scope.selectedFile;

			var mv = scope.modelValue;
			if(! mv) return;
 			if(mv.indexOf('.mp3') > 0) {
				scope.type = 'audio/mp3';
			}
			else if(mv.indexOf('.mp4') > 0) {
				scope.type = 'video/mp4';
			}
			else if(mv.indexOf('.jpg') > 0 ||
					mv.indexOf('.jpeg') > 0 ||
					mv.indexOf('.png') > 0 ||
					mv.indexOf('.gif') > 0) {

				scope.type = 'image/jpeg';
			}
			console.log('scope.modelValue', scope.modelValue);
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
				options: scope.options
			}
		})
		.then(function(file) {
			if(! file.name) return;

			scope.modelValue = scope.selectedFile = file.name;
			scope.selectedFileUrl = scope.baseUrl + '/' + file.name;
			scope.type = file.type;

		}.bind(this),
		function() {
			// cancel the upload
			console.log('cancel upload');
		}.bind(this))
	}

	static directiveFactory($mdDialog, $files) {
		return new FileUploader($mdDialog, $files);
	}
}

FileUploader.directiveFactory.$inject = ['$mdDialog', '$files'];
export default FileUploader.directiveFactory;