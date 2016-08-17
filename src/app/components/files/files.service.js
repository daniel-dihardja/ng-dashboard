/**
 * Created by danieldihardja on 17/08/16.
 */
class FileService {

	constructor($http) {
		this.$http = $http;
	}

	uploadToUrl(file, uploadUrl) {
		var fd = new FormData();
		fd.append('file', file);
		var params = {
			transformRequest: angular.identity,
			headers: {'Content-Type': undefined}
		};
		return this.$http.post(uploadUrl, fd, params);
	}

	getList(url) {
		return this.$http.get(url);
	}

	delete(url) {
		return this.$http.delete(url);
	}
}
FileService.$inject = ['$http'];
export default FileService;