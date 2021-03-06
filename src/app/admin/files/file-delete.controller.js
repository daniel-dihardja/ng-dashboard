/**
 * Created by danieldihardja on 17/08/16.
 */


class FileDeleteController {

	constructor($state, $files, $stateParams) {
		this.$state = $state;
		this.$files = $files;
		this.$stateParams = $stateParams;

		this.file = $stateParams.file;

		console.log($stateParams);
	}

	gotoList() {
		var con = this.$stateParams.container;
		this.$state.go('admin.filelist', {container: con});
	}

	deleteFile() {
		console.log('delete file ...');
		var container = this.$stateParams.container || 'etc';
		var _this = this;
		this.$files.delete(_this.file, container)
			.then(function(res) {
				console.log('file deleted', res);
				var con = _this.$stateParams.container;
				_this.$state.go('admin.filelist', {container: con});
			})
			.catch(function(err) {
			    throw err;
			});
	}
}
FileDeleteController.$inject = ['$state', '$files', '$stateParams'];
export default FileDeleteController;