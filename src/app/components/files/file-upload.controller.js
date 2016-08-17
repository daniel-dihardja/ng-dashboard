/**
 * Created by danieldihardja on 17/08/16.
 */

class UploadController {
	constructor($q, $scope, $files, $state) {
		this.$q = $q;
		this.$scope = $scope;
		this.$file = $files;
		this.$state = $state;
	}

	upload() {
		var file = this.$scope.myFile;
		var uploadUrl = "http://192.168.99.100:3000/api/containers/etc/upload";

		console.log('upload ...', file);
		this.$file.uploadToUrl(file, uploadUrl)
			.then(function(res) {
				console.log('done ...');
			})
			.catch(function(err) {
			    throw err
			});
	}

	gotoState(name) {
		this.$state.go(name);
	}
}

UploadController.$inject = ['$q', '$scope', '$files', '$state'];
export default UploadController;