/**
 * Created by danieldihardja on 26/09/16.
 */
class DialogUploadController {

	constructor($scope, $mdDialog, $files, container, options, $filter) {
		this.$mdDialog = $mdDialog;
		this.$files = $files;

		this.container = container;
		this.options = options;

		this.$scope = $scope;
		this.$scope.onFileChanged = this.onFileChanged.bind(this);

		this.resetWarnings.bind(this);
		this.previewImage.bind(this);

		this.resetWarnings();
	}

	resetWarnings() {
		this.showPreviewImage = false;
		this.showWarningImageSize = false;
		this.showWarningFileTypes = false;
		this.blockSubmit = true;
		this.uploading = false;
	}

	onFileChanged() {
		setTimeout(function() {
			var file = this.$scope.fileToUpload;

			this.resetWarnings();

			if(file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/gif') {
				this.previewImage(file);
			}
			else if(file.type == 'audio/mp3' || file.type == 'video/mp4') {
				this.$scope.$apply(function() {
					this.blockSubmit = false;
					this.showPreviewImage = false;
					this.showWarningImageSize = false;
				}.bind(this));
			}
			else {
				this.$scope.$apply(function() {
					this.showWarningFileTypes = true;
				}.bind(this));
			}
		}.bind(this), 100);
	}

	previewImage(file) {
		var img = document.getElementById('imagePreview');
		var _URL = window.URL || window.webkitURL;
		img.src = _URL.createObjectURL(file);

		img.onload = function(){
			this.$scope.$apply(function() {

				var maxWidth = this.options.maxWidth || 9999;
				var maxHeight = this.options.maxHeight || 9999;

				if(img.width > maxWidth || img.height > maxHeight) {
					this.imgWidth = img.width;
					this.imgHeight = img.height;
					this.maxWidth = maxWidth;
					this.maxHeight = maxHeight;
					this.showWarningImageSize = true;
					this.showPreviewImage = false;
					this.blockSubmit = true;
				}
				else {
					this.showWarning = false;
					this.showPreviewImage = true;
					this.blockSubmit = false;
				}
			}.bind(this));
		}.bind(this);
	}


	upload() {
		this.uploading = true;
		var file = this.$scope.fileToUpload;
		this.$files.uploadToUrl(file, this.container, this.options)
			.then(function(res) {
				this.uploading = false;
				var fileObj = res.data.result.files.file[0];
				this.$mdDialog.hide(fileObj);
			}.bind(this))
			.catch(function(err) {
				alert(err);
			}.bind(this));
	}

	cancel() {
		this.$mdDialog.hide();
	}
}
DialogUploadController.$inject = ['$scope', '$mdDialog', '$files', 'container', 'options', '$filter'];
export default DialogUploadController;