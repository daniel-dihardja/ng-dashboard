/**
 * Created by danieldihardja on 18/08/16.
 */
class LoginController {

	constructor($q, $auth, $state, AppUser, $app) {
		this.$q = $q;
		this.$auth = $auth;
		this.$state = $state;
		this.AppUser = AppUser;
		this.$app = $app;
	}

	login() {

		var defer = this.$q.defer();
		var _this = this;

		var creds = {
			username: this.username,
			password: this.password
		};

		this.AppUser.login(creds,
			function() {
				_this.$app.username(creds.username);
				_this.$state.go('admin');
			},
			function(err) {
				throw err;
			});


		return defer.promise;
	}
}

LoginController.$inject = ['$q', '$auth', '$state', 'AppUser', '$app'];
export default LoginController;