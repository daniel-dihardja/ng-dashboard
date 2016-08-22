/**
 * Created by danieldihardja on 18/08/16.
 */

import appSettings from '../../app.settings';

class AuthService {

	constructor($q, $http) {
		this.$q = $q;
		this.$http = $http;
		this.accessToken = null;
		this.userId = 0;
	}

	login(username, password) {
		var defer = this.$q.defer();

		var url = appSettings.baseApiUrl + '/AppUsers/login';
		var data = { username: username, password: password };

		var _this = this;

		this.$http.post(url, data)
			.then(function(res) {
				console.log(res);

				_this.accessToken = res.data.id;
				_this.userId = res.data.userId;

				_this.$http.defaults.headers.common['Authorization'] = _this.accessToken;

				defer.resolve();
			})
			.catch(function(err) {
			    defer.reject(err);
			});
		return defer.promise;
	}

	ping() {
		//return this.$q.resolve();

		var url = appSettings.baseApiUrl + '/AppUsers/ping';
		return this.$http.get(url)
	}
}
AuthService.$inject = ['$q', '$http'];
export default AuthService;
