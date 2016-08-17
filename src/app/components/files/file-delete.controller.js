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

	gotoState(name) {
		this.$state.go(name);
	}

	deleteFile() {
		console.log('delete file ...');
		var url = 'http://192.168.99.100:3000/api/containers/etc/files/' + this.file;
		this.$files.delete(url)
			.then(function(res) {
				console.log('file deleted', res);
			})
			.catch(function(err) {
			    throw err;
			});
	}
}
FileDeleteController.$inject = ['$state', '$files', '$stateParams'];
export default FileDeleteController;