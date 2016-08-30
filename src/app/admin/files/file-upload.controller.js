/**
 * Created by danieldihardja on 17/08/16.
 */

class UploadController {

	constructor($q, $scope, $files, $state, $stateParams) {
		this.$q = $q;
		this.$scope = $scope;
		this.$file = $files;
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.file = 2;
	}

	upload() {
		var file = this.$scope.myFile;
		var container = this.$stateParams.container || 'etc';
		var uploadUrl = "http://192.168.99.100:3000/api/containers/"+ container +"/upload";

		console.log('upload ...', file);
		var _this = this;
		this.$file.uploadToUrl(file, uploadUrl)
			.then(function(res) {
				console.log('done ...');
				var con = _this.$stateParams.container;
				_this.$state.go('admin.filelist', {container: con});
			})
			.catch(function(err) {
			    throw err
			});
	}

	gotoList() {
		var con = this.$stateParams.container;
		this.$state.go('admin.filelist', {container: con});
	}
}

UploadController.$inject = ['$q', '$scope', '$files', '$state', '$stateParams'];
export default UploadController;