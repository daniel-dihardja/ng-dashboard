/**
 * Created by danieldihardja on 26/09/16.
 */
class DialogUploadController {

	constructor($scope, $mdDialog, $files) {
		this.$mdDialog = $mdDialog;
		this.$files = $files;
		this.$scope = $scope;
		this.$scope.onFileChanged = this.onFileChanged.bind(this);
	}

	onFileChanged() {
		setTimeout(function() {
			console.log('file changed', this.$scope.fileToUpload) ;
			var file = this.$scope.fileToUpload;
			var img = document.getElementById('imagePreview');
			var _URL = window.URL || window.webkitURL;
			img.src = _URL.createObjectURL(file);
			img.onload = function(){
				this.$scope.$apply(function() {
					this.previewImageWidth = img.width;
					this.previewImageHeight = img.height;
					this.previewImageSize = file.size / (1024 * 1024);
				}.bind(this));
			}.bind(this);
		}.bind(this), 100);
	}

	upload() {
		console.log('upload', this.$scope.fileToUpload);
		var file = this.$scope.fileToUpload;
		var container = 'test';
		this.$files.uploadToUrl(file, container)
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
DialogUploadController.$inject = ['$scope', '$mdDialog', '$files'];
export default DialogUploadController;