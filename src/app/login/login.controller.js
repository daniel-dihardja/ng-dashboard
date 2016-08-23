/**
 * Created by danieldihardja on 18/08/16.
 */
class LoginController {

	constructor($q, $auth, $state, AppUser) {
		this.$q = $q;
		this.$auth = $auth;
		this.$state = $state;
		this.AppUser = AppUser;
		console.log('Login ...');
	}

	login() {
		console.log('submit ...', this.username, this.password);

		var defer = this.$q.defer();
		var _this = this;

		var creds = {
			username: this.username,
			password: this.password
		};

		this.AppUser.login(creds,
			function() {
				_this.$state.go('admin');
			},
			function(err) {
				throw err;
			});

		/*
		this.$auth.login(this.username, this.password)
			.then(function(res) {
				defer.resolve();
				_this.$state.go('admin');
			})
			.catch(function(err) {
				throw err
			});
		*/


		return defer.promise;
	}
}

LoginController.$inject = ['$q', '$auth', '$state', 'AppUser'];
export default LoginController;