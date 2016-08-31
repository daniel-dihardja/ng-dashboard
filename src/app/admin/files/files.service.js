/**
 * Created by danieldihardja on 17/08/16.
 */


class FileServiceProvider {

	constructor() {
		this.urlBase = 'http://192.168.99.100:3000/api';
	}

	setUrlBase(url) {
		this.urlBase = url;
	}

	$get($http) {
		var _this = this;
		_this.$http = $http;

		return {
			getList: function(container) {
				var url = _this.urlBase + '/containers/'+ container +'/files';
				return _this.$http.get(url);
			},

			uploadToUrl: function(file, container) {
				var fd = new FormData();
				fd.append('file', file);
				var params = {
					transformRequest: angular.identity,
					headers: {'Content-Type': undefined}
				};

				var uploadUrl = _this.urlBase + "/containers/"+ container +"/upload";
				return _this.$http.post(uploadUrl, fd, params);
			},

			delete: function(file, container) {
				var url = _this.urlBase + '/containers/'+ container +'/files/' + file;
				return _this.$http.delete(url);
			}
		}
	}
}

export default FileServiceProvider;