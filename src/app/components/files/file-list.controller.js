/**
 * Created by danieldihardja on 17/08/16.
 */

class FileListController {

	constructor($state, $files) {
		var _this = this;
		_this.$state = $state;
		_this.$files = $files;
		_this.files = [];

		$files.getList('http://192.168.99.100:3000/api/containers/etc/files')
			.then(function(res) {
				console.log('files', res);
				_this.files = res.data;
			})
			.catch(function(err) {
			    throw err;
			});
	}

	deleteFile(file) {
		console.log('delete', file);
		this.$state.go('filedelete', {file: file.name});

	}

	gotoState(name) {
		this.$state.go(name);
	}
}
FileListController.$inject = ['$state', '$files'];
export default FileListController;