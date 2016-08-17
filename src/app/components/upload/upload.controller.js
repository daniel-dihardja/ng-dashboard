/**
 * Created by danieldihardja on 17/08/16.
 */
class UploadController {
	constructor($q, $scope) {
		this.$q = $q;
		this.$scope = $scope;
	}

	upload() {
		var file = this.$scope.myFile;
		console.log('upload ...', file);
	}
}
UploadController.$inject = ['$q', '$scope'];
export default UploadController;