/**
 * Created by danieldihardja on 17/08/16.
 */

class FileListController {

	constructor($state, $files, $scope) {

		this.$state = $state;
		this.$files = $files;
		this.$scope = $scope;
		this.files = {};
		this.selectedFiles = [];
		this.query = {
			order: 'name',
			limit: 5,
			page: 1
		};

		var _this = this;
		$files.getList('http://192.168.99.100:3000/api/containers/etc/files')
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
		console.log('reorder');
	}

	deleteFile(file) {
		console.log('delete', file);
		this.$state.go('filedelete', {file: file.name});

	}

	gotoState(name) {
		this.$state.go(name);
	}
}
FileListController.$inject = ['$state', '$files', '$scope'];
export default FileListController;