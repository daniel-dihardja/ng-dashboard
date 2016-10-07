/**
 * Created by danieldihardja on 17/08/16.
 */


class FileServiceProvider {

	constructor() {
		this.urlBase = 'http://192.168.99.100:3000/api';
		var _this = this;

		this.initFactoryGet();
	}

	setUrlBase(url) {
		this.urlBase = url;
	}

	initFactoryGet() {
		var _this = this;

		this.$get = ['$http', function($http) {
			_this.$http = $http;
			return {
				getList: function(container) {
					var url = _this.urlBase + '/containers/'+ container +'/files';
					return _this.$http.get(url);
				},

				uploadToUrl: function(file, container, options) {
					var fd = new FormData();
					options = options || {};
					options = JSON.stringify(options);
					fd.append('file', file);
					fd.append('options', options);
					var params = {
						transformRequest: angular.identity,
						headers: {'Content-Type': undefined, 'Accept-Encoding': 'UTF-8'}
					};

					var uploadUrl = _this.urlBase + "/containers/"+ container +"/upload";
					return _this.$http.post(uploadUrl, fd, params);
				},

				delete: function(file, container) {
					var url = _this.urlBase + '/containers/'+ container +'/files/' + file;
					return _this.$http.delete(url);
				}
			}
		}]
	}
}

export default FileServiceProvider;