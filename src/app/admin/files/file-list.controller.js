/**
 * Created by danieldihardja on 17/08/16.
 */

import appSettings from '../../app.settings';

class FileListController {

	static customData() {}

	constructor($state, $files, $scope, $stateParams) {


		console.log('$files', $files);

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
		//var url = appSettings.baseApiUrl + '/containers/'+ container +'/files';
		var _this = this;

		this.$files.getList(container)
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
		this.$state.go('admin.filedelete', {container: con, file: file.name});
	}

	gotoUpload() {
		var con = this.$stateParams.container || 'etc';
		this.$state.go('admin.fileupload', {container: con});
	}
}
FileListController.$inject = ['$state', '$files', '$scope', '$stateParams'];
export default FileListController;