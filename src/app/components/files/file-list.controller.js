/**
 * Created by danieldihardja on 17/08/16.
 */

class FileListController {

	static customData() {}

	constructor($state, $files, $scope, $stateParams) {

		this.$state = $state;
		this.$files = $files;
		this.$scope = $scope;
		this.$stateParams = $stateParams;

		this.files = {};
		this.selectedFiles = [];

		this.query = {
			order: 'name',
			limit: 10,
			page: 1
		};

		var container = this.$stateParams.container || 'etc';
		var url = 'http://192.168.99.100:3000/api/containers/'+ container +'/files';
		var _this = this;

		this.$files.getList(url)
			.then(function(res) {
				_this.files = {
					count: res.data.length,
					data: res.data
				}
			})
			.catch(function(err) {
				throw err;
			});

	}

	getFiles() {
		console.log(FileListController.customData)
	}

	deleteFile(file) {
		console.log('delete', file);
		var con = this.$stateParams.container;
		this.$state.go('filedelete', {container: con, file: file.name});
	}

	gotoUpload() {
		var con = this.$stateParams.container || 'etc';
		this.$state.go('fileupload', {container: con});
	}
}
FileListController.$inject = ['$state', '$files', '$scope', '$stateParams'];
export default FileListController;