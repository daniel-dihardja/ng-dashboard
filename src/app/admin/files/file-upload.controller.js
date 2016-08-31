/**
 * Created by danieldihardja on 17/08/16.
 */

import appSettings from '../../app.settings';

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
		console.log('upload ...', file);

		var file = this.$scope.myFile;
		var container = this.$stateParams.container || 'etc';
		var uploadUrl = appSettings.baseApiUrl + "/containers/"+ container +"/upload";

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