/**
 * Created by danieldihardja on 26/09/16.
 */
class DialogUploadController {

	constructor($scope, $mdDialog, $files, container, maxWidth, maxHeight, maxSize) {
		this.$mdDialog = $mdDialog;
		this.$files = $files;

		this.container = container;
		this.maxWidth = maxWidth;
		this.maxHeight = maxHeight;
		this.maxSize = maxSize;

		this.$scope = $scope;
		this.$scope.onFileChanged = this.onFileChanged.bind(this);
		this.allowUpload = true;
	}

	onFileChanged() {
		setTimeout(function() {
			var file = this.$scope.fileToUpload;

			//console.log('file', file);
			/*
			if(file.type != 'image/jpeg' || file.type != 'image/png') {
				// stop if the image type is not jpg or png
				return;
			}
			*/

			var img = document.getElementById('imagePreview');
			var _URL = window.URL || window.webkitURL;
			img.src = _URL.createObjectURL(file);

			img.onload = function(){
				this.$scope.$apply(function() {
					var warningWidth = false;
					var warningHeight = false;
					var allowUpload = true;

					if(img.width > this.maxWidth ) {
						warningWidth = true;
						allowUpload = false;
					}
					if(img.height > this.maxHeight) {
						warningHeight = true;
						allowUpload = false;
					}

					this.warningWidth = warningWidth;
					this.warningHeight = warningHeight;
					this.allowUpload = allowUpload;

					this.previewImageWidth = img.width;
					this.previewImageHeight = img.height;
					this.previewImageSize = file.size;

				}.bind(this));
			}.bind(this);
		}.bind(this), 100);
	}

	upload() {
		var file = this.$scope.fileToUpload;
		this.$files.uploadToUrl(file, this.container)
			.then(function(res) {
				var fileObj = res.data.result.files.file[0];
				this.$mdDialog.hide(fileObj.name);
			}.bind(this))
			.catch(function(err) {
				throw err
			}.bind(this));
	}

	cancel() {
		this.$mdDialog.hide();
	}
}
DialogUploadController.$inject = ['$scope', '$mdDialog', '$files', 'container', 'maxWidth', 'maxHeight', 'maxSize'];
export default DialogUploadController;