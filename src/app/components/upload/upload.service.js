/**
 * Created by danieldihardja on 17/08/16.
 */
class UploadService {
	constructor($http) {
		this.$http = $http;
		this.$q = $q;
	}

	uploadFileToUrl(file, uploadUrl) {
		var fd = new FormData();
		fd.append('file', file);
		var params = {
			transformRequest: angular.identity,
			headers: {'Content-Type': undefined}
		};
		return $http.post(uploadUrl, fd, params);
	}
}
UploadService.$inject = ['$http'];
export default UploadService;